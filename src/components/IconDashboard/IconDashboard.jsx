/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const IconDashboard = ({
  className,
  rectangleClassName,
  rectangleClassNameOverride,
  divClassName,
  divClassNameOverride,
}) => {
  return (
    <div className={`relative w-[16px] h-[16px] ${className}`}>
      <div
        className={`absolute w-[7px] h-[10px] top-0 left-0 bg-lineardark-black rounded-[1px] ${rectangleClassName}`}
      />
      <div
        className={`absolute w-[7px] h-[5px] top-[11px] left-0 bg-lineardark-black rounded-[1px] ${rectangleClassNameOverride}`}
      />
      <div
        className={`absolute w-[7px] h-[10px] top-[6px] left-[9px] bg-lineardark-black rounded-[1px] rotate-[-180.00deg] ${divClassName}`}
      />
      <div
        className={`absolute w-[7px] h-[5px] top-0 left-[9px] bg-lineardark-black rounded-[1px] rotate-[-180.00deg] ${divClassNameOverride}`}
      />
    </div>
  );
};
