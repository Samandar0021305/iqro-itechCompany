import Image from 'next/image'
import React from 'react'
import { WorkedList } from './WorkConstants'

const HowWork = () => {
  return (
    <div className='container lg:pr-1 lg:pl-1 mt-[60px] mb-[20px] p-0 mx-auto py-5'>
      <h2 className='text-blue sm:text-[67px] text-[28px]'>How we work!</h2>
      <ul className='flex md:justify-around justify-start flex-col items-start md:flex-row '>
        {
            WorkedList.map((post,id)=>{
                return (
                    <li key={id}  className="flex mr-4 md:mt-2 mt-6 ml-4  justify-center items-center md:flex-col flex-row">
                        <Image src={post.img} className="text-center md:ml-3" alt="" />
                     <span className="flex flex-col ml-5">
                     <h4 className='md:text-center md:mt-1 mb-1   md:text-[21px] text-[16px] text-blackDev'>{post.title}</h4>
                     <p className='md:text-center md:text-[12px] text-[12px]'>{post.text}</p>
                     </span>
                    </li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default HowWork