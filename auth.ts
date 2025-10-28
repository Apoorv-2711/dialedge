import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        // Check credentials against environment variables
        if (
          credentials.username === process.env.CMS_USERNAME &&
          credentials.password === process.env.CMS_PASSWORD
        ) {
          return {
            id: "1",
            name: "CMS Admin",
            email: "admin@cms.local",
            username: credentials.username as string,
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/cms/login",
  },
  callbacks: {
    authorized: async ({ auth, request: { nextUrl } }) => {
      const isLoggedIn = !!auth?.user;
      const isOnCMS = nextUrl.pathname.startsWith("/cms");
      const isOnLogin = nextUrl.pathname === "/cms/login";

      if (isOnCMS && !isOnLogin) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }

      if (isOnLogin && isLoggedIn) {
        return Response.redirect(new URL("/cms", nextUrl));
      }

      return true;
    },
  },
  session: {
    strategy: "jwt",
  },
});
