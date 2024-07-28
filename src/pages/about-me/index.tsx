import React from "react";
import { Bio } from "./bio";
import { Experience } from "./experience";
import { Expertise } from "./expertise";
import { Hero } from "./hero";

const AboutMe = () => {
   return (
      <div>
         <Hero />
         <Experience />
         <Bio />
         <Expertise />
      </div>
   );
};

export { AboutMe };

const SectionHeadingText = ({ children, variant }: { children: string; variant?: "bold" }) => {
   let variantClassName = "";
   switch (variant) {
      case "bold":
         variantClassName += "font-bold";
         break;

      default:
         variantClassName += "";
         break;
   }

   return <h2 className={`text-3xl lg:text-[40px] leading-10 lg:leading-[54px] ${variantClassName}`}>{children}</h2>;
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

export { SectionHeadingText, UnderlinedLink };
