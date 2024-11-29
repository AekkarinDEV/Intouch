import React from 'react'
import Post from '../components/home/Post'

const page = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center gap-4 pt-6 pb-24 bg-slate-100 -z-50  overflow-auto ">
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
  </div>
  )
}

export default page