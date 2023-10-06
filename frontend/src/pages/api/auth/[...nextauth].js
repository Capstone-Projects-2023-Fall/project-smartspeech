import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export const authOptions = {
    providers: [
        Providers.Github({
            clientID: "", 
            clientSecret: ""
        }),
        Providers.Twitter({
            clientID: "", 
            clientSecret: ""
        }),
        Providers.Email({
            server:{
                host: "",
                port: "",
                auth: {
                    user: "",
                    pass: ""
                }
             },
             form: "",
        }) 
    ],
}

export default NextAuth(authOptions)