/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const FooterPrimary = ({ className, sideLinksClassName }) => {
  return (
    <div className={`relative w-[1552px] h-[20px] ${className}`}>
      <p className="absolute -top-px left-0 [font-family:'Roboto',Helvetica] font-normal text-[#7b809a] text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
        <span className="[font-family:'Roboto',Helvetica] font-normal text-[#7b809a] text-[14px] tracking-[0] leading-[19.6px]">
          © 2022, made with ♥ by{" "}
        </span>
        <span className="font-bold">Creative Tim</span>
        <span className="[font-family:'Roboto',Helvetica] font-normal text-[#7b809a] text-[14px] tracking-[0] leading-[19.6px]">
          {" "}
          for a better web.
        </span>
      </p>
      <div className={`absolute w-[315px] h-[20px] top-0 left-[1245px] ${sideLinksClassName}`}>
        <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-normal text-lineargrey text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
          Creative Tim
        </div>
        <div className="absolute top-0 left-[110px] [font-family:'Roboto',Helvetica] font-normal text-lineargrey text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
          About Us
        </div>
        <div className="absolute top-0 left-[199px] [font-family:'Roboto',Helvetica] font-normal text-lineargrey text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
          Blog
        </div>
        <div className="absolute top-0 left-[258px] [font-family:'Roboto',Helvetica] font-normal text-lineargrey text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
          License
        </div>
      </div>
    </div>
  );
};
