import Image from "next/image";
import React from "react";
import command from "../assets/png/command.png";
import { useTranslation } from "next-i18next";

const Command = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-blue bg-opacity-20 mb-7 relative">
      <div className="sm:flex justify-between container mx-auto xsm:px-3">
        <div className="sm:w-2/3 xsm:py-9 sm:my-14">
          <h4 className=" xsm:text-3xl sm:text-6xl text-blue font-semibold ">
            Command
          </h4>
          <p className=" xsm:mt-40 xsm:text-lg sm:text-2xl sm:mt-14 mb-5">
            For each project, we form a team that includes a project manager,
            business analyst, UI / UX designer, DevOps, QA engineer, backend and
            front-end developers.
          </p>
          <h4 className=" xsm:text-6xl sm:text-9xl text-blue font-bold">20+</h4>
          <p className="m-0 p-0 xsm:mt-2 xsm:text-2xl sm:text-3xl xsm:font-medium sm:font-semibold">
            Dedicated team
          </p>
        </div>
        <div className="xsm:w-96 ">
          <Image
            src={command}
            className="hidden sm:block"
            alt="image of robotic"
            width={350}
          />
          <Image
            src={command}
            alt="image of robotic"
            className="xsm:block xsm:absolute top-0 right-10 sm:hidden"
            width={140}
          />
        </div>
      </div>
    </div>
  );
};

export default Command;
