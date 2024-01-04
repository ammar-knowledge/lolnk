/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const MenuButton = ({ status, className, text = "Dashboards", text1 = "A" }) => {
  return (
    <div
      className={`w-[218px] h-[48px] rounded-[4px] relative ${
        status === "selected" ? "bg-linearred" : status === "hover" ? "bg-lineardark-mud" : ""
      } ${className}`}
    >
      <div className="[font-family:'Roboto',Helvetica] left-[57px] tracking-[0] text-[14px] top-[13px] text-linearwhite absolute font-normal whitespace-nowrap leading-[19.6px]">
        {text}
      </div>
      <div className="[font-family:'Roboto',Helvetica] w-[20px] left-[21px] tracking-[0] text-[14px] top-[13px] text-linearwhite absolute font-normal text-center leading-[19.6px]">
        {text1}
      </div>
    </div>
  );
};
