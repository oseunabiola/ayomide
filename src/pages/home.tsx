import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { LinkButton } from "../shared/button";
import { ThickHeadingText, ThinHeadingText } from "../shared/text";

const Home = () => {
   return (
      <>
         <Hero />
         <WorksHighlight />
         <SelectedWorks />
      </>
   );
};

export { Home };

const Hero = () => {
   return (
      <div className="min-h-[600px] md:min-h-[652px] flex items-center">
         <div className="grid gap-8 justify-items-start">
            <p className=" font-bold text-5xl md:text-7xl font-title">Hi, I&apos;m Ayomide!</p>
            <p className="text-lg md:text-[21px] font-light">
               A multidisciplinary designer with 6 years of professional experience focusing on visual brand identity
               and interactive experiences for web and mobile apps. I design visually appealing and user-friendly
               websites that tell your company's story, appeal to customers, and simplify sales.
            </p>
            <LinkButton variant="yellow" to="about-me">
               <span className="flex gap-1 items-center text-lg text-black">
                  Know more about me <BsArrowRight />
               </span>
            </LinkButton>
         </div>
      </div>
   );
};

const WorksHighlight = () => {
   return (
      <div className="min-h-[500px] md:min-h-[580px] flex items-center">
         <div className="grid gap-8">
            <header>
               <h2 className=" text-[35px] md:text-[40px] leading-10 max-w-[24ch]">
                  <ThinHeadingText>Some of </ThinHeadingText>
                  <ThickHeadingText>the clients I have designed for</ThickHeadingText>
               </h2>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-x-14 gap-y-4 [&>img]:brightness-50">
               <img src="/static/Vertical Lockup_Logo_Logo in PNG copy 1.png" alt="" />
               <img src="/static/Vertical Lockup_Logo_Logo in PNG copy 3.png" alt="" />
               <img src="/static/Vertical Lockup_Logo_Logo in PNG copy 4.png" alt="" />
               <img src="/static/Vertical Lockup_Logo_Logo in PNG copy 5.png" alt="" />
            </div>
         </div>
      </div>
   );
};

const SELECTED_WORKS = {
   product: [
      {
         title: "ToNote Website + Platform",
         description: "A Platform that allows you sign and notarise important documents online.",
         illustration: "/static/to-note.png",
      },
      {
         title: "NJC Notary System",
         description:
            "A Platform that allows you Verify the authenticity of all documents certified by notaries public of the Federal Republic of Nigeria.",
         illustration: "/static/NJC-Notary-System.png",
      },
      {
         title: "User Management Dashboard",
         description: "",
         illustration: "/static/user-mgt-dash.png",
      },
      {
         title: "Flat Share",
         description: "Find room mates and available living spaces in Lagos",
         illustration: "/static/flat-share.png",
      },
      {
         title: "Coming Soon",
         description: "Adding more awesome projects in the future.",
         illustration: "/static/coming-soon.png",
      },
   ],
   brand: [
      {
         title: "ToNote Technologies",
         description: "Brand, Visual Design, Motion Design",
         illustration: "/static/brand-to-note.png",
      },
      {
         title: "Cobalt",
         description: "Brand Identity",
         illustration: "/static/brand-cobalt.png",
      },
      {
         title: "The Brane Project",
         description: "Brand Identity",
         illustration: "/static/brand-brane.jpg",
      },
      {
         title: "The Exquisite Group",
         description: "Brand Identity",
         illustration: "/static/brand-exquisite.png",
      },
      {
         title: "Erika Beach House",
         description: "Brand Identity",
         illustration: "/static/brand-erika.png",
      },
      {
         title: "Gender Centre for Excellence",
         description: "Brand Identity",
         illustration: "/static/brand-gender.png",
      },
   ],
   motion: [],
};

const SelectedWorks = () => {
   return (
      <div className="grid gap-8 md:gap-12 my-16" id="works">
         <header className="text-[35px] md:text-[40px]">
            <h2>
               <ThinHeadingText>Selected </ThinHeadingText>
               <ThickHeadingText>Works</ThickHeadingText>
            </h2>
         </header>
         <Tabs position="relative" variant="unstyled" className="grid gap-12">
            <TabList className="border border-accent overflow-hidden rounded justify-self-start md:text-[25.5px]">
               <Tab _selected={{ bg: "var(--accent)", color: "#000" }}>
                  <span className=" py-3 md:py-6 px-6 md:px-14">Product Design</span>
               </Tab>
               <Tab _selected={{ bg: "var(--accent)", color: "#000" }}>
                  <span className=" py-3 md:py-6 px-6 md:px-14">Brand Design</span>
               </Tab>
               <Tab _selected={{ bg: "var(--accent)", color: "#000" }}>
                  <span className=" py-3 md:py-6 px-6 md:px-14">Motion Design & Others</span>
               </Tab>
            </TabList>
            <TabPanels>
               <TabPanel className="grid md:grid-cols-2 gap-x-8 gap-y-12">
                  {SELECTED_WORKS.product.map((_work) => (
                     <div key={_work.title} className="grid gap-7">
                        <img src={_work.illustration} alt="" />
                        <div>
                           <p className="text-2xl font-medium">{_work.title}</p>
                           <p className="text-lg text-white/60">{_work.description}</p>
                        </div>
                     </div>
                  ))}
               </TabPanel>
               <TabPanel className="grid md:grid-cols-2 gap-x-8 gap-y-12">
                  {SELECTED_WORKS.brand.map((_work) => (
                     <div key={_work.title} className="grid gap-7">
                        <img src={_work.illustration} alt="" />
                        <div>
                           <p className="text-2xl font-medium">{_work.title}</p>
                           <p className="text-lg text-white/60">{_work.description}</p>
                        </div>
                     </div>
                  ))}
               </TabPanel>
            </TabPanels>
         </Tabs>
      </div>
   );
};
