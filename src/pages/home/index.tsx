import React from "react";
import { FAQs } from "./faq";
import { Hero } from "./hero";
import { SelectedWorks, WorksHighlight } from "./works";

const Home = () => {
   return (
      <>
         <Hero />
         <WorksHighlight />
         <SelectedWorks />
         <FAQs />
      </>
   );
};

export { Home };
