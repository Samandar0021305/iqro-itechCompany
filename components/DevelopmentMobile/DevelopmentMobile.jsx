import Image from 'next/image'
import React from 'react'
import { Dev, Development } from './Constants'

import Img from "../../assets/DevelopmentMobileBg.png"

function DevelopmentMobile() {
  return (
    <div>
       <div className='container lg:pr-1 lg:pl-1  p-0 lg:mt-0   pr-6 pl-6 sm:pr-0 sm:pl-0 mx-auto py-5'>
       <h2 className='text-blue font-medium md:text-[67px] text-[28px]'>Development of <br/> mobile applications</h2>
       </div>

       <div className='lg:bg-blue md:bg-blue bg-white md:bg-opacity-20  pr-6 pl-6  lg:bg-opacity-20 mt-[30px] sm:mt-[0]  pb-[70px]'>
              <div className=' container lg:pr-1 lg:pl-1 flex justify-between  lg:flex-row  md:flex-row sm:flex-col-reverse xsm:flex-col-reverse flex-col-reverse p-0 mx-auto py-5'>
                <div className='w-[100%] sm:w-[50%]'>
                    <p className='lg:text-[28px] text-[16px] mt-[20px] md:mt-0 font-normal'>In collaboration with startups, we have
                      learned how to create a creative and
                      functional user interface for mobile
                      applications.
                      </p>
                      <ul className='flex justify-between items-center  mt-[30px]'>
                        {
                          Development.map((post)=>{
                            return (
                              <li key={post.id} className="lg:w-[190px] lg:h-[168px] md:w-[108px] md:h-[88px] sm:w-[98px] sm:h-[78px] xsm:w-[88px] xsm:h-[78px] flex items-center justify-center flex-col  rounded-[5px] bg-blue bg-opacity-20">
                                   <Image className='lg:w-[76px] lg:h-[76px]  w-[40px] h-[40px] ' src={post.src} alt="" />
                                   <h5 className='lg:text-[21px] text-[16px]'>{post.title}</h5>
                              </li>
                            )
                          })
                        }
                      </ul>
                      <h2 className='mt-[30px] lg:text-[38px] text-[21px]'>Technologies</h2>
                      <ul className='mt-[30px] flex w-[80%] sm:w-[50%] justify-between'>
                        {
                          Dev.map((postEl,id)=>{
                             return (
                              <li key={id}>
                                  
                                  <Image  className='object-cover p-2 lg:w-[60px] lg:h-[60px] w-[50px] h-[50px] bg-blue bg-opacity-20 ' src={postEl.img} alt='' />
                                   <p className='text-center mt-1 md:text-[21px] text-[16px]'>{postEl.text}</p>
                              </li>
                             )
                          })
                        }
                      </ul>
                </div>
                <div className='w-[50%]'>
                    <Image src={Img} className="lg:-mt-40 md:-mt-16  lg:object-cover ml-[50px] lg:w-[576px] lg:h-[683px]  md:w-[324px] md:h-[385px] sm:h-[380px] w-[324px] h-[245px] " alt=""/>
                </div>
              </div>
       </div>
    </div>
  )
}

export default DevelopmentMobile