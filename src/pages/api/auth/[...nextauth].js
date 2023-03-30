import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import axios from "axios";

export default NextAuth({
  session: {
    strategy: "jwt",
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
        }
        const user = await axios.request(`${server[process.env.NODE_ENV]}/login`, {
          params: {
            app_: 'cashmanager',
            user: credentials.username,
            password: credentials.password
          }
        });
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
      return "/dashboard";
    }
  },
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/auth/error"
  },
  secret: process.env.NEXTAUTH_SECRET,
});
