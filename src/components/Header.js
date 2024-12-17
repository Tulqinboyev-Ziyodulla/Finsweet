"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Header = () => {
  const [active, setActive] = useState('/');

  return (
    <div className='container flex justify-between bg-[#232536] items-center w-full h-[80px]'>
      <h2 className='text-white text-[22px] font-bold ml-24'>Finsweet</h2>
      <div className='flex justify-end items-center gap-10 text-[16px] font-semibold text-[#ccc] mr-24'>
        <Link href={'/'} onClick={() => setActive('/')}>
          <span className={active === '/' ? 'text-white' : ''}>Home</span>
        </Link>
        <Link href={'/service'} onClick={() => setActive('/service')}>
          <span className={active === '/service' ? 'text-white' : ''}>Service</span>
        </Link>
        <Link href={'/company'} onClick={() => setActive('/company')}>
          <span className={active === '/company' ? 'text-white' : ''}>Company</span>
        </Link>
        <Link href={'/career'} onClick={() => setActive('/career')}>
          <span className={active === '/career' ? 'text-white' : ''}>Career</span>
        </Link>
        <Link href={'/blog'} onClick={() => setActive('/blog')}>
          <span className={active === '/blog' ? 'text-white' : ''}>Blog</span>
        </Link>
        <Link href={'/contact'} onClick={() => setActive('/contact')}>
          <span className={active === '/contact' ? 'text-white' : ''}>Contact us</span>
        </Link>
      </div>
    </div>
  )
}

export default Header
