import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

// because we are usi
export default NextAuth({
  // steps in creating google auth key
  /*1.go to Google.cloud.components
  2 go to api services
  3.create name of application , uri , call back uri
  4. copy google client id and secret*/
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
})