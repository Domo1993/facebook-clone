import Head from 'next/head'
import Header from '../components/Header'
import { authOptions } from './api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import Login from '../components/Login'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import { database } from '../../firebase'
import { collection, getFirestore, getDocs } from "firebase/firestore";

export default function Home({ session, posts }) {

  if(!session) return <Login/>;

  return (
    <>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header/>

      <main className='flex bg-gray-100'>
        <SideBar/>
        <Feed posts={posts}/>
        <Widgets/>
      </main>
    </>
  )
}

export async function getServerSideProps(context){
  console.log(authOptions.userinfo,'AUTH')
  // Get the user
  const session = await getServerSession(context.req, context.res, authOptions)

  // const posts = await database.collection("posts").orderBy("timestamp", "desc").get()

  const posts = await getDocs(collection(database, "posts"))

  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }))

  console.log(session, "SESSION")
  return {
    props: {
      session,
      posts: docs,
    }
  }
}
