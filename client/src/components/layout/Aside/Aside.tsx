import Navigation from "@/components/UI/Navigtion/Navigation"
import { navItems } from "@/components/constant/navConstant"

const Aside = () => {
  return <>
  <Navigation  navLinks={navItems} className=" px-5 sticky h-80 [&>li]:mb-5 [&:li:last]:mt-[90%]  rounded-md"/>
  
  </>
}

export default Aside
