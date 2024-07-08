import React from "react";
import { BsBehance, BsDribbble, BsLinkedin } from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";
import { ThickHeadingText, ThinHeadingText } from "../../shared/text";

const Footer = () => {
   return (
      <footer className="mt-16 min-h-[300px] md:min-h-[383px] flex items-center justify-center">
         <div className="grid text-center">
            <header>
               <h2 className="text-5xl md:text-[56px]">
                  <ThinHeadingText>Get </ThinHeadingText>
                  <ThickHeadingText>in touch.</ThickHeadingText>
               </h2>
            </header>
            <p className="text-lg">So that we can talk more about...</p>
            <p className="flex mx-auto mt-10 md:mt-16 gap-x-16 text-2xl [&>*]:text-gray-500">
               <HiEnvelope />
               <BsBehance />
               <BsDribbble />
               <a
                  href="https://www.linkedin.com/in/leslieisaninja/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200">
                  <BsLinkedin />
               </a>
            </p>
         </div>
      </footer>
   );
};

export { Footer };
