import React from "react";
import { useTranslation } from "next-i18next";
import { Services } from "../../utils/Constants";
import Image from "next/image";
import PageTitle from "../resuable/PageTitle";

const OurServices = () => {
  const { t } = useTranslation("common");

  return (
    <div className="container px-3 p-0 mx-auto py-14 sm:py-20  ">

      <PageTitle data-aos="fade-down-right"  id="Services" title="our services" />
      <ul data-aos="fade-down-right" className="flex justify-between mt-5 sm:mt-8 flex-wrap gap-2 xsm:gap-3 xl:gap-6 ">
        {Services.map((postEl, id) => {
          return (
            <li
              key={id}
              className=" w-[120px] h-[100px] xsm:w-[140px] xsm:h-[115px]   sm:w-[190px] sm:h-[135px] md:w-[230px] md:h-[135px]   lg:w-[320px] lg:h-[200px] xl:w-[400px] xl:h-[250px]   flex rounded bg-bluef"
            >
              <p className=" text-[9px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[21px] w-[60%] mt-[10px] ml-[10px] sm:mt-[15px] sm:ml-[15px] lg:mt-[25px] lg:ml-[25px] xl:mt-[30px] xl:ml-[30px] ">
                {t(postEl.post)}
              </p>
              <div className="relative w-[50%]">
                <Image
                  className={` ${
                    id == 1 || 2 || 3 || 4 || 6 ? "bottom-0" : "top-0"
                  }
                  block xl:w-[170px] absolute ${postEl.position}`}
                  src={postEl.img}
                  alt="section part images"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OurServices;
