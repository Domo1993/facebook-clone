import Head from 'next/head'
import Header from '../components/Header'
import { getSession } from 'next-auth/react'
import Login from '../components/Login'

export default function Home({ session }) {
  if(!session) return <Login/>;

  return (
    <>
      <Head>
        <title>Facebook</title>
      </Head>
      <Header/>
      {/* Header */}
      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </>
  )
}

export async function getServerSideProps(context){
  // Get the user
  const session = await getSession(context);
  return {
    props: {
      session
    }
  }
}