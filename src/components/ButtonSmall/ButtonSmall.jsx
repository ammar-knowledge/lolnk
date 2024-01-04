/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ButtonSmall = ({ status, className, divClassName, text = "BUTTON TEXT" }) => {
  return (
    <div
      className={`border border-solid inline-flex items-start gap-[10px] px-[16px] py-[8px] rounded-[8px] relative ${
        status === "default" ? "border-lineardark-blue" : "border-lineargrey"
      } ${status === "pressed" ? "opacity-80" : ""} ${className}`}
    >
      <div
        className={`[font-family:'Roboto',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[12px] relative font-bold text-right whitespace-nowrap leading-[16.8px] ${
          status === "default" ? "text-lineardark-blue" : "text-lineargrey"
        } ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};
