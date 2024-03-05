import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/Judges.json";
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
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const openGoogleForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScrLUfkXG61kcObysVcAfnh_FzsI8qOB0zBvwPWv4qfWNhfxg/viewform",
      "_blank"
    );
  };

  const isMobile = () => {
    return window.innerWidth < 375; // Adjust the threshold as needed
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <Navbar />
      </div>
      <div className="z-10 flex justify-center items-center max-md:py-3 py-16">
        <div className="info rounded-xl relative bg-black max-lg:w-[90%] w-[60%] max-lg:p-8 p-14  flex gap-10 text-white">
          <div className="flex flex-col gap-10">
            <div className="content">
              <h1 className="max-md:text-3xl text-5xl text-center text-white pb-10 font-heading font-bold">
                CALL FOR JUDGES
              </h1>
              <div className="flex max-lg:flex-col flex-row gap-10">
                <div className="gif flex  items-center justify-center">
                  <Lottie
                    options={defaultOptions}
                    height={isMobile() ? 150 : 300}
                    width={isMobile() ? 150 : 300}
                  />
                </div>
                <div className="content  flex flex-col items-start justify-center gap-10">
                  <p className="font-content font-light max-md:text-sm max-lg:text-center">
                    Our judges are not just experts; they're visionaries who
                    evaluate the projects created by our brilliant participants.
                    They provide valuable feedback and play an essential role in
                    recognizing and celebrating exceptional contributions within
                    the hackathon. ​They're the ones who get a front-row seat to
                    the future of tech, analyzing solutions, and recognizing the
                    coding gems that emerge. ​So, if you're passionate about
                    coding ,sharing knowledge,and want to be part of a lively
                    community, think about becoming a judge at Technovate. ​It's
                    more than a role; it's an invitation to be at the forefront
                    of a community driven intiative to empower tomorrow's
                    builders.
                  </p>
                </div>
              </div>
            </div>
            <div className="faq flex flex-col gap-5">
              <h1 className="font-miami text-2xl">FAQ</h1>
              <Accordion>
                <AccordionItem>
                  <AccordionItemHeading className="font-heading font-medium max-md:text-sm max-lg:text-center">
                    <AccordionItemButton>
                      Will travel allowances be provided?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="font-content font-light max-md:text-sm max-lg:text-center">
                      We truly appreciate your interest in joining our
                      community-driven event! However, we regret to inform you
                      that, given our community-driven nature, we won't be able
                      to offer travel allowances
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading className="font-heading font-medium max-md:text-sm max-lg:text-center">
                    <AccordionItemButton>
                      What about accommodation?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="font-content font-light max-md:text-sm max-lg:text-center">
                      Since Technovate is going to be a 24 hour hackathon, the
                      Judges will be present at the final rounds of the
                      hackathon, we won’t be providing accommodation for the
                      same.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading className="font-heading font-medium max-md:text-sm max-lg:text-center">
                    <AccordionItemButton>What about food?</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="font-content font-light max-md:text-sm max-lg:text-center">
                      Yes, we've got your meals covered. You'll be with us for
                      the full 24 hours, so food will be on us.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading className="font-heading font-medium max-md:text-sm max-lg:text-center">
                    <AccordionItemButton>
                      Will judges receive compensation for their judging and
                      guidance?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="font-content font-light max-md:text-sm max-lg:text-center">
                      ​Our initiative is driven by the spirit of community and
                      volunteerism. We're looking for individuals who are
                      enthusiastic about contributing to this event voluntarily.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="contact flex flex-col gap-5">
              <p className="font-content font-light max-md:text-sm max-lg:text-center">
                Feel free to reach out us at{" "}
                <strong className="font-semibold">
                  {" "}
                  dsc.uiet.pu@gmail.com{" "}
                </strong>{" "}
                if you have any more questions or need further information.
                We're excited to have you be a part of our event!
              </p>
              <div className="   flex items-center justify-center">
                <button
                  className="text-white bg-purple-900 rounded-md px-3 py-2  font-miami "
                  onClick={openGoogleForm}
                >
                  Click to Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Judges;
