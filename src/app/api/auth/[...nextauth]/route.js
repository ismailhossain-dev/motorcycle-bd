import { dbConnect } from "@/lib/dbConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },

      async authorize(credentials) {
        const { email, password } = credentials;
        console.log("login email and password", email, password);

        //check user database ase kina
        const user = await dbConnect("users").findOne({ email });
        if (!user) {
          return null;
        }

        //has password compere korchi sob tik ase check korar jorno
        const isPasswordOk = await bcrypt.compare(password, user.password);
        if (isPasswordOk) {
          return user;
        }

        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
//next auth getting started/Initialization eta chara login form asbe na
export { handler as GET, handler as POST };
