import Image from 'next/image'
import { useSession, signIn } from 'next-auth/react';

function Login(){
    // const { data: session } = useSession()
    // console.log(session,"LOgin Session")
    return(
        <div className='grid place-items-center'>
            <Image src="https://links.papareact.com/t4i"
                width={400}
                height={400}
                alt="Facebook Logo"
             />
             <h1 onClick={() => signIn()} className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>
                Login with Facebook</h1>
        </div>
    )
}

export default Login;