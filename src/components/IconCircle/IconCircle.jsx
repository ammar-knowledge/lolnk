/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon8PxArrowDown17 } from "../../icons/Icon8PxArrowDown17";

export const IconCircle = ({ className, icon8PxArrowDown17Color = "white" }) => {
  return (
    <div
      className={`relative w-[34px] h-[34px] rounded-[17px] border border-solid border-lineardark-black ${className}`}
    >
      <Icon8PxArrowDown17
        className="!absolute !w-[9px] !h-[8px] !top-[13px] !left-[12px]"
        color={icon8PxArrowDown17Color}
      />
    </div>
  );
};
