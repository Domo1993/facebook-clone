import { ChevronDoubleDownIcon, ShoppingBagIcon, UserGroupIcon } from "@heroicons/react/outline"
import { CalendarIcon, ClockIcon, DesktopComputerIcon, UsersIcon } from "@heroicons/react/solid"
import { useSession } from "next-auth/react"
import SidebarRow from "./SidebarRow"

export default function SideBar() {
    const {data} = useSession()
    console.log(data.user,'SIDEBAR')
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={data.user.image} title={data.user.name} />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDoubleDownIcon} title="See More" />
    </div>
  )
}
