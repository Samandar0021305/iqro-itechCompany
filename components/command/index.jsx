import Image from "next/image";
import React from "react";
import command from "../assets/png/command.png";
import { useTranslation } from "next-i18next";
import PageTitle from "../resuable/PageTitle";

const Command = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-blue bg-opacity-20 relative">
      <div className="sm:flex justify-between container mx-auto px-3">
        <div className="sm:w-2/3 py-9">
          <PageTitle title="command" />
          <p className="mt-40 xsm:text-md lg:text-2xl sm:mt-14 mb-5">
            {t("commandPage.text")}
          </p>
          <h4 className=" text-6xl lg:text-9xl text-blue font-bold">20+</h4>
          <p className="m-0 p-0 mt-2 xsm:text-2xl lg:text-3xl xsm:font-medium sm:font-semibold">
            {t("commandPage.dedicated")}
          </p>
        </div>
        <div className="xsm:w-96 ">
          <Image
            src={command}
            className="hidden sm:block sm:w-[220px] lg:w-[300px] sm:ml-auto"
            alt="image of robotic "
            // width={300}
          />
          <Image
            src={command}
            alt="image of robotic"
            className="xsm:block absolute top-0 right-0 xsm:right-10 sm:hidden"
            width={140}
          />
        </div>
      </div>
    </div>
  );
};

export default Command;
