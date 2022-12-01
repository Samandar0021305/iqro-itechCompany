import Image from "next/image";
import React from "react";
import { Dev, Development } from "../../utils/Constants";
import { useTranslation } from "next-i18next";
import Img from "../../assets/DevelopmentMobileBg.png";
import PageTitle from "../resuable/PageTitle";

function DevelopmentMobile() {
  const { t } = useTranslation("common");

  return (
    <div className="px-3 container mx-auto pb-12 sm:pb-0  pt-10   md:pt-14 md:pb-2">
      <PageTitle title="development of mobile applications" />

      <div className=" bg-white sm:bg-opacity-20  lg:bg-opacity-20 mt-[50px] sm:mt-[0] sm:pb-[60px]">
        <div className="flex flex-col-reverse sm:flex-row justify-between gap-10 mx-auto">
          <div className="w-[100%] sm:w-[50%]">
            <p className="lg:w-11/12   sm:mt-[30px] lg:mt-[50px] xsm:text-md lg:text-[28px]  mb-5">
              {t("commandPage.text6")}
            </p>
            <ul className="flex justify-between items-center gap-1  mt-[30px]">
              {Development.map((post) => {
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
            <ul className="mt-[20px] sm:mt-[30px] flex w-[80%] sm:w-[50%] justify-start gap-3">
              {Dev.map((postEl, id) => {
                return (
                  <li key={id}>
                    <Image
                      className="object-cover rounded p-2 w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]  bg-blue bg-opacity-20 "
                      src={postEl.img}
                      alt=""
                    />
                    <p className="text-center mt-1 text-[15px] lg:text-[21px] ">
                      {postEl.text}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sm:w-[50%] ">
            <Image
              src={Img}
              className=" sm:w-[300px] md:w-[350px] lg:w-[450px] xl:w-[500px] ml-auto rounded"
              alt="image of mobile phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevelopmentMobile;
