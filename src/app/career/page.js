import Image from 'next/image'
import React from 'react'
import Careers from '../assets/Careers.png'
import Shapes from '../assets/Shapes.png'



const Career = () => {
  return (
    <div className='container'>
      <div className=' flex justify-end mr-24 mt-10 bg-no-repeat bg-right-top mx-auto'>
        <Image src={Shapes} alt='Image' />
      </div>
      <div className='flex flex-col  items-center'>
        <p className='text-[#232536] text-[14px] font-semibold'>CAREER AT FINSWEET</p>
        <h2 className='text-[#232536] text-[48px] text-center font-semibold w-[624px]'>We hired people who are
          Always Passionate about what they do</h2>
        <p className='text-[16px] text-[#232536] mt-[24px] text-center w-[624px]'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw .</p>
        <Image src={Careers} alt='Photo' className='mt-[64px]' />
        <p className='text-[#232536] text-[18px] font-semibold mt-[80px]'>See Our open positions </p>
        <span className='mt-[16px]'>👇</span>
      </div>
    </div>
  )
}

export default Career