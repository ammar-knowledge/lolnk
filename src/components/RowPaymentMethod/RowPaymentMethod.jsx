/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon16PxPencil } from "../../icons/Icon16PxPencil";
import { LogoMastercard2 } from "../../icons/LogoMastercard2";

export const RowPaymentMethod = ({
  className,
  logoMastercard2Color = "#EB001B",
  logoMastercard2Fill = "#FF5A00",
  text = "7852",
  icon = (
    <LogoMastercard2
      className="!absolute !w-[32px] !h-[25px] !top-[24px] !left-[25px]"
      color={logoMastercard2Fill}
      fill={logoMastercard2Color}
    />
  ),
}) => {
  return (
    <div className={`relative w-[394px] h-[76px] rounded-[8px] border border-solid border-lineargrey ${className}`}>
      <div className="left-[74px] absolute top-[25px] [font-family:'Roboto',Helvetica] font-bold text-lineardark-blue text-[16px] text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
        ****
      </div>
      <div className="left-[115px] absolute top-[25px] [font-family:'Roboto',Helvetica] font-bold text-lineardark-blue text-[16px] text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
        ****
      </div>
      <div className="left-[156px] absolute top-[25px] [font-family:'Roboto',Helvetica] font-bold text-lineardark-blue text-[16px] text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
        ****
      </div>
      <div className="absolute top-[25px] left-[197px] [font-family:'Roboto',Helvetica] font-bold text-lineardark-blue text-[16px] text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
        {text}
      </div>
      {icon}
      <Icon16PxPencil className="!absolute !w-[18px] !h-[18px] !top-[28px] !left-[350px]" color="#344767" />
    </div>
  );
};
