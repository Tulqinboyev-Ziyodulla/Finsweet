import Image from 'next/image'
import React from 'react'
import Facebook from '../app/assets/Facebook.png'
import Twitter from '../app/assets/Twitter.png'
import Instagram from '../app/assets/Instagram.png'
import LinkedIn from '../app/assets/LinkedIn.png'

const Footer = () => {
  return (
    <div className='container flex justify-between bg-[#FFE6D2] h-[80px]'>
        <div className='flex items-center gap-[42px]'>
            <h2 className='text-black text-[22px] font-bold ml-24'>Finsweet</h2>
            <p className='text-black text-[16px] font-semibold'>©2021 Finsweet</p>
        </div>
        <div className='flex items-center mr-24 gap-[27px]'>
            <Image src={Facebook} alt='Icon' className=' cursor-pointer'/>
            <Image src={Twitter} alt='Icon' className=' cursor-pointer'/>
            <Image src={Instagram} alt='Icon' className=' cursor-pointer'/>
            <Image src={LinkedIn} alt='Icon' className=' cursor-pointer'/>
        </div>
    </div>
  )
}

export default Footer