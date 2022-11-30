import React from "react";
import PageTitle from "../resuable/PageTitle";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const OptimizationPage = ({ item }) => {
  const { t } = useTranslation();
  const { color, arr, desc, title, flex, image } = item;
  return (
    <div className={`bg-${color} bg-opacity-20 relative `}>
      <div className="container mx-auto py-[40px] px-3  sm:py-[60px]">
        <PageTitle title={title} />
        <div
          className={`sm:flex ${flex} justify-between  gap-5  sm:my-[40px] md:my-[20px] `}
        >
          <div className=" flex flex-col md:w-1/2  lg:w-5/12">
            <div className="flex justify-center">
              <Image
                src={image}
                alt="image of computer"
                className="mt-14 md:w-full lg:w-[599px] lg:mt-28"
              />
            </div>
          </div>
          <div className="w-full  md:w-1/2">
            <p className=" lg:w-11/12 xsm:mt-5 sm:mt-5 lg:mt-[50px] xsm:text-md lg:text-[28px]  mb-5">
              {t(`commandPage.${desc}`)}
            </p>
            <div className="flex flex-wrap justify-center xsm:justify-start gap-3 md:gap-3 lg:gap-7  ">
              {arr.map((item, index) => (
                <div
                  key={index}
                  className="bg-blue flex flex-col gap-1 md:gap-2 pl-2 lg:pl-6 items-start justify-center text-[10px] sm:text-[12px] xl:text-[21px] lg:m-0 bg-opacity-20 rounded  w-[90px] h-20 md:w-28 md:h-24 lg:w-36 lg:h-32 xl:w-[190px] xl:h-[160px]"
                >
                  <Image
                    className=" w-[39px] md:w-[50px] lg:w-[70px]"
                    src={item.img}
                  />
                  <div className="font-medium">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizationPage;
