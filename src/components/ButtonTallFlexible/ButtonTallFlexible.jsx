/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon18PxPlus1 } from "../../icons/Icon18PxPlus1";

export const ButtonTallFlexible = ({ status, className, text = "BUTTON TEXT" }) => {
  return (
    <div
      className={`[background:linear-gradient(180deg,rgb(62,61,69)_0%,rgb(32,32,32)_100%)] inline-flex items-start gap-[10px] px-[24px] py-[12px] rounded-[8px] relative ${
        status === "default" ? "shadow-drop-shadow-black" : "shadow-[0px_6px_8px_#00000040]"
      } ${className}`}
    >
      <Icon18PxPlus1 className="!relative !w-[18px] !h-[18px]" />
      <div className="[font-family:'Roboto',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[12px] text-linearwhite relative font-bold text-right whitespace-nowrap leading-[16.8px]">
        {text}
      </div>
    </div>
  );
};
