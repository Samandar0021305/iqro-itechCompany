import React from 'react'
import { useTranslation } from "next-i18next";
import {Services} from "./OurServicesValue"
import Image from 'next/image';


const OurServices = () => {
  const { t } = useTranslation("common");

  return (
    <div className='container lg:pr-1 lg:pl-1  p-0 mx-auto py-5 '>
          <h2 className='font-medium lg:text-start text-center lg:text-6xl  text-3xl text-blue'>Our services</h2>
          <ul className='flex justify-between flex-wrap items-center' >
            {
              Services.map((postEl,id)=>{
                return (
                  <li key={id} className="lg:w-[410px] p-2 lg:h-[250px] md:w-[220px] md:h-[135px] sm:w-[162px] sm:h-[135px] w-[162px] h-[135px] flex mt-[20px] justify-between  bg-bluef">
                    <p className='lg:text-[21px] text-[12px]'>{t(postEl.post)}</p> 
                         <Image  className='block object-scale-down' src={postEl.img} alt=""  />
                  </li>
                )
              })
            }
          </ul>
    </div>
  )
}

export default OurServices