import Image from 'next/image'
import React from 'react'
import HomeImg from './assets/Home-img.png'
import LogoIspum from './assets/LogoIspum.png'
import LogoTwo from './assets/LogoTwo.png'
import LogoThree from './assets/LogoThree.png'
import LogoFour from './assets/LogoFour.png'
import LogoFive from './assets/LogoFive.png'


const Home = () => {
  return (
    <>
      <div className='container w-full h-[898px] bg-[#232536] flex justify-between'>
        <div className='ml-24 mt-[152px]'>
          <h2 className='text-[56px] text-white font-bold w-[624px]'>Transform Your Idea Into Reality with Finsweet</h2>
          <p className='text-[#ddd] mt-[24px] text-[16px] w-[528px]'>The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.</p>
          <button className='text-white bg-[#444CFC] mt-[32px] w-[219px] h-[64px] text-[16px] font-semibold hover:bg-[#2f36b7] active:bg-[#444CFC]'>Request Quote <span className='text-[20px]'>→</span></button>
        </div>
        <div className='mr-24 mt-[96px]'>
          <Image src={HomeImg} alt='Image' />
        </div>
      </div>
      <div className='bg-[#232536] flex justify-center gap-10 items-center'>
        <div>
          <p className='text-[#ddd] text-[14px] font-semibold'>Our Clients</p>
          <h2 className='text-white text-[18px] font-semibold'>We've Worked with</h2>
        </div>
        <div className='flex gap-10'>
          <Image src={LogoIspum} alt='Image' />
          <Image src={LogoTwo} alt='Image' />
          <Image src={LogoThree} alt='Image' />
          <Image src={LogoFour} alt='Image' />
          <Image src={LogoFive} alt='Image' />
        </div>
      </div>
    </>
  )
}

export default Home