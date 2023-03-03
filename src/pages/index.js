import Head from 'next/head'
import Header from '../components/Header'
import { authOptions } from './api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import Login from '../components/Login'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import { database } from '../../firebase'
import { collection, getFirestore, getDocs, orderBy } from "firebase/firestore";

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
  // Get the user
  const session = await getServerSession(context.req, context.res, authOptions)

  // const posts = await database.collection("posts").orderBy("timestamp", "desc").get()

  const posts = await getDocs(collection(database, "posts"), orderBy('timestamp','desc'))

  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }))

  return {
    props: {
      session,
      posts: docs,
    }
  }
}
