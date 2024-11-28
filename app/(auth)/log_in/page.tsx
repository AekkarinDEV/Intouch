"use client"
import React from 'react'
import Link from 'next/link'


const page = () => {
  const onLoginSubmit= async(e) => {
    e.preventDefault();
    const username = document.getElementById("login_username").value
    const password = document.getElementById("login_password").value
    console.log("fecthing")
   
    try{
       const token =  await fetch("http://localhost:3000/api/auth/log_in",{
             body: `username=${username}&password=${password}`,
             headers: {
                 "Content-Type": "application/x-www-form-urlencoded"
             },
             method:"post"
         })
        console.log(await token.json());
    }catch{

    }
}
  

  return (
    <div className='w-full h-full bg-slate-100 flex justify-center items-center'>
        <main className='bg-slate-50 w-1/3  shadow px-6 py-4 rounded-2xl'>
            <h1 className='text-2xl font-bold mb-4'>Log in to Intouch!</h1>
            <form onSubmit={onLoginSubmit} className='grid px-3 gap-5 mb-8'>
                <input type="text" placeholder='username' className='auth_input' name='username' id='login_username' />
                <input type="text" placeholder='password' className='auth_input' name='password' id='login_password'/>
                <p className='pl-4'>don't have an account? <Link href={"../sign_up"} className='text-blue-600'>sign up</Link></p>
                <button type='submit' className='w-10/12 bg-slate-700 mt-4 mx-auto py-3 rounded-2xl font-bold text-lg text-white'>log in </button>
            </form>
        </main>
    </div>
  )
}

export default page