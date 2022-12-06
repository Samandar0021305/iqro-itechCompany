import Image from "next/image";
import React from "react";
import { Our } from "../../utils/Constants";
import PageTitle from "../resuable/PageTitle";

const OurClients = () => {
  return (
    <div className="container mx-auto py-9 px-3  ">
      <PageTitle id="Clients" title="our clients" />
      <ul className="flex flex-wrap justify-between w-[100%] mt-8 sm:mt-12 gap-1 xsm:gap-2">
        {Our.map((post, id) => {
          return (
            <li data-aos="fade-up"
              data-aos-duration="3000"
              className="md:w-[220px] xl:w-[200px] rounded bg-bluef p-4 md:h-[120px] w-[82px] xsm:w-[90px] h-[55px]   flex justify-center items-center "
              key={id}
            >
              <Image src={post.img} alt="our client" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OurClients;
