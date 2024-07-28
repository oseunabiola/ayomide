import React from "react";
import { BsArrowRight, BsBehance, BsDribbble, BsLinkedin } from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";
import { LinkButton } from "../../shared/button";
import { Container } from "../../shared/container";
import { GrayHeadingText } from "../../shared/text";

const Footer = () => {
   return (
      <footer>
         <ContactMeCTA />
         <div className="min-h-[300px] md:min-h-[383px] flex items-center justify-center">
            <div className="grid text-center">
               <header>
                  <h2 className="text-5xl md:text-[56px]">
                     <GrayHeadingText>Get </GrayHeadingText>
                     in touch.
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
         </div>
      </footer>
   );
};

export { Footer };

const ContactMeCTA = () => {
   return (
      <div className="py-12 lg:py-0">
         <Container>
            <div className="grid lg:grid-flow-col lg:justify-between lg:items-center">
               <div className="w-9/12 lg:w-11/12 mx-auto lg:order-1 bg-red-400">
                  <img src="/static/Ayomide-Adebayo.png" alt="Ayomide Adebayo" />
               </div>
               <div className="grid lg:justify-between lg:justify-items-start gap-8 md:gap-12 my-10">
                  <header className="text-[50px] md:text-[72px] text-center lg:text-left leading-[60px] lg:leading-[80px]">
                     <h2>
                        <GrayHeadingText>Let&apos;s work together on</GrayHeadingText>
                        <br />
                        your next project
                     </h2>
                  </header>
                  <LinkButton to="about-me" variant="yellow">
                     <span className="grid grid-flow-col justify-center gap-1 items-center text-lg text-black">
                        Contact Me <BsArrowRight />
                     </span>
                  </LinkButton>
               </div>
            </div>
         </Container>
      </div>
   );
};
