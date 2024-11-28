import React from 'react'

const Topbar = () => {
  return (
    <nav className='bg-slate-100 h-14 sticky top-0 flex justify-between items-center px-6 shadow-sm z-20'>
        <h1 className='text-4xl font-bold font-sans text-neutral-800'>Intouch</h1>
        <div className='w-1/3'>
            <form action="">
                <input type="text " className='w-full h-8 rounded-3xl px-4 pl-10' />
            </form>
        </div>
        <div>
            <button className='w-28 bg-gradient-to-tr from-violet-200 via-pink-200 to-pink-200 h-10 rounded-xl'>LOG IN</button>
        </div>
    </nav>
  )
}

export default Topbar