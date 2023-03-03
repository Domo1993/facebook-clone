function HeaderIcon({ Icon, isActive }) {
  return (
    <div className="flex items-center cursor-pointer md:px-5 lg:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl
    active:border-b-2 active:border-blue-500 hover:text-blue-500">
      <Icon className={`h-5 ${isActive ? 'text-blue-500' : 'text-gray-500'} text-center sm:h-7 mx-auto`}/>
    </div>
  )
}

export default HeaderIcon
