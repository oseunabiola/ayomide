import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { LinkButton } from "../../shared/button";
import { Container } from "../../shared/container";

const Hero = () => {
   return (
      <Container>
         <div className="min-h-[700px] md:min-h-[652px] flex items-center">
            <div className="grid gap-y-14 justify-items-start">
               <div className="grid gap-2">
                  <p className="text-6xl md:text-8xl leading-[60px] md:leading-[130px] -tracking-[2.5px]">
                     Hi, I&apos;m <span className="text-[#ACADB0]">Ayomide!</span>
                  </p>
                  <p className="text-lg md:text-2xl font-light leading-[36px] md:leading-[43px] text-justify lg:max-w-[61ch]">
                     A multidisciplinary designer with over 6 years of professional experience focusing on visual brand
                     identity and interactive experiences for web and mobile apps. I design visually appealing and
                     user-friendly websites that tell your company's story, appeal to customers, and simplify sales.
                  </p>
               </div>
               <LinkButton variant="yellow" to="about-me">
                  <span className="flex gap-1 items-center text-lg text-black">
                     Send a Message <BsArrowRight />
                  </span>
               </LinkButton>
            </div>
         </div>
      </Container>
   );
};

export { Hero };
