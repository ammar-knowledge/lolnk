/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon24PxBank2 } from "../../icons/Icon24PxBank2";

export const CardBilling = ({
  className,
  lineClassName,
  text = "Belong Interactive",
  text1 = "Salary",
  text2 = "+$2000",
  icon = <Icon24PxBank2 className="!absolute !w-[24px] !h-[24px] !top-[20px] !left-[20px]" color="white" />,
}) => {
  return (
    <div className={`relative w-[194px] h-[222px] bg-linearwhite rounded-[12px] shadow-drop-shadow-black ${className}`}>
      <div className="absolute w-[161px] top-[126px] left-[17px] [font-family:'Roboto',Helvetica] font-normal text-lineargrey text-[12px] text-center tracking-[0] leading-[16.8px]">
        {text}
      </div>
      <div className="absolute w-[161px] top-[97px] left-[17px] [font-family:'Roboto',Helvetica] font-bold text-lineardark-blue text-[16px] text-center tracking-[0] leading-[22.4px]">
        {text1}
      </div>
      <div className="absolute w-[161px] top-[178px] left-[17px] [font-family:'Roboto',Helvetica] font-bold text-lineardark-blue text-[20px] text-center tracking-[0] leading-[28.0px]">
        {text2}
      </div>
      <div className="absolute w-[64px] h-[64px] top-[16px] left-[67px] rounded-[8px] [background:linear-gradient(180deg,rgb(233,59,119)_0%,rgb(218,31,99)_100%)]">
        {icon}
      </div>
      <img
        className={`absolute w-[161px] h-px top-[163px] left-[17px] object-cover ${lineClassName}`}
        alt="Line"
        src="https://c.animaapp.com/1ri1sOFK/img/line-5.svg"
      />
    </div>
  );
};
