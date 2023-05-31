"use client";

import AppBar from "../components/appBar";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider, createTheme } from "@mui/material/styles/"

let theme = createTheme({});

export default function RootLayout({ children }) {

  return (
    <html>
      <head />
      <ThemeProvider theme={theme}>
        <body style={{ margin: 0 }}>
          <SessionProvider>
            <AppBar />
            {children}
          </SessionProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}