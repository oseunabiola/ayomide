import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import { LinkButton } from "../../shared/button";
import { Container } from "../../shared/container";
import { GrayHeadingText } from "../../shared/text";

const WorksHighlight = () => {
   return (
      <div className="min-h-[500px] md:min-h-[580px] flex items-center w-full">
         <div className="grid gap-8 w-full">
            <Container>
               <header>
                  <h2 className="text-[35px] md:text-[40px] leading-10 max-w-[23ch]">
                     <GrayHeadingText>Some of </GrayHeadingText>the clients I have designed for
                  </h2>
               </header>
            </Container>
            <div className="py-4 lg:py-2" style={{ boxShadow: "2px 2px 19.9px 8px rgba(254, 244, 4, 0.06)" }}>
               <div className="w-10/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center gap-x-14 gap-y-4 [&>img]:brightness-50 [&>*]:justify-center ">
                  <img src="/static/Vertical Lockup_Logo_Logo in PNG copy 1.png" alt="" />
                  <img src="/static/Vertical Lockup_Logo_Logo in PNG copy 3.png" alt="" />
                  <img src="/static/Vertical Lockup_Logo_Logo in PNG copy 4.png" alt="" />
                  <img src="/static/Vertical Lockup_Logo_Logo in PNG copy 5.png" alt="" className="w-1/2 mx-auto" />
                  <img src="/static/Vertical Lockup_Logo_Logo in PNG copy 6.png" alt="" className="w-1/2 mx-auto" />
               </div>
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
         link: "https://www.gettonote.com/",
      },
      {
         title: "NJC Notary System",
         description:
            "A Platform that allows you Verify the authenticity of all documents certified by notaries public of the Federal Republic of Nigeria.",
         illustration: "/static/NJC-Notary-System.png",
         link: "https://www.figma.com/proto/16QFXU6MgCN5n3ztZ3yEWD/NOTARY.GOV?page-id=939%3A3069&node-id=1564-12861&viewport=403%2C355%2C0.02&t=ZKgZBDXZ0Q6XZrFC-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1564%3A12861",
      },
      {
         title: "User Management Dashboard",
         description: "A Platform that allows you sign and notarise important documents online.",
         illustration: "/static/user-mgt-dash.png",
         link: "",
      },
      {
         title: "Flat Share",
         description: "Find room mates and available living spaces in Lagos",
         illustration: "/static/flat-share.png",
         link: "https://www.notion.so/Flatshare-Case-Study-0cf5c5371c2d4dd0a525cd71da87c8ea",
      },
   ],
   brand: [
      {
         title: "ToNote Technologies",
         description: "Brand, Visual Design, Motion Design",
         illustration: "/static/brand-to-note.png",
         link: "https://www.instagram.com/tonotehq/",
      },
      {
         title: "Cobalt Incorporated",
         description: "Brand Identity",
         illustration: "/static/brand-cobalt.png",
         link: "",
      },
      {
         title: "The Brane Project",
         description: "Brand, Visual Design, Motion Design",
         illustration: "/static/brand-brane.jpg",
         link: "https://drive.google.com/file/d/1lvxq9Y_UDf8Z-W6t6TeRWdkZ5ZqoBqc4/view",
      },
      {
         title: "The Exquisite Group",
         description: "Brand Identity",
         illustration: "/static/brand-exquisite.png",
         link: "https://drive.google.com/file/d/1UXs4ps4fHD3MQwNdwhJx6W328BertVO7/view",
      },
      {
         title: "Erika",
         description: "Brand Identity",
         illustration: "/static/brand-erika.png",
         link: "https://drive.google.com/file/d/1zCzZz4YhSc60unre0o7lloExqUHoq9NP/view",
      },
      {
         title: "Gender Centre for Excellence",
         description: "Brand Identity",
         illustration: "/static/brand-gender.png",
         link: "https://drive.google.com/file/d/1VbfGQ3JdCFWvmZ8G0jtROIz6BIU5orw4/view",
      },
   ],
   motion: [
      {
         title: "ToNote Technologies",
         description: "Reels and Compilation",
         illustration: "/static/brand-to-note.png",
         link: "https://www.instagram.com/tonotehq/",
      },
      {
         title: "Miscellaneous & Others",
         description: "Reels and Compilation",
         illustration: "/static/brand-cobalt.png",
         link: "https://drive.google.com/file/d/1VbfGQ3JdCFWvmZ8G0jtROIz6BIU5orw4/view",
      },
      {
         title: "Photo Manipulation",
         description: "",
         illustration: "/static/brand-to-note.png",
         link: "https://www.instagram.com/tonotehq/",
      },
   ],
};

const SelectedWorks = () => {
   return (
      <Container>
         <div className="grid gap-8 md:gap-12 my-10" id="works">
            <header className="text-[35px] md:text-[40px] text-center">
               <h2>
                  <GrayHeadingText>Selected </GrayHeadingText>
                  Works
               </h2>
            </header>
            <Tabs position="relative" variant="unstyled" className="grid gap-12 text-black">
               <TabList className="border border-accent overflow-hidden rounded justify-self-center md:text-[25.5px] text-white">
                  <Tab _selected={{ bg: "var(--accent)", color: "#000", borderRadius: "4px" }}>
                     <span className=" py-3 md:py-6 px-6 md:px-14">Product Design</span>
                  </Tab>
                  <Tab _selected={{ bg: "var(--accent)", color: "#000", borderRadius: "4px" }}>
                     <span className=" py-3 md:py-6 px-6 md:px-14">Brand Design</span>
                  </Tab>
                  <Tab _selected={{ bg: "var(--accent)", color: "#000", borderRadius: "4px" }}>
                     <span className=" py-3 md:py-6 px-6 md:px-14">Motion Design & Others</span>
                  </Tab>
               </TabList>
               <TabPanels>
                  <TabPanel className="grid md:grid-cols-2 gap-x-8 gap-y-12 lg:w-10/12 mx-auto">
                     {SELECTED_WORKS.product.map((_work) => (
                        <WorkCard key={_work.title} work={_work} />
                     ))}
                  </TabPanel>
                  <TabPanel className="grid md:grid-cols-2 gap-x-8 gap-y-12 lg:w-10/12 mx-auto">
                     {SELECTED_WORKS.brand.map((_work) => (
                        <WorkCard key={_work.title} work={_work} />
                     ))}
                  </TabPanel>
                  <TabPanel className="grid md:grid-cols-2 gap-x-8 gap-y-12 lg:w-10/12 mx-auto">
                     {SELECTED_WORKS.motion.map((_work) => (
                        <WorkCard key={_work.title} work={_work} />
                     ))}
                  </TabPanel>
               </TabPanels>
            </Tabs>
         </div>
      </Container>
   );
};

const WorkCard = ({ work }: { work: { illustration: string; title: string; description: string; link: string } }) => {
   const isExternal = work.link.startsWith("http") ? true : false;
   return (
      <div className="relative">
         <img src={work.illustration} alt="" />
         <div className="absolute w-full grid items-center gap-y-5 gap-x-14 md:grid-flow-col bg-[#FEF404F2] bottom-8 px-3 md:px-5 py-5 md:py-8">
            <div className="grid gap-2">
               <p className="text-2xl font-medium">{work.title}</p>
               <p className="text-sm">{work.description}</p>
            </div>
            <LinkButton variant="black" to={work.link} isExternal={isExternal} target={isExternal ? "_blank" : ""}>
               <span className="underline underline-offset-[2px]">View more</span>
            </LinkButton>
         </div>
      </div>
   );
};

export { SelectedWorks, WorksHighlight };
