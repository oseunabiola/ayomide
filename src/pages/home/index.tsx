import React from "react";
import { Footer } from "../shared/footer";
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
         <Footer />
      </>
   );
};

export { Home };
