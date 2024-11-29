import React from 'react'
import Image from 'next/image'

const Post = ({post_id}) => {
  return (
    <div className='lg:w-3/6 w-11/12 md:w-3/5' >
        <div className='bg-slate-50  pt-4  rounded-2xl overflow-clip '>
            <header className='flex gap-3 text-xl pb-1 font-semibold justify-between items-center px-5'>
                <div className='flex gap-3'>
                    <Image 
                        src={'/profile_pic.jpg'}
                        width={52}
                        height={52}
                        alt='user_profile_picture'
                        className='rounded-full'
                    />
                    <h1>
                        username
                    </h1>
                </div>
                <button className='mr-2 text-xl hover:bg-slate-100 h-10 w-10 rounded-3xl'>•••</button>
            </header>
            
            <main className='w-full h-[600px] overflow-clip'>
                <Image
                    src={"/post_pic.webp"}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{width: "100%" ,height: "auto"}}
                    alt='post picture'
                />
            </main>
            <div className='bg-50 h-14'></div>
        </div>
    </div>
  )
}

export default Post