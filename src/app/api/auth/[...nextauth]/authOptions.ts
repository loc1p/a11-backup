import { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import userLogin from "@/libs/userLogIn"

export const authOptions: AuthOptions = {
  providers: [
    // authentication provider use credentials provider
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      credentials: {
        email: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        if (!credentials) return null
        const user = await userLogin(credentials.email, credentials.password)

        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token, user }) {
      session.user = token as any
      return session
    },
  },
}