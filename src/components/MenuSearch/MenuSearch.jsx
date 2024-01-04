/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const MenuSearch = ({ status, className }) => {
  return (
    <div
      className={`w-[173px] h-[42px] relative ${status === "default" ? "border border-solid" : ""} ${
        status === "default" ? "border-lineargrey" : ""
      } ${status === "pressed" ? "bg-[100%_100%]" : ""} ${
        status === "pressed" ? "bg-[url(https://c.animaapp.com/1ri1sOFK/img/subtract-2.svg)]" : ""
      } ${status === "default" ? "rounded-[8px]" : ""} ${className}`}
    >
      <div
        className={`[font-family:'Roboto',Helvetica] tracking-[0] text-[14px] text-lineargrey font-normal leading-[19.6px] whitespace-nowrap absolute ${
          status === "default" ? "left-[14px]" : "left-[15px]"
        } ${status === "default" ? "top-[9px]" : "top-[10px]"}`}
      >
        {status === "pressed" && <>|</>}

        {status === "default" && <>Search here</>}
      </div>
      {status === "pressed" && (
        <div className="absolute top-[-8px] left-[15px] [font-family:'Roboto',Helvetica] font-normal text-linearred text-[11px] tracking-[0] leading-[15.4px] whitespace-nowrap">
          Search here
        </div>
      )}
    </div>
  );
};
