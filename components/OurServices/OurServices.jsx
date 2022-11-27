import { useTranslation } from "next-i18next";

import React from 'react'
import {Services} from "./OurServicesValue"
import Image from 'next/image';

const OurServices = () => {
  const { t } = useTranslation("common");

  return (
    <div className='container lg:pr-1 lg:pl-1  p-0 mx-auto py-5 '>
          <h2 className='font-medium lg:text-start text-center lg:text-6xl  text-3xl text-blue'>Our services</h2>
          <ul className='flex flex-wrap  justify-between items-center relative'>
             {
              Services.map((postEl,index)=>{
                return <li key={index} className='lg:w-96 pl-1 pr-1 py-2 md:mr-1 ml-1 lg:p-6 lg:h-64 md:w-64 md:h-32 sm:w-40 sm:h-32 w-36  pl-1 pr-1  h-32 mt-3 flex justify-between bg-blue bg-opacity-20'>
                  <p className='lg:text-base lg:font-medium font-normal text-xs h-auto lg:w-40 w-24'>{t(postEl.post)}</p>
                  <Image  src={postEl.img}  className="lg:w-48 lg:h-48 w-16 h-16 sm:mt-0 mt-3"  alt=""  />
                </li>
                  
              })
             }
          </ul>
    </div>
  )
}

export default OurServices