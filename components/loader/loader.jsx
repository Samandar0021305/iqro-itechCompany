import Image from "next/image";
import React from "react";
import loader from "../../assets/svgRobo/loader.svg";

const Loader = () => {
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 z-50  flex items-start justify-center bg-[#fff]">
      <Image src={loader} alt="loader" className=" mt-[250px] sm:mt-[350px] w-[70px] sm:w-[100px]" />
    </div>
  );
};

export default Loader;
