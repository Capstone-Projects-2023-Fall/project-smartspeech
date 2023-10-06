import {useSession, signIn, signOut} from "next-auth/react"

export default function Login(){
     const {data: session, loading } = useSession()
     if(session){ 
        return (
             // error with the session.user.email possibly 'undefined'
            <>
                Signed in as {session.user.email} <br/> 
                <div>You can now access the AAC board page</div>
                <button onClick={() => signOut()}>Sign Out</button>
            </>
        )
     }
     return(
        <>
            Not signed in <br/>
            <button onClick={() => signIn()}>Sing In</button>
        </>
     )
}
