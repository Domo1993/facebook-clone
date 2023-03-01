import Image from 'next/image'
import HeaderIcon from '../components/HeaderIcon'
import {BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, ViewGridAddIcon} from "@heroicons/react/solid"
import {FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon, UserGroupIcon} from "@heroicons/react/outline"

export default function Header() {
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
        <div className='flex ml-2 items-center'>
            <Image src="https://links.papareact.com/5me"
            width={40}
            height={40}
             />
        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
        <SearchIcon className='h-6 text-gray-600'/>
        <input className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500' type="text" placeholder='Search Facebook' />
        </div>
        </div>
        {/* Center */}
        <div className='flex justify-center flex-grow'>
            <div className='flex space-x-6 md:space-x-2'>
                <HeaderIcon Icon={HomeIcon} active/>
                <HeaderIcon Icon={FlagIcon} />
                <HeaderIcon Icon={PlayIcon} />
                <HeaderIcon Icon={ShoppingCartIcon} />
                <HeaderIcon Icon={UserGroupIcon} />
                
            </div>
        </div>

        {/* Right */}
        <div className='flex items-center sm:space-x-2 justify-end'>
            {/* Profile Pic */}

            <p className='whitespace-nowrap font-semibold pr-3'>Dominic Windvogel</p>
            <ViewGridAddIcon className='icon'/>
            <ChatIcon className='icon'/>
            <BellIcon className='icon'/>
            <ChevronDownIcon className='icon'/>
        </div>
    </div>
  )
}