import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleButn = ({theme,settheme}) => {
    useEffect(() => {
        const prefersDarkMode =  window.matchMedia('(prefers-color-scheme: dark)').matches;
        settheme(theme || (prefersDarkMode ? 'dark' : 'light'))
        },[theme])
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', theme);
        }
    }, [theme]);
  return (
    <>
     
      <button>
        {theme === 'dark' ?
         (<img src={assets.sun_icon} alt="toggle theme" className='size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer' onClick={() => settheme('light')} />
         ) :
         ( <img src={assets.moon_icon} alt="toggle theme" className='size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer' onClick={() => settheme('dark')} />)
        }
      </button>
    </>
  )
}

export default ThemeToggleButn
