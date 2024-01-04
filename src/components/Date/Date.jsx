/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon18PxCalendarRange1 } from "../../icons/Icon18PxCalendarRange1";

export const Date = ({ className }) => {
  return (
    <div className={`relative w-[147px] h-[20px] ${className}`}>
      <Icon18PxCalendarRange1 className="!absolute !w-[18px] !h-[18px] !top-px !left-0" color="#7B809A" />
      <p className="absolute -top-px left-[26px] [font-family:'Roboto',Helvetica] font-normal text-lineargrey text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
        23 - 30 March 2020
      </p>
    </div>
  );
};
