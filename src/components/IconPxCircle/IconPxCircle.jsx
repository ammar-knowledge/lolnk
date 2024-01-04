/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon8PxArrowDown13 } from "../../icons/Icon8PxArrowDown13";

export const IconPxCircle = ({ className, icon8PxArrowDown13Color = "#191919" }) => {
  return (
    <div
      className={`relative w-[34px] h-[34px] rounded-[17px] border border-solid border-lineardark-black ${className}`}
    >
      <Icon8PxArrowDown13
        className="!absolute !w-[9px] !h-[8px] !top-[12px] !left-[11px]"
        color={icon8PxArrowDown13Color}
      />
    </div>
  );
};
