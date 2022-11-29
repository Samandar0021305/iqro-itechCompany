import React from "react";

export default function Button({ type, className, onClick, id, children }) {
  return (
    <>
      <button
        type={type ? type : "button"}
        className={
          className
            ? `leading-[18px] text-normal bg-cyan-500 text-[#fff] px-5 py-[6px] rounded-[5px] ${className}`
            : "leading-[18px] text-normal bg-cyan-500 text-[#fff] px-5 py-[6px] rounded-[5px]"
        }
        id={id}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
