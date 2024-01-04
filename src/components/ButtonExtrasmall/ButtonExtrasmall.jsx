/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon16PxDelete3 } from "../../icons/Icon16PxDelete3";

export const ButtonExtrasmall = ({
  className,
  icon = <Icon16PxDelete3 className="!relative !w-[16px] !h-[16px]" color="#F44334" />,
  textClassName,
  text = "DELETE",
}) => {
  return (
    <button className={`inline-flex items-start gap-[7px] relative all-[unset] box-border ${className}`}>
      {icon}
      <div
        className={`relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-linearred-orange text-[12px] tracking-[0] leading-[16.8px] whitespace-nowrap ${textClassName}`}
      >
        {text}
      </div>
    </button>
  );
};
