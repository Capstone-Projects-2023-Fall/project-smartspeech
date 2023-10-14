import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
//import TwitterProvider from "next-auth/providers/twitter";
import EmailProvider  from "next-auth/providers/email";
//import Auth0Provider from "next-auth/providers/auth0";

export const options: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        }),
        // cannot create the twitter auth until we have an actual web app link
        /*TwitterProvider({
            clientId: "",
            clientSecret: ""
        }), 
        */

       // Used SendGrid for Emails
        EmailProvider({
            server:{
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.EMAIL_SERVER_FROM,
        }),
        /*
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID as string,
            clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
            domain: process.env.AUTH0_DOMAIN as string

        }),
        */
       
        /*
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "your-awesome-passsword"
                }
            },
            async authorize(credentials) {
                // this is where you need to retrieve user data
                // to erify with credentials
                const user = {id: "42", name: "Cynthia", password: "nextauth"}


                if (credentials?.username === user.name && credentials?.password === user.password){
                    return user
                } else{
                    return null
                }
            }
        })
        */
    ],
    /*
    Database:{
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
    }
    */
    }