import User from "@/models/user";
import connect from "@/utils/db"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import bcrypt from "bcryptjs"

// because we are using app router, we use handler and confgiure as get or post methods
const authOptions = {
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

    // using user credentials
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",

      // authorize user credentials
      async authorize(credentials) {

        // check if uer exists in our database
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email })

          if (user) {
            // chehck password
            const passwordTrue = bcrypt.compareSync(credentials.password, user.password)
            if (passwordTrue) {

              // whenever we return an object in credentials provider,
              // it returns true
              return user
            }

            else {
              throw new Error("Invalid Credentials")
            }
          }

          else {
            throw new Error("Invalid-Credentials")
          }


        } catch (err) {
          throw new Error(err)
        }

      }
    })
  ],

  // add redeirect pages route
  pages: {
    error: "/dashboard/login"
  }



}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }