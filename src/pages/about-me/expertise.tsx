import React from "react";
import { SectionHeadingText, UnderlinedLink } from ".";
import { Container } from "../../shared/container";

const EXPERTISE = [
   { name: "Branding", "sub-skill": ["Brand Identity Direction", "Visual Communication", "Systems & Guides"] },
   {
      name: "Design",
      "sub-skill": [
         "Digital Product Design",
         "Mobile UI / UX Design",
         "Prototyping",
         "Interaction Design",
         "User Experience",
         "Motion Design",
      ],
   },
   { name: "Process", "sub-skill": ["Understand", "Contextualize", "Explore", "Validate", "Build"] },
   { name: "Tools", "sub-skill": ["Figma", "AdobeXD", "After Effects", "Premiere pro", "Adobe Suite CC"] },
];

const Expertise = () => {
   return (
      <Container>
         <div className="grid gap-4 my-40">
            <header>
               <SectionHeadingText>Expertise</SectionHeadingText>
            </header>
            <div className="grid md:grid-cols-2 gap-y-10">
               <div className="flex flex-col items-start gap-4 text-[15px] font-light">
                  <UnderlinedLink href="http://" target="_blank" rel="noopener noreferrer">
                     Behance
                  </UnderlinedLink>
                  <UnderlinedLink href="http://" target="_blank" rel="noopener noreferrer">
                     Dribble
                  </UnderlinedLink>
                  <UnderlinedLink href="http://" target="_blank" rel="noopener noreferrer">
                     Instagram
                  </UnderlinedLink>
               </div>
               <div className="grid grid-cols-2 gap-y-20 gap-x-4 items-start">
                  {EXPERTISE.map((_expertise) => (
                     <div className="grid gap-3" key={_expertise.name}>
                        <h3 className="text-[21px]">{_expertise.name}</h3>
                        <ul className="grid gap-2 font-light text-[15px] text-accent">
                           {_expertise["sub-skill"].map((_sub, index) => (
                              <li key={index}>{_sub}</li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </Container>
   );
};

export { Expertise };
