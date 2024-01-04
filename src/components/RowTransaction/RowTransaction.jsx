/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconCircle } from "../IconCircle";

export const RowTransaction = ({
  className,
  iconCircleIcon8PxArrowDown17Color = "white",
  text = "Netflix",
  valueClassName,
  text1 = "- $ 2,500",
  text2 = "27 March 2020, at 12:30 PM",
  override = (
    <IconCircle
      className="!border-linearred-orange !absolute !left-0 !top-[3px]"
      icon8PxArrowDown17Color={iconCircleIcon8PxArrowDown17Color}
    />
  ),
}) => {
  return (
    <div className={`relative w-[471px] h-[40px] ${className}`}>
      <div className="absolute -top-px left-[50px] [font-family:'Roboto',Helvetica] font-bold text-lineardark-blue text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
        {text}
      </div>
      <div
        className={`absolute w-[142px] top-[9px] left-[329px] [font-family:'Roboto',Helvetica] font-bold text-linearred-orange text-[14px] text-right tracking-[0] leading-[19.6px] ${valueClassName}`}
      >
        {text1}
      </div>
      <p className="absolute top-[22px] left-[50px] [font-family:'Roboto',Helvetica] font-normal text-lineargrey text-[12px] tracking-[0] leading-[16.8px] whitespace-nowrap">
        {text2}
      </p>
      {override}
    </div>
  );
};
