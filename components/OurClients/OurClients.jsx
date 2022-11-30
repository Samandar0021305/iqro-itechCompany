import Image from "next/image";
import React from "react";
import { Our } from "../../utils/Constants";
import PageTitle from "../resuable/PageTitle";

const OurClients = () => {
  return (
    <div className="container mx-auto py-9 px-3  ">
      <PageTitle id="Clients" title="our clients" />
      <ul className="flex flex-wrap justify-between w-[100%] mt-6 sm:mt-12">
        {Our.map((post, id) => {
          return (
            <li
              className="md:w-[220px] xl:w-[200px] rounded bg-bluef p-4 md:h-[120px] w-[85px] h-[55px] mt-4 sm:ml-1 sm:mr-1 flex justify-center items-center "
              key={id}
            >
              <Image src={post.img} alt="" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OurClients;
