
import React from 'react'
import Inputs from './Inputs'
import { localization, logo } from '../../utils/Constants'
import Image from 'next/image'
import { useTranslation } from "next-i18next";

const Contacts = () => {
  const { t } = useTranslation("common");

  const inputs = [
    {
        type:"text",
        placeholder:"input1",
        name:"name",
        style:"sm:w-[477px] w-[300px] pt-2 pb-2 pl-2 border-[1px]  border-blackDev mt-[20px] rounded"  
    },
    {
        type:"email",
        name:"email",
        placeholder:"input2",
        style:"sm:w-[477px] w-[300px] pt-2 pb-2 pl-2 border-[1px]  border-blackDev mt-[20px] rounded" 
    },
    {
        type:"text",
        name:"number",
        placeholder:"input3", 
        style:"sm:w-[477px] w-[300px] pt-2 pb-2 pl-2 border-[1px]  border-blackDev mt-[20px] rounded"
    }
   ]

  return (
    <div className="container px-3 mx-auto mb-[30px] py-12">
      {/* <PageTitle title="contact us" /> */}
      <h2 className="m-0 p-0 xsm:text-2xl lg:text-3xl xsm:font-medium sm:font-semibold mt-10">
        Leave us a message
      </h2>


      <div className="sm:flex gap-7  justify-between items-start ">
        <form className="flex flex-col mb-16 w-full sm:w-1/2 ">
          {inputs.map((inputEl, id) => {
            return <Inputs props={inputEl} key={id}
             placeholder={t(inputEl.placeholder)} />;
          })}
          <textarea
            className="w-full  xl:w-[460px] pt-2 pb-[40px] pl-3 border-[1px]  border-blackDev mt-[20px] rounded"
            placeholder="Briefly describe your project"
          />
          <button className="bg-blue w-full sm:w-[278px] h-[49px] text-[#fff] mt-4 rounded">
            Send
          </button>
        </form>
        <span className="mt-[20px] lg:mt-0  w-full sm:w-1/2  ">
          <ul>
            {localization.map((post, id) => {
              return (
                <li
                  className="flex mt-1 mb-4 gap-2 items-center w-[100%]"
                  key={id}
                >
                  <Image src={post.img} alt="" />
                  <p className="ml-[5px] lg:text-[18px] w-full md:text-[16px] text-[12px] text-[#222222]">
                    {post.text}
                  </p>
                </li>
              );
            })}
          </ul>
          <span className="flex lg:mt-[0]  mt-[20px] sm:w-[120px] w-[200px]  justify-between">
            {logo.map((post, id) => {
              return (
                <Image
                  className="object-scale-down"
                  src={post}
                  key={id}
                  alt=""
                />
              );
            })}
          </span>
          <iframe
            className="lg:w-[513px] w-[100%] lg:h-[190px] mt-7"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377.2514415613233!2d69.60091886932778!3d40.84967060000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae2d9478996ef1%3A0xd34c9a593a495cc9!2sUcell%20Olmaliq%20Filiali!5e0!3m2!1sru!2s!4v1669703570539!5m2!1sru!2s"
          ></iframe>
        </span>
      </div>
    </div>
  );
};

export default Contacts;
