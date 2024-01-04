/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon16PxDelete3 } from "../../icons/Icon16PxDelete3";
import { Icon16PxPencil } from "../../icons/Icon16PxPencil";
import { ButtonExtrasmall } from "../ButtonExtrasmall";

export const RowBillingInfo = ({
  className,
  buttonExtrasmallIcon = <Icon16PxPencil className="!relative !w-[16px] !h-[16px]" color="#344767" />,
  text = "Oliver Liam",
  text1 = "Viking Burrito",
  text2 = "oliver@burrito.com",
  override = <Icon16PxDelete3 className="!relative !w-[16px] !h-[16px]" color="#F44334" />,
  inputType = "email",
}) => {
  return (
    <div className={`relative w-[704px] h-[146px] bg-linearcloud rounded-[8px] ${className}`}>
      <div className="absolute top-[23px] left-[24px] [font-family:'Roboto',Helvetica] font-bold text-lineardark-blue text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
        {text}
      </div>
      <div className="absolute top-[58px] left-[24px] [font-family:'Roboto',Helvetica] font-normal text-lineargrey text-[12px] tracking-[0] leading-[16.8px] whitespace-nowrap">
        Company Name:
      </div>
      <div className="absolute top-[58px] left-[124px] [font-family:'Roboto',Helvetica] font-bold text-lineardark-blue text-[12px] tracking-[0] leading-[16.8px] whitespace-nowrap">
        {text1}
      </div>
      <input
        className="absolute top-[81px] left-[114px] [font-family:'Roboto',Helvetica] font-bold text-lineardark-blue text-[12px] tracking-[0] leading-[16.8px] whitespace-nowrap [background:transparent] border-[none] p-0"
        placeholder={text2}
        type={inputType}
      />
      <div className="absolute top-[104px] left-[105px] [font-family:'Roboto',Helvetica] font-bold text-lineardark-blue text-[12px] tracking-[0] leading-[16.8px] whitespace-nowrap">
        FRB1235476
      </div>
      <div className="absolute top-[81px] left-[24px] [font-family:'Roboto',Helvetica] font-normal text-lineargrey text-[12px] tracking-[0] leading-[16.8px] whitespace-nowrap">
        Email Address:
      </div>
      <div className="absolute top-[104px] left-[24px] [font-family:'Roboto',Helvetica] font-normal text-lineargrey text-[12px] tracking-[0] leading-[16.8px] whitespace-nowrap">
        VAT Number:
      </div>
      <ButtonExtrasmall className="!absolute !left-[515px] !top-[35px]" icon={override} text="DELETE" />
      <ButtonExtrasmall
        className="!absolute !left-[615px] !top-[35px]"
        icon={buttonExtrasmallIcon}
        text="EDIT"
        textClassName="!text-lineardark-blue"
      />
    </div>
  );
};
