import Image from "next/image";
import React from "react";
import logo from "../assets/svgs/logo.svg";
import robo from "../assets/png/homeImage.png";
import TypedTex from "./typed";
import { useTranslation } from "next-i18next";
import Button from "../BaseButton/BaseButton";
import desktop4 from "../assets/png/Desktop4.png";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto">
      <div className="sm:flex justify-center px-3 items-center text-center pb/-3 sm:py-16 ">
        <div className=" mb-15  sm:text-left sm:w-2/3 md:px-0">
          <div className="flex justify-center sm:justify-start ">
            <Image
              src={logo}
              alt="logo"
              width={409}
              height={76}
              className="w-36 invisible sm:visible md:w-64 lg:w-96"
            />
          </div>

          <h4
            data-aos="fade-up-right"
            className=" text-2xl lg:text-3xl xl:text-5xl  mb-5 sm:mt-5 md:mb-5 lg:mb-8 font-medium"
          >
            {t("home.header")}
          </h4>
          <h4
            data-aos="fade-up-right"
            id="Direction"
            className=" text-[21px] sm:text-[24px] lg:text-3xl xl:text-5xl  font-normal  mb-10 text-blue"
          >
            <TypedTex />
          </h4>
          <Button
            type="button"
            className="bg-blue sm:w-[140px] sm:h-[30px] md:w-[180px] md:h-[48px] hidden sm:block  md:text-[26px] "
          >
            {t("button")}
          </Button>
        </div>
        <div className="flex justify-end md:px-0 ">
          <Image
            src={robo}
            alt="circle"
            className="sm:w-[400px] md:w-[500px] xl:w-[600px]"
            width={500}
            height={577}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
