import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import { Dev12, Development1 } from "../../utils/Constants";
import PageTitle from "../resuable/PageTitle";
import Img from "../../assets/DevelopmentMobileBg.png";
import uiPic from "../../assets/uiPic.png";

const UiDesign = () => {
  const { t } = useTranslation("common");
  return (
    <div className="px-3 container mx-auto pb-12 sm:pb-0  pt-10   md:pt-14 md:pb-2">
      <PageTitle title="ui/ux Design" />

      <div className=" bg-white sm:bg-opacity-20  lg:bg-opacity-20 mt-[50px] sm:mt-[0] sm:pb-[60px]">
        <div className="flex flex-col-reverse sm:flex-row justify-between gap-10 mx-auto">
          <div className="w-[100%] sm:w-[50%]">
            <ul className="flex justify-center xsm:justify-between items-center flex-wrap gap-2 lg:gap-4 sm:mt-20">
              {Development1.map((post) => {
                return (
                  <div
                    key={post.id}
                    className="bg-blue flex flex-col gap-1 md:gap-2 pl-2 lg:pl-6 items-start justify-center text-[10px] sm:text-[12px] xl:text-[21px] lg:m-0 bg-opacity-20 rounded  w-[90px] h-20 md:w-28 md:h-24 lg:w-36 lg:h-32 xl:w-[190px] xl:h-[160px]"
                  >
                    <Image
                      className=" w-[39px] md:w-[50px] lg:w-[70px]"
                      src={post.src}
                      alt=""
                    />
                    <div className="font-medium">{post.title}</div>
                  </div>
                );
              })}
            </ul>
            <h2 className=" text-xl xsm:text-2xl lg:text-3xl font-medium sm:font-semibold mt-10 lg:mt-16">
              {t("Technologies")}
            </h2>
            <ul className="mt-[15px] sm:mt-[30px] flex w-[80%] sm:w-[50%] justify-start gap-3">
              {Dev12.map((postEl, id) => {
                return (
                  <li key={id}>
                    <Image
                      className="object-cover rounded p-2 w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]  bg-blue bg-opacity-20 "
                      src={postEl.img}
                      alt=""
                    />
                    <p className="text-center mt-1 text-[15px]  lg:text-[21px] ">
                      {postEl.text}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sm:w-[50%]  sm:mt-10 lg:mt-4 ">
            <p className="lg:w-11/12 sm:mt-[30px] lg:mt-[50px] xsm:text-md lg:text-[28px]  mb-5">
              {t("commandPage.text7")}
            </p>
            <Image
              src={uiPic}
              className=" mt-10 sm:w-[300px] md:w-[350px] lg:w-[450px] xl:w-[600px] ml-auto rounded"
              alt="image of mobile phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiDesign;
