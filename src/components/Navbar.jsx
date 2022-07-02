import React, {useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

import Me from '../data/me.jpg'

import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateContext } from '../contexts/ContextProvider'
import {Cart, Chat, Notification, UserProfile} from '.'

const NavButton = ({title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc} style={{color}} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{background : dotColor}} 
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
        {icon}
      
    </button>
  </TooltipComponent>
)

const Navbar = () => {

  const {activeMenu, setActiveMenu, handleClick, isClicked, setisClicked, screenSize, setscreenSize} = useStateContext()

  useEffect(() => {
    const handleResize = ()=>setscreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
   if(screenSize<=900){
    setActiveMenu(false)
   }else{
    setActiveMenu(true)
   }
    
  }, [screenSize])
  
  

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton 
        title='Menu' 
        customFunc={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} 
        icon={<AiOutlineMenu/>} 
        color='blue'
      />

      <div className='flex'>
        <NavButton 
          title='Cart' 
          customFunc={()=>handleClick('cart')} 
          icon={<FiShoppingCart/>} 
          color='blue'
        />
        <NavButton 
          title='Chat' 
          customFunc={()=>handleClick('chat')} 
          icon={<BsChatLeft/>} 
          color='blue'
          dotColor='#03C9D7'
        />
        <NavButton 
          title='Notifications' 
          customFunc={()=>handleClick('notification')} 
          icon={<RiNotification3Line/>} 
          color='blue'
          dotColor='#03C9D7'
        />
        <TooltipComponent content='Profile' position='BottomCenter'>
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={()=>handleClick('userProfile')}>
            <img className='rounded-full h-8 w-8' src={Me} alt="" />
            <p>
              <span className='text-gray-400 text-14'>Hi,</span>{''}
              <span className='text-gray-400 font-bold ml-1 text-14'>Nabil</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14'/>
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat/>}
        {isClicked.notification && <Notification/>}
        {isClicked.userProfile && <UserProfile/>}
      </div>
    </div>
  )
}

export default Navbar