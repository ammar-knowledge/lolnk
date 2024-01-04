/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon18PxFilePdfBox5 } from "../../icons/Icon18PxFilePdfBox5";

export const RowInvoice = ({ className, text = "March, 01, 2020", text1 = "#MS-415646", text2 = "$180" }) => {
  return (
    <div className={`relative w-[362px] h-[40px] ${className}`}>
      <div className="absolute -top-px left-0 [font-family:'Roboto',Helvetica] font-bold text-lineardark-blue text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
        {text}
      </div>
      <div className="absolute top-[22px] left-0 [font-family:'Roboto',Helvetica] font-normal text-lineargrey text-[12px] tracking-[0] leading-[16.8px] whitespace-nowrap">
        {text1}
      </div>
      <div className="absolute top-[9px] left-[255px] [font-family:'Roboto',Helvetica] font-normal text-lineargrey text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
        {text2}
      </div>
      <div className="absolute top-[9px] left-[336px] [font-family:'Roboto',Helvetica] font-bold text-lineardark-blue text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
        PDF
      </div>
      <Icon18PxFilePdfBox5 className="!absolute !w-[18px] !h-[18px] !top-[11px] !left-[311px]" color="#344767" />
    </div>
  );
};
