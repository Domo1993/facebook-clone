import { collection, getFirestore, orderBy } from "firebase/firestore";
import { app } from '../../firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import Post from "./Post";

export default function Posts({ posts }) {
    // const [realtimePosts, loading, error] = useCollection(
    //     collection(getFirestore(app),'posts'), orderBy('timestamp','desc')
    // )
    const [realtimePosts, loading, error] = useCollection(
      collection(getFirestore(app),'posts')
      )

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
