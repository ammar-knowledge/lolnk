/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon8PxArrowDown17 } from "../../icons/Icon8PxArrowDown17";
import { IconDashboard } from "../IconDashboard";

export const MenuButtonPrimary = ({
  status,
  className,
  text = "Dashboards",
  override = (
    <IconDashboard
      className="!absolute !left-[21px] !top-[16px]"
      divClassName="!bg-linearwhite"
      divClassNameOverride="!bg-linearwhite"
      rectangleClassName="!bg-linearwhite"
      rectangleClassNameOverride="!bg-linearwhite"
    />
  ),
  icon = <Icon8PxArrowDown17 className="!absolute !w-[9px] !h-[8px] !top-[22px] !left-[194px]" color="white" />,
}) => {
  return (
    <div
      className={`w-[218px] h-[48px] rounded-[4px] relative ${
        status === "selected" ? "bg-[#505054]" : status === "hover" ? "bg-lineardark-mud" : ""
      } ${className}`}
    >
      <div className="[font-family:'Roboto',Helvetica] left-[57px] tracking-[0] text-[14px] top-[13px] text-linearwhite absolute font-normal whitespace-nowrap leading-[19.6px]">
        {text}
      </div>
      {override}
      {icon}
    </div>
  );
};
