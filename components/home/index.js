import Image from "next/image";
import React from "react";
import logo from "../assets/svgs/logo.svg";
import robo from "../assets/png/homeImage.png";
import TypedTex from "./typed";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <div className="md:flex justify-center items-center text-center ">
      <div className=" mb-15  md:text-left md:w-2/3 md:px-0">
        <div className="flex justify-center md:justify-start">
          <Image
            src={logo}
            alt="logo"
            width={409}
            height={76}
            className="w-36 sm:w-56 md:w-64 lg:w-96"
          />
        </div>

        <h4 className=" text-2xl sm:text-3xl lg:text-5xl mt-5 mb-5 sm:mt-5 md:mb-5 lg:mb-8 font-medium">
          {t("home.header")}
        </h4>
        <h4 className=" text-2xl sm:text-3xl lg:text-5xl  font-normal  mb-10 text-blue">
          <TypedTex />
        </h4>
        <button className="bg-blue hidden md:block">Contact</button>
      </div>
      <div className="relative flex justify-center items-center px-8 md:px-0">
        <Image src={robo} alt="circle" className="" width={516} height={577} />
      </div>
    </div>
  );
};

export default HomePage;
