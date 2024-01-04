/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Logo = ({
  className,
  overlapGroupClassName,
  vector = "https://c.animaapp.com/1ri1sOFK/img/vector-7.svg",
  img = "https://c.animaapp.com/1ri1sOFK/img/vector-6.svg",
  vector1 = "https://c.animaapp.com/1ri1sOFK/img/vector-5.svg",
}) => {
  return (
    <div className={`relative w-[204px] h-[28px] ${className}`}>
      <div
        className={`absolute w-[28px] h-[28px] top-0 left-0 bg-[url(https://c.animaapp.com/1ri1sOFK/img/vector-8.svg)] bg-[100%_100%] ${overlapGroupClassName}`}
      >
        <img className="w-[7px] top-[5px] left-[4px] absolute h-[4px]" alt="Vector" src={vector} />
        <img className="w-[7px] top-[5px] left-[17px] absolute h-[4px]" alt="Vector" src={img} />
        <img className="w-[8px] top-[19px] left-[10px] absolute h-[4px]" alt="Vector" src={vector1} />
      </div>
      <div className="absolute top-[2px] left-[37px] [font-family:'Roboto',Helvetica] font-bold text-linearwhite text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
        Material Dashboard 2 PRO
      </div>
    </div>
  );
};
