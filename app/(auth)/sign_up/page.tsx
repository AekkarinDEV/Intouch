import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full flex justify-center items-center '>
        <div className='bg-slate-50 shadow px-6 w-1/3 pt-3 rounded-xl pb-7'>
            <header>
            <h1 className='text-2xl font-bold'>Create account with Intouch!</h1>
            </header>
            <form action="" className='flex flex-col w-10/12 gap-3  items-center  mx-auto '>
                <input type="text" className='auth_input' />
                <input type="text" className='auth_input'/>
                <input type="text" className='auth_input'/>
                <label htmlFor="" className='w-full bg-slate-600 h-10'>
                    <input type="file"  className='w-full hidden'/>
                </label>
            </form>
        </div>

    </div>
  )
}

export default page