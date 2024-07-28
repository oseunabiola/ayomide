import React from "react";
import { Container } from "../../shared/container";

const EXPERIENCE_HISTORY = [
   { role: "UX/UI Designer", organization: "ToNote Technologies Ltd.", isPresent: true },
   { role: "Graphic Designer", organization: "Futuresoft Ltd." },
   { role: "Graphic Designer", organization: "360 Graphix" },
   { role: "Brand Designer", organization: "Omotty’s Empire" },
   { role: "Design Associate", organization: "RAF Foundation" },
];

const Experience = () => {
   return (
      <Container>
         <div className="experience | grid gap-2">
            <header>
               <h2 className=" text-4xl font-medium">Experience</h2>
            </header>
            <div className="grid md:grid-cols-2 gap-y-12">
               <div className="ex-links | flex flex-col items-start gap-4 text-[15px] font-light">
                  <a
                     href="http://"
                     target="_blank"
                     rel="noopener noreferrer"
                     className=" underline decoration-accent underline-offset-4">
                     Visit Linkedin
                  </a>
                  <a
                     href="http://"
                     target="_blank"
                     rel="noopener noreferrer"
                     className=" underline decoration-accent underline-offset-4">
                     View Resume
                  </a>
               </div>

               <ul className="work-experience | grid gap-2 text-lg md:text-xl">
                  {EXPERIENCE_HISTORY.map((_work) => (
                     <li key={_work.organization} className="block">
                        <span className="block md:inline-block md:w-[33%]">{_work.role}</span>
                        <span
                           className={`inline-block font-light ${_work.isPresent ? "text-accent" : "text-[#C4C4C4]"}`}>
                           {_work.organization}
                           {_work.isPresent ? (
                              <span className="text-gray-400 font-light text-sm ps-4">Present</span>
                           ) : null}
                        </span>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </Container>
   );
};

export { Experience };
