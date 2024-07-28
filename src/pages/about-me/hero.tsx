import React from "react";
import { Container } from "../../shared/container";

const Hero = () => {
   return (
      <div className="min-h-[450px] md:min-h-[652px] flex items-center">
         <Container>
            <ul className="grid justify-items-start text-5xl md:text-7xl -tracking-[2.5px] lg:leading-[96px]">
               <li>Product Design</li>
               <li className="text-accent">Branding</li>
               <li>Creative Direction</li>
            </ul>
         </Container>
      </div>
   );
};

export { Hero };
