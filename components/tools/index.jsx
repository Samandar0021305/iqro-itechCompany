import React, { useState } from "react";
import PageTitle from "../resuable/PageTitle";
import tool1 from "../assets/png/tool1.png";
import Image from "next/image";
import { tools, radioButtons } from "../../utils/Constants";

const Tools = () => {
  const [value, setValue] = useState({});

  const handleChange = (e) => {
    setValue({ [e.target.value]: e.target.value });
  };

  return (
    <div className="container mx-auto py-12 sm:py-16 px-3">
      <PageTitle title="tools" />
      <div className="flex gap-5 sm:gap-10 flex-wrap mt-10 sm:mt-14 ">
        {radioButtons.map((item) => (
          <div
            className="flex  gap-2 font-medium text-[18px] sm:text-[21px] "
            key={item.id}
          >
            <input
              className=" w-4"
              type="radio"
              value={item.label}
              name={item.name}
              onChange={handleChange}
            />
            <label htmlFor={item.label}>{item.label}</label>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-[10px] sm:gap-[25px] mt-10 sm:mt-16">
        {tools.map((item) => (
          <div
            key={item.id}
            className={
              item.status == value[`${item.status}`]
                ? " w-[60px] h-[60px] sm:w-20 sm:h-20 m-auto bg-[#ADDDF9] rounded flex flex-col justify-center items-center gap-2"
                : " w-[60px] h-[60px] sm:w-20 sm:h-20 m-auto bg-[#DCF1FC] rounded flex flex-col justify-center items-center gap-2"
            }
          >
            <Image src={tool1} alt="tool" />
            <div className=" text-[9px] sm:text-xs">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
