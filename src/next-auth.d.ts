// next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      role: string;
      userName: string;
    } & DefaultSession["user"];
  }

  interface User {
    role: string,
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT{
    role: string;
  }
}
