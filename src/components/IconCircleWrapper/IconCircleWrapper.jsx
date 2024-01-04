/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const IconCircleWrapper = ({ className, divClassName }) => {
  return (
    <div
      className={`relative w-[34px] h-[34px] rounded-[17px] border border-solid border-lineardark-black ${className}`}
    >
      <div
        className={`absolute top-[2px] left-[13px] [font-family:'Roboto',Helvetica] font-bold text-lineardark-black text-[18px] tracking-[0] leading-[25.2px] whitespace-nowrap ${divClassName}`}
      >
        !
      </div>
    </div>
  );
};
