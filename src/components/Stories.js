import StoryCard from "./StoryCard"

const stories = [
    {
        name: "Dominic Windvogel",
        src:"https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v",
    },
    {
        name: "Dominic Windvogel",
        src:"https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v",
    },
    {
        name: "Dominic Windvogel",
        src:"https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v",
    },
    {
        name: "Dominic Windvogel",
        src:"https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v",
    },
    {
        name: "Dominic Windvogel",
        src:"https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v",
    },
]

export default function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story,index) => (
        <StoryCard key={index} name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  )
}
