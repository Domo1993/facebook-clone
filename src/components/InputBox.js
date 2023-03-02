import Image from "next/image";
import { useSession } from 'next-auth/react'
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
import { database } from '../../firebase'
import {ref, uploadString, getDownloadURL, getStorage} from "firebase/storage";
import { collection, addDoc, serverTimestamp, setDoc, doc} from 'firebase/firestore'

const dbInstance = collection(database, 'posts')
const storage = getStorage()

export default function InputBox() {
    const {data} = useSession()
    const inputRef = useRef(null)
    const filePickerRef = useRef(null)
    const [imageToPost, setImageToPost] = useState(null)

    const sendPost = (e) => {
        e.preventDefault()
        if(!inputRef.current.value) return;
        const message = inputRef.current.value
        console.log(message,"MESSAGE")
        if(imageToPost){
            const storageRef = ref(storage, `posts${e.timeStamp}`)
            uploadString(storageRef, imageToPost, "data_url").then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    console.log(url,'URL')
                  addDoc(dbInstance, {
                    message: message,
                    name: data.user.name,
                    email: data.user.email,
                    image: data.user.image,
                    postImage: url,
                    timestamp: serverTimestamp()
                });
                });
              });
        } else {
            addDoc(dbInstance,{
                message: inputRef.current.value,
                name: data.user.name,
                email: data.user.email,
                image: data.user.image,
                timestamp: serverTimestamp()
        })
        }
        // addDoc(dbInstance,{
        //     message: inputRef.current.value,
        //     name: data.user.name,
        //     email: data.user.email,
        //     image: data.user.image,
        //     timestamp: serverTimestamp()
        // }).then(doc => {
        //     console.log(doc.id,"DOC")
        //     if(imageToPost){
        //         // const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost,'data_url')

                // removeImage()
                // uploadTask.on('state_change',null, error => console.error(error),()=>{
                //     storage.ref('posts').child(doc.id).getDownloadURL().then(url => {
                //         dbInstance.collection('posts').doc(doc.id).set({
                //             postImage: url
                //         }, {merge: true})
                //     })
                // })
        //         const storageRef = ref(storage, `posts${doc.id}`)
        //         uploadString(storageRef, imageToPost, "data_url").then((snapshot) => {
        //             getDownloadURL(snapshot.ref).then((url) => {
        //                 console.log(url,'URL')
        //               addDoc(dbInstance, {
        //                 // message: inputRef.current.value,
        //                 // name: data.user.name,
        //                 // email: data.user.email,
        //                 // image: data.user.image,
        //                 postImage: url,
        //                 // timestamp: serverTimestamp()
        //             });
        //             });
        //           });
          
        //         //   removeImage();
        //     }
        // })

        inputRef.current.value = ''
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }
    }

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image 
            className="rounded-full"
            src={data.user.image}
            width={40}
            height={40}
            alt='pic placeholder'
        />
        <form className="flex flex-1">
            <input className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" 
            type='text' 
            placeholder={`What's on your mind, ${data.user.name}`}
            ref={inputRef}
            />
            <button hidden type="submit" onClick={(e)=> sendPost(e)}>Submit</button>
        </form>

        {imageToPost && (
            <div className="flex flex-col filter hover:brightness-110 transition duration-150 transform
            hover:scale-105 cursor-pointer">
                <img className="h-10 object-contain" src={imageToPost} alt=""/>
                <p className="text-xs text-red-500 text-center">Remove</p>
            </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
            <VideoCameraIcon className="h-7 text-red-500"/>
            <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div className="inputIcon" onClick={() => filePickerRef.current.click()}>
            <CameraIcon className="h-7 text-green-400"/>
            <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
            <input ref={filePickerRef} type='file' onChange={(e)=>addImageToPost(e)} hidden/>
        </div>

        <div className="inputIcon">
            <EmojiHappyIcon className="h-7 text-yellow-300" />
            <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  )
}
