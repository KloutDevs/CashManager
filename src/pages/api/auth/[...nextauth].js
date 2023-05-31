/* NOTAS:

1. Faltan agregar al archivo .env los ID y Secrets de los proovedores correspondientes
2. Crear un secret especial para cuando se pase la aplicación a modo producción

 */


/* GENERAL IMPORTS */

import NextAuth from "next-auth";
import axios from "axios";

/* PROVIDERS */

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  session: {
    strategy: "jwt", // Set JSON WEB TOKENS as strategy.
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials, req) {
        // Make a request to my private rest api server
        let server = {
          production: process.env.PRODUCTION_BACKEND_SERVER,
          development: process.env.DEVELOPMENT_BACKEND_SERVER,
        } // Set the backend server by the app state.
        const user = await axios.request(`${server[process.env.NODE_ENV]}/login`, {
          params: {
            app_: 'klout.apps.cashmanager',
            user: credentials.username,
            password: credentials.password
          }
        }); // Make the request to the private backend.
        if (user.data.isAuthenticated === true) {
          return user.data;
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user)
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user
      return session;
    },
    redirect: async (url, baseUrl) => {
      return "/app/dashboard";
    }
  },
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login"
  },
  secret: process.env.NEXTAUTH_SECRET,
});
