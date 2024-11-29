"use client"
import React from 'react'
import Link from 'next/link'


const Sidenav = () => {
  return (
    <div className='h-screen bg-slate-100 fixed w-1/6 z-10 flex-col hidden lg:flex px-6 text-[22px] pt-5 shadow'>
        <Link href={'/'} className='side_nav_btn'>
             Home
        </Link>
        <Link href={'/'} className='side_nav_btn'>Message</Link>
        <button className='side_nav_btn'>Create</button>
    </div>
  )
}

export default Sidenav