import React from 'react'
import Inputs from './Inputs'
import { inputs, localization, logo } from '../../utils/Constants'
import Image from 'next/image'

const Contacts = (props) => {
    return (
        <div className='container md:pl-2 p-0 mx-auto py-5 mb-[30px]'>
            <h2 className='text-blackDev md:text-[28px] text-[21px]'>Leave us a message</h2>

            <div className='flex items-start justify-between  lg:flex-row flex-col'>
                <form className='flex flex-col '>

                    {
                        inputs.map((inputEl, id) => {
                            return <Inputs props={inputEl} key={id} />
                        })
                    }
                    <button className='bg-blue w-[278px] h-[49px] text-[#fff] mt-4 rounded'>Send</button>
                </form>
                <span className='md:ml-[10px] lg:mt-0 mt-[20px] '>
                    <ul>
                        {
                            localization.map((post, id) => {
                                return (
                                    <li className='flex mt-1 mb-2 w-[100%]' key={id}>
                                        <Image src={post.img} alt="" />
                                        <p className='ml-[5px] lg:text-[18px] w-full md:text-[16px] text-[12px] text-[#222222]'>{post.text}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <span className='flex lg:mt-[0]  mt-[20px] sm:w-[120px] w-[200px]  justify-between'>
                        {logo.map((post, id) => {
                            return <Image className='object-scale-down' src={post} key={id} alt="" />
                        })}
                    </span>
                    <iframe className='lg:w-[513px] w-[90%] lg:h-[190px] mt-7' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377.2514415613233!2d69.60091886932778!3d40.84967060000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae2d9478996ef1%3A0xd34c9a593a495cc9!2sUcell%20Olmaliq%20Filiali!5e0!3m2!1sru!2s!4v1669703570539!5m2!1sru!2s" ></iframe>

                </span>
            </div>
        </div>
    )
}

export default Contacts