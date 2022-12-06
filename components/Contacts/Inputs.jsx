import React from "react";
import { useTranslation } from "next-i18next";


const Inputs = ({ props }) => {

  const { t } = useTranslation("common");


  return (
    <input data-aos="zoom-in"
      type={props.type}
      className={` py-4 border border-blackDev pl-6 w-full sm:w-[270px] md:w-[350px] lg:w-3/4 ${props.style}`}
      placeholder={t(props.placeholder)}
    />
  );
};

export default Inputs;