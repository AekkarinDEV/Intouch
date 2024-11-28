import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='w-full h-full bg-slate-100 flex justify-center items-center'>
        <main className='bg-slate-50 w-1/3  shadow px-6 py-4 rounded-2xl'>
            <h1 className='text-2xl font-bold mb-4'>Log in to Intouch!</h1>
            <form action="" className='grid px-3 gap-5 mb-8'>
                <input type="text" placeholder='username' className='auth_input' />
                <input type="text" placeholder='password' className='auth_input' />
                <p className='pl-4'>don't have an account? <Link href={"../sign_up"} className='text-blue-600'>sign up</Link></p>
                <button type='submit' className='w-10/12 bg-slate-700 mt-4 mx-auto py-3 rounded-2xl font-bold text-lg text-white'>log in </button>
            </form>
        </main>
    </div>
  )
}

export default page