import React from 'react'
import ItemsContainer from './Footer/ItemContainer'
import SocialIcons from './Footer/SocialIcons'
import { Icons } from './Footer/Menu'

const Footer = () => {
  return (
    <footer className=''>
      
      <div className='flex w-full items-center justify-between  px-[120px] py-[16px] cursor-pointer border-b border-solid border-[#E4E4E7]'>
        <span> <img src='./' alt='.' />logo</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
      </div>

      <div className='sm:px-[120px]'>
        <ItemsContainer />

      </div>

      <div className="flex flex-col-reverse gap-[10px] sm:flex-row sm:px-[120px] px-[90px] justify-between text-center pt-2 text-gray-400 text-sm pb-8 border-t border-solid border-[#E4E4E7]">
        <span>© 2024 Appy. All rights reserved.</span>

        <SocialIcons Icons={Icons} />
      </div>

    </footer>
  )
}

export default Footer