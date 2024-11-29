"use client"
import React from 'react'
import { useState,useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Right = ({status,user}:boolean) => {
    if(!status){
        return(
            <div>
                <Link href={"/log_in"}>
                    <button className='w-28 bg-gradient-to-tr from-violet-200 via-pink-200 to-pink-200 h-10 rounded-xl'>LOG IN</button>
                </Link>
            </div>
        )
    }else{

        return(
            <div className='flex w-30 items-center gap-3 '>
                <p>{sessionStorage.getItem("username")}</p>
                <div className='w-11'>
                    <Image
                        src={"/profile_pic.jpg"}
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{width: "100%" ,height: "auto"}}
                        alt='profile picture'
                        className='rounded-full'
                    />

                </div>
            </div>
        )
    }
}

const Topbar = () => {
    const [isLogin,setIsLogin] = useState(false);
    const [userdata,setUserData] = useState({});
    useEffect(() => {
        if(sessionStorage.getItem("web_token") !== null){
            console.log("logged in")
            setIsLogin(true)

            fetch(`http://localhost:3000/api/auth/?web_token=${sessionStorage.getItem("web_token")}`);
        }
        
    },[])

  return (
    <nav className='bg-slate-100 h-14 sticky top-0 flex justify-between items-center px-6 shadow-sm z-20'>
        <h1 className='text-4xl font-bold font-sans text-neutral-800'>Intouch</h1>
        {/* <div className='w-1/3'>
            <form action="">
                <input type="text " className='w-full h-8 rounded-3xl px-4 pl-10' />
            </form>
        </div> */}
        <Right status ={isLogin} user={userdata}/>
    </nav>

    
  )
}

export default Topbar