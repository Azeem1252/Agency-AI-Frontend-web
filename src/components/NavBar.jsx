import assets from '../assets/assets'
import { useState } from 'react'
import ThemeToggleButn from './themetogglebutn';
import { motion } from "motion/react"

const NavBar = ({theme,settheme}) => {
  const [sidebaropen,setsidebaropen] = useState(false);
  return (
    <motion.nav
    initial={{ y: -25, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
     className=' flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-50 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900'>

       <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-35 sm:w-40' alt="/" />

       <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebaropen? 'max-sm:w-0 overflow-hidden':'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 right-0 bottom-0  max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-[#5044e5] max-sm:pt-20  max-sm:text-white flex sm:items-center gap-8 transition-all duration-300 ease-in-out max-sm:shadow-lg `}>

        <img src={assets.close_icon} alt="" className='w-5 absolute sm:hidden right-4 top-4' onClick={()=>setsidebaropen(false)} />
       <a onClick={()=>setsidebaropen(false)} href="#" className='sm:hover:border-b-2  border-[#5044e5] '>Home</a>
       <a  onClick={()=>setsidebaropen(false)} href="#services" className='sm:hover:border-b-2 border-[#5044e5] '>Services</a>
       <a  onClick={()=>setsidebaropen(false)} href="#our-work" className='sm:hover:border-b-2  border-[#5044e5] '>Our work</a>
       <a  onClick={()=>setsidebaropen(false)} href="#contact-us" className='sm:hover:border-b-2  border-[#5044e5] '>Contact us</a>
       </div>
       <div className='flex items-center gap-2 sm:gap-4'>
        <ThemeToggleButn theme={theme} settheme={settheme}/>
        <img src={theme=== 'dark' ? assets.menu_icon_dark:assets.menu_icon} alt="" onClick={()=>setsidebaropen(true)} className='w-8 sm:hidden'   />
        <a href="#contact-us" className='text-sm  flex items-center gap-2  bg-[#5044e5]  text-white px-6 py-2 rounded-full hover:scale-103 transition-all cursor-pointer max-sm:hidden'>
          Connect <img src={assets.arrow_icon} width={14} alt="" />
        </a>
       </div>
    </motion.nav>
  )
}

export default NavBar
