

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export const{handlers, signIn, signOut, auth}=NextAuth({
    providers: [GoogleProvider],
    callbacks:{
        async jwt({token, account}){
            if(account?.id_token){
                token.id_token=account.id_token
            }
        },
        async session({session, token}){
            session.id_token=token.id_token
            return session
        }
    }
})