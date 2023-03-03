import Image from "next/image";


export default function Contact({src, name}) {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200
    cursor-pointer p-2 rounded-xl">
      <Image 
        className="rounded-full"
        src={src}
        width={50}
        height={50}
        style={{height:'50px', width:'50px', objectFit: 'fill'}}
        alt=''
      />
      <p>{name}</p>
      <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full"></div>
    </div>
  )
}
