import Image from 'next/image'
import React from 'react'
import { WorkedList } from '../../utils/Constants'
import PageTitle from '../resuable/PageTitle'


const HowWork = () => {
  return (
    <div className='container px-3 mx-auto py-12'>
      <PageTitle title="how we work"/>
      <ul className="flex  break-after-auto   md:justify-around justify-start flex-col items-start md:flex-row mt-5 md:mt-16 ">
        {
          WorkedList.map((post, id) => {
            return (
              <li key={id} className="flex md:mt-2 mt-6   justify-center items-center md:flex-col flex-row">
                <Image src={post.img} className="text-center w-[70px] h-[70px] md:ml-3" alt="" />
                <span className="flex flex-col ml-5">
                  <h4 className='md:text-center md:mt-1 mb-1   md:text-[21px] text-[16px] text-blackDev'>{post.title}</h4>
                  <p className='md:text-center lg:text-[16px] text-[12px]'>{post.text}</p>
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