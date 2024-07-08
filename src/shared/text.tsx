import React from "react";

const ThinHeadingText = ({ children }: { children: string }) => {
   return <span className="font-title-light font-light text-[#E3E4E68C]">{children}</span>;
};

const ThickHeadingText = ({ children }: { children: string }) => {
   return <span className="font-title font-semibold">{children}</span>;
};

export { ThickHeadingText, ThinHeadingText };
