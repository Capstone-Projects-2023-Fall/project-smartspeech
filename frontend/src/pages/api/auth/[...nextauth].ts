import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import FacebookProvider from "next-auth/providers/facebook";
import NextAuth from "next-auth/next";

export const options: NextAuthOptions = {
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID as string,
            clientSecret: process.env.FACEBOOK_SECRET as string,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_FB_ID as string,
            clientSecret: process.env.GOOGLE_FB_SECRET as string,
        }),
    ],
};

export default NextAuth(options);