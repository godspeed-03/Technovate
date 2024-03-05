import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./hackinfo.css";
import Navbar from "../Components/Navbar";

function Judges() {

  return (
    <>
      <div className="flex items-center justify-center">
        <Navbar />
      </div>
      <div className="z-10 flex justify-center items-center py-16">
        <div className="info rounded-xl relative bg-black w-[60%] h-auto p-14  flex gap-10 text-white">
          <div className="content flex flex-col items-start justify-center gap-10">
            <h1 className="font-anta text-2xl">CALL FOR JUDGES</h1>
            <div className="location flex items-center justify-center gap-5">
              At Technovate, our judges are the heart and soul of our Technovate
              family! ​Our judges are not just experts; they're visionaries who
              evaluate the projects created by our brilliant participants. They
              provide valuable feedback and play an essential role in
              recognizing and celebrating exceptional contributions within the
              hackathon. ​They're the ones who get a front-row seat to the
              future of tech, analyzing solutions, and recognizing the coding
              gems that emerge. ​So, if you're passionate about coding ,sharing
              knowledge,and want to be part of a lively community, think about
              becoming a judge at Technovate. ​It's more than a role; it's an
              invitation to be at the forefront of a community driven intiative
              to empower tomorrow's builders.
            </div>
            <h1 className="font-anta text-2xl">FAQ</h1>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Will travel allowances be provided?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    We truly appreciate your interest in joining our
                    community-driven event! However, we regret to inform you
                    that, given our community-driven nature, we won't be able to
                    offer travel allowances
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What about accommodation?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Since Technovate is going to be a 24 hour hackathon, the
                    Judges will be present at the final rounds of the hackathon,
                    we won’t be providing accommodation for the same.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>What about food?</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, we've got your meals covered. You'll be with us for the
                    full 24 hours, so food will be on us.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Will judges receive compensation for their judging and
                    guidance?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    ​Our initiative is driven by the spirit of community and
                    volunteerism. We're looking for individuals who are
                    enthusiastic about contributing to this event voluntarily.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
            Feel free to reach out us at dsc.uiet.pu@gmail.com if you have any
            more questions or need further information. We're excited to have
            you be a part of our event!
            <div className=" bg-purple-900 rounded-md p-2  flex items-center justify-center">
              <button
                className="text-white bg-color-purple "
                // onClick={}
              >
                Click to register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Judges;
