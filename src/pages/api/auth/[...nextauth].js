import NextAuth from "next-auth"
import FacebookProvider from 'next-auth/providers/facebook'
// import GithubProvider from "next-auth/providers/github"
export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    })
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)