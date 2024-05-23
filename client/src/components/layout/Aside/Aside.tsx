import Navigation from "@/components/UI/Navigtion/Navigation"
import { navItems } from "@/components/constant/navConstant"

const Aside = () => {
  return (
    <aside className="bg-[#ffffffea] mr-5 rounded-xl text-[#0a2640] shadow-[#0f3c66b8] shadow-md">
      <Navigation
        navLinks={navItems}
        className=" px-5 sticky h-80 [&>li]:mb-5 [&:li:last]:mt-[90%]  rounded-md"
      />
    </aside>
  )
}

export default Aside
