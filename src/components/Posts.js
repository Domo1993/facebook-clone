import { collection, getFirestore, getDocs } from "firebase/firestore";
import { database, app } from '../../firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useEffect, useState } from "react";
import Post from "./Post";
// import {ref, getDatabase} from 'firebase/database'
// import { useList } from 'react-firebase-hooks/database';

// const db = getDatabase(database);

export default function Posts({ posts }) {
    const [data,setData] = useState(null)
    const [realtimePosts, loading, error] = useCollection(
        collection(getFirestore(app),'posts')
    )
    // console.log(realtimePosts.docs,'POSTS!!!!!')

    // const getData = async () => {
    //     const querySnapshot = await getDocs(collection(database, "posts"));
    //     console.log(querySnapshot.docs.toString())
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //       });
    //       setData(querySnapshot)
    // }

    // useEffect(()=>{
    //     getData()
    // },[])

    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });

  return (
    <div>
      {realtimePosts ? realtimePosts?.docs.map((post) => (
        <Post
            key={post.id}
            name={post.data().name}
            message={post.data().message}
            email={post.data().email}
            timestamp={post.data().timestamp}
            image={post.data().image}
            postImage={post.data().postImage}
        />
      )) : posts.map((post) => (
        <Post
            key={post.id}
            name={post.name}
            message={post.message}
            email={post.email}
            timestamp={post.timestamp}
            image={post.image}
            postImage={post.postImage}
        />
      ))}
    </div>
  )
}
