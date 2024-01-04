/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const TabSettings = ({ className }) => {
  return (
    <div className={`relative w-[413px] h-[42px] bg-linearcloud rounded-[8px] ${className}`}>
      <div className="absolute w-[109px] h-[34px] top-[4px] left-[7px] bg-linearwhite rounded-[8px] shadow-drop-shadow-black">
        <div className="absolute top-[5px] left-[18px] [font-family:'Roboto',Helvetica] font-normal text-lineardark-blue text-[16px] text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
          Messages
        </div>
      </div>
      <div className="absolute top-[9px] left-[133px] [font-family:'Roboto',Helvetica] font-normal text-lineardark-blue text-[16px] text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
        Social
      </div>
      <div className="absolute top-[9px] left-[213px] [font-family:'Roboto',Helvetica] font-normal text-lineardark-blue text-[16px] text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
        Notifications
      </div>
      <div className="absolute top-[9px] left-[338px] [font-family:'Roboto',Helvetica] font-normal text-lineardark-blue text-[16px] text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
        Backup
      </div>
    </div>
  );
};
