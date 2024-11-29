import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='w-full h-full flex justify-center items-center '>
        <div className='bg-slate-50 shadow px-6 w-1/3 pt-3 rounded-xl pb-7'>
            <header>
            <h1 className='text-2xl font-bold mb-3'>Create account with Intouch!</h1>
            </header>
            <form action="http://localhost:3000/api/auth" className='flex flex-col w-10/12 gap-3  items-center  mx-auto ' method='POST' encType="multipart/form-data">
                <label htmlFor="profile_pic" className='w-full h-32 rounded-xl bg-neutral-100 text-center border-dotted 
                                                        border-2 border-neutral-600 items-center'>
                    profile picture
                </label>
                    <input type="file" id='profile_pic'  className='w-52' name="image"/>
                <input type="text" className='auth_input' placeholder='username' name="username" />
                <input type="text" className='auth_input' placeholder='password' name="password"/>
                <input type="text" className='auth_input' placeholder='confirm password' name="cpassword"/>
                <p  className='self-start'>already have an acount? <Link className='text-blue-600' href={"../log_in"}>log in</Link></p>
                <button type='submit'  className='bg-slate-700 w-10/12 py-2 text-xl rounded-2xl text-white font-bold'>submit</button>
            </form>
        </div>

    </div>
  )
}

export default page