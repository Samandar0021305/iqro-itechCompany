import Image from "next/image";
import React from "react";
import { Our } from "../../utils/Constants";
import PageTitle from "../resuable/PageTitle";

// data-aos="fade-up"
//               data-aos-duration="3000"

const OurClients = () => {
  return (
    <div className="container mx-auto py-9 px-3  ">
      <PageTitle id="Clients" title="our clients" />
      <ul className="flex flex-wrap justify-between w-[100%] mt-8 sm:mt-12 gap-1 xsm:gap-2">
        {Our.map((post, id) => {
          return (
            <li 
              className="md:w-[220px] relative overflow-hidden bg-no-repeat bg-cover max-w-xs xl:w-[200px] 
              rounded bg-bluef  hover:bg-whiteColor  transition duration-300 ease-in-out p-4 md:h-[120px] w-[82px] xsm:w-[90px] h-[55px]  
               flex justify-center items-center "
              key={id}
            >
              <Image className="max-w-xs hover:scale-110 transition hover:from-whiteColor duration-300 ease-in-out " src={post.img} alt="our client" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OurClients;
