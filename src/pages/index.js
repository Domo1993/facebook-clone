import Head from 'next/head'
import Header from '../components/Header'
import { authOptions } from './api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import Login from '../components/Login'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'

export default function Home({ session }) {
  if(!session) return <Login/>;

  return (
    <>
      <Head>
        <title>Facebook</title>
      </Head>
      <Header/>
      {/* Header */}
      <main className='flex bg-gray-100'>
        <SideBar/>
        <Feed />
        {/* Widgets */}
      </main>
    </>
  )
}

export async function getServerSideProps(context){
  console.log(authOptions.userinfo,'AUTH')
  // Get the user
  const session = await getServerSession(context.req, context.res, authOptions)

  console.log(session, "SESSION")
  return {
    props: {
      session
    }
  }
}
