/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon24PxWifi1 } from "../../icons/Icon24PxWifi1";
import { LogoMastercard2 } from "../../icons/LogoMastercard2";

export const SectionCreditcard = ({
  className,
  overlapGroupClassName,
  icon = (
    <LogoMastercard2
      className="!absolute !w-[42px] !h-[33px] !top-[177px] !left-[357px]"
      color="#FF5A00"
      fill="#EB001B"
    />
  ),
}) => {
  return (
    <div
      className={`w-[410px] h-[222px] rounded-[12px] shadow-drop-shadow-black [background:linear-gradient(180deg,rgb(62,61,69)_0%,rgb(32,32,32)_100%)] ${className}`}
    >
      <div
        className={`relative w-[422px] h-[234px] top-[-4px] left-[-6px] bg-[url(https://c.animaapp.com/1ri1sOFK/img/mask-group-1@2x.png)] bg-[100%_100%] ${overlapGroupClassName}`}
      >
        <div className="absolute top-[78px] left-[22px] [font-family:'Roboto',Helvetica] font-bold text-linearwhite text-[20px] tracking-[0] leading-[28.0px] whitespace-nowrap">
          4562
        </div>
        <div className="absolute top-[185px] left-[22px] [font-family:'Roboto',Helvetica] font-bold text-linearwhite text-[16px] tracking-[0] leading-[22.4px] whitespace-nowrap">
          Jack Peterson
        </div>
        <div className="top-[185px] left-[150px] text-[16px] leading-[22.4px] absolute [font-family:'Roboto',Helvetica] font-bold text-linearwhite tracking-[0] whitespace-nowrap">
          11/22
        </div>
        <Icon24PxWifi1 className="!absolute !w-[24px] !h-[24px] !top-[28px] !left-[28px]" color="white" />
        <div className="absolute top-[162px] left-[22px] opacity-50 [font-family:'Roboto',Helvetica] font-light text-linearwhite text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
          Card Holder
        </div>
        <div className="top-[78px] left-[83px] text-[20px] leading-[28.0px] absolute [font-family:'Roboto',Helvetica] font-bold text-linearwhite tracking-[0] whitespace-nowrap">
          1122
        </div>
        {icon}
        <div className="absolute top-[78px] left-[144px] [font-family:'Roboto',Helvetica] font-bold text-linearwhite text-[20px] tracking-[0] leading-[28.0px] whitespace-nowrap">
          4594
        </div>
        <div className="absolute top-[78px] left-[205px] [font-family:'Roboto',Helvetica] font-bold text-linearwhite text-[20px] tracking-[0] leading-[28.0px] whitespace-nowrap">
          7852
        </div>
        <div className="absolute top-[162px] left-[149px] opacity-50 [font-family:'Roboto',Helvetica] font-light text-linearwhite text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
          Expires
        </div>
      </div>
    </div>
  );
};
