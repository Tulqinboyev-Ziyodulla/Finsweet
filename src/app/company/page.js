import Image from 'next/image'
import React from 'react'
import Shapes from '../assets/Shapes.png'
import Img from '../assets/Image 1.png'
import Photo from '../assets/Image 2.png'
import Fon from '../assets/Image 3.png'

const Company = () => {
    return (
        <>
        <div className='container flex justify-between'>
            <div className='ml-24'>
                <div className='w-[28px] h-[28px] bg-[#FFD3AF] mt-[96px]'></div>
                <p className='text-black text-[14px] font-semibold mt-[24px]'>Company</p>
                <h2 className='text-[#232536] text-[48px] font-bold w-[664px]'>Award-winning Company seen and used by millions around the world.</h2>
                <p className='text-[#232536] text-[16px] w-[719px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. </p>
            </div>
            <div className='mr-24 mt-[96px]'>
                <Image src={Shapes} alt='Image'/>
            </div>
        </div>
        <div className='flex justify-center mt-[64px] gap-10 p-5'>
            <Image src={Img} alt='Photo'/>
            <Image src={Photo} alt='Photo'/>
            <Image src={Fon} alt='Photo'/>
        </div>
        </>
    )
}

export default Company