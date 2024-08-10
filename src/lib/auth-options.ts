import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/database/config";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        userName: { label: "UserName", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials) {
          throw new Error("No credentials provided");
        }
        const { userName, password } = credentials;

        try {
          await connectDB();

          const user = await User.findOne({ userName });
          if (!user) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) return null;
          
          const userLogged = {
            id: user._id.toString(),
            userName: user.userName,
            role: user.role || "user",
            name: user.userName,
          };

          return userLogged;
        } catch (error) {
          console.log(error);
        }

        return null;
      },
    }),
  ],
  
  callbacks: {
    async jwt({token, user}){
      if(user) token.role = user.role
      return token
    },

    async session({session, token}){
      if(session?.user) session.user.role = token.role
      return session
    }
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/panel/admin/user/login",
  },
};
