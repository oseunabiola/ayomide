import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "../../shared/container";
import { GrayHeadingText } from "../../shared/text";

const FAQ_QUESTIONS = [
   { question: "What is your Design Process Like?", answer: "Answer" },
   {
      question: "How does your pricing work, Do you charge Hourly or  you negotiate based on the quantity of work?",
      answer: "Answer",
   },
   {
      question: "How are the timelines for your projects? - Flexible",
      answer: "Answer",
   },
   {
      question: "Are you open to taking in students for mentorship and trainings?",
      answer: "Answer",
   },
];

const FAQs = () => {
   const history = useHistory();
   return (
      <div className="min-h-[500px] md:min-h-[580px] flex items-center">
         <Container>
            <div className="grid gap-8 md:gap-12 my-10">
               <header className="text-[35px] md:text-[40px] text-center">
                  <h2>
                     <GrayHeadingText>Frequently </GrayHeadingText>
                     Asked Question (FAQs)
                  </h2>
               </header>
               <Accordion allowMultiple>
                  {FAQ_QUESTIONS.map((_q) => (
                     <AccordionItem key={_q.question}>
                        <AccordionButton
                           className="justify-between gap-x-2 py-3 lg:py-4 px-6 lg:px-8 text-left text-[#ACADB0]"
                           style={{ boxShadow: "2px 2px 8px 0px #FEF4040F" }}
                           onClick={() => history.push("about-me")}>
                           {_q.question} <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel className="py-3 lg:py-4 px-6 lg:px-8">{_q.answer}</AccordionPanel>
                     </AccordionItem>
                  ))}
               </Accordion>
            </div>
         </Container>
      </div>
   );
};

export { FAQs };
