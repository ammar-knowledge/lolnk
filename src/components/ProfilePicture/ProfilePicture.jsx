/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ProfilePicture = ({ profilePicture = "https://c.animaapp.com/1ri1sOFK/img/profile-picture-1.svg" }) => {
  return <img className="absolute w-[32px] h-[32px] top-0 left-0" alt="Profile picture" src={profilePicture} />;
};
