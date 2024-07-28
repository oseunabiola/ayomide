import React from "react";
import { SectionHeadingText } from ".";
import { Container } from "../../shared/container";

const Bio = () => {
   return (
      <Container>
         <div className="grid gap-4 my-20 text-lg md:text-xl leading-9 text-justify">
            <header>
               <SectionHeadingText>About Me</SectionHeadingText>
            </header>
            <div className="grid gap-4 text-[#797777] lg:text-2xl">
               <p>
                  My Design Journey began as far back in 2016. I see design as communication and as a way to solve
                  problems and creatively manage situations. My skills and competencies as a person include learning
                  quickly, thinking critically, and working independently on any issue to arrive at a workable and most
                  favourable course of action. I design the visual elements of websites, books, periodicals, and product
                  packaging and exhibitions. I make every effort to attract the attention of individuals who see them
                  and convey the appropriate message. I've had the opportunity to work in design teams on projects and
                  build digital collaterals for corporate brands over the years.
               </p>
               <p>
                  Currently, I work with ToNote Technologies where I am responsible for the graphical design and
                  implementation of all the experiences a user has when interacting with our digital tools, marketing
                  touch-points and the website. When I&apos;m not pushing pixels, I can be found helping other designers
                  and newbies get started out in their Design career with Everything Design, I also enjoy reading and
                  cheering for Arsenal Football club.Currently, I work with ToNote Technologies where I am responsible
                  for the graphical design and implementation of all the experiences a user has when interacting with
                  our digital tools, marketing touch-points and the website. When I&apos;m not pushing pixels, I can be
                  found helping other designers and newbies get started out in their Design career with Everything
                  Design, I also enjoy reading and cheering for Arsenal Football club.
               </p>
            </div>
         </div>
      </Container>
   );
};

export { Bio };
