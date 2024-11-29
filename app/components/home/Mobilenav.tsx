import React from 'react'
import Link from 'next/link'

const Mobilenav = () => {
  return (
    <nav className='fixed bottom-0 w-screen h-16 z-50 bg-slate-100 shadow grid grid-cols-5  items-center *:font-bold *:h-full *:flex *:justify-center *:items-center lg:hidden '>
        <Link href={"/"} className='hover:bg-slate-200'>home</Link>
        <Link href={"/"} className='hover:bg-slate-200'>search</Link>
        <Link href={"/"} className='hover:bg-slate-200'>create</Link>
        <Link href={"/"} className='hover:bg-slate-200'>popular</Link>
        <Link href={"/"} className='hover:bg-slate-200'>profile</Link>
    </nav>
  )
}

export default Mobilenav