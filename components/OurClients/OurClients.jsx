import Image from 'next/image'
import React from 'react'
import { Our } from '../../utils/Constants'

const OurClients = () => {
  return (
    <div className='container lg:pr-1 lg:pl-1  p-0 mx-auto py-5  '>
      <h2 className='text-blue sm:text-[67px] text-[28px]'>Our clients</h2>

      <ul className='flex flex-wrap justify-between w-[100%]'>
        {
            Our.map((post,id)=>{
                return (
                    <li className='md:w-[180px] bg-bluef p-4 md:h-[120px] w-[90px] h-[55px] mt-4 sm:ml-1 sm:mr-1 flex justify-center items-center ' key={id}>
                        <Image src={post.img}  alt="" />
                    </li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default OurClients