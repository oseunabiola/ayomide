import React from "react";

const AboutMe = () => {
   return (
      <div>
         <Hero />
         <Experience />
         <About />
         <Expertise />
      </div>
   );
};

export { AboutMe };

const Hero = () => {
   return (
      <div className="min-h-[500px] md:min-h-[652px] flex items-center">
         <ul className="grid justify-items-start text-4xl md:text-7xl -tracking-[2.5px] leading-9 font-bold">
            <li>
               <span className="font-title">Product Design</span>
            </li>
            <li className="text-accent">
               <span className="font-title">Branding</span>
            </li>
            <li>
               <span className="font-title">Creative Direction</span>
            </li>
         </ul>
      </div>
   );
};

const WORK_HISTORY = [
   { role: "UX/UI Designer", organization: "ToNote Technologies Ltd.", isPresent: true },
   { role: "Graphic Designer", organization: "Futuresoft Ltd." },
   { role: "Graphic Designer", organization: "360 Graphix" },
   { role: "Brand Designer", organization: "Omotty’s Empire" },
   { role: "Design Associate", organization: "RAF Foundation" },
];

const Experience = () => {
   return (
      <div className="experience | grid gap-2">
         <header>
            <h2 className="font-title text-4xl font-medium">Experience</h2>
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
               {WORK_HISTORY.map((_work) => (
                  <li key={_work.organization} className="block">
                     <span className="block md:inline-block md:w-[33%]">{_work.role}</span>
                     <span className={`inline-block font-light ${_work.isPresent ? "text-accent" : "text-[#C4C4C4]"}`}>
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
   );
};

const About = () => {
   return (
      <div className="grid gap-4 my-20 text-lg md:text-xl leading-9 text-justify">
         <header>
            <SectionHeadingText>About Me</SectionHeadingText>
         </header>
         <p>
            My Design Journey began as far back in 2016. I see design as communication and as a way to solve problems
            and creatively manage situations. My skills and competencies as a person include learning quickly, thinking
            critically, and working independently on any issue to arrive at a workable and most profitable course of
            action. I design the visual elements of websites, books, periodicals, and product packaging and exhibitions.
            I make every effort to attract the attention of individuals who see them and convey the appropriate message.
            I've had the opportunity to work in design teams on projects and build digital collaterals for corporate
            profiles over the years.
         </p>
         <p>
            Currently, I work with ToNote Technologies where I am responsible for the graphical design and
            implementation of all the experiences a user has when interacting with our digital tools, marketing
            touch-points and the website. When I'm not pushing pixels, I can be found helping other designers and
            newbies get started out in their Design career with Everything Design, I also enjoy reading and cheering for
            Arsenal Football club.
         </p>
      </div>
   );
};

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
      <div className="grid gap-4 my-40">
         <header>
            <SectionHeadingText variant="bold">Expertise</SectionHeadingText>
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
   );
};

const SectionHeadingText = ({ children, variant }: { children: string; variant?: "bold" }) => {
   let variantClassName = "";
   switch (variant) {
      case "bold":
         variantClassName += "font-bold";
         break;

      default:
         variantClassName += "font-medium";
         break;
   }

   return <h2 className={`font-title text-4xl ${variantClassName}`}>{children}</h2>;
};

const UnderlinedLink = ({
   children,
   ...rest
}: { children: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
   return (
      <a className=" underline decoration-accent underline-offset-4" {...rest}>
         {children}
      </a>
   );
};
