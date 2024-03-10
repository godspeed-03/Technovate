import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/Partner.json";
import "react-accessible-accordion/dist/fancy-example.css";
import "./hackinfo.css";
import Navbar from "../Components/Navbar";
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton, AccordionItemState, resetNextUuid} from 'react-accessible-accordion'

function Partner() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const openGoogleForm = () => {
    window.open("https://forms.gle/3Afa4ERR6wFeq6tH9", "_blank");
  };

  const isMobile = () => {
    return window.innerWidth < 375; // Adjust the threshold as needed
  };

  return (
    <>
      <div className="z-10 flex items-center justify-center">
        <Navbar />
      </div>
      <div className="flex items-center justify-center py-16 max-md:py-3">
        <div className="info rounded-xl relative bg-black max-lg:w-[90%] w-[60%] max-lg:p-8 p-14  flex gap-10 text-white">
          <div className="flex flex-col gap-10">
            <div className="content">
              <h1 className="pb-10 text-5xl font-bold text-center text-white max-md:text-3xl font-heading">
                Call for Community Partners
              </h1>
              <div className="flex flex-col gap-10">
                <div className="flex items-center justify-center gif">
                  <Lottie
                    options={defaultOptions}
                    height={isMobile() ? 150 : 300}
                    width={isMobile() ? 150 : 300}
                  />
                </div>
                <div className="flex flex-col gap-5 content ">
                  <p className="font-light font-content max-md:text-sm ">
                    We are reaching out to you with an exciting opportunity to
                    collaborate and make a difference in our community. As
                    organizers of Technovate , we are gearing up for an event
                    that promises to be both innovative and impactful, and we
                    believe your partnership could be instrumental in its
                    success.
                  </p>
                  <p className="font-light font-content max-md:text-sm ">
                    <strong className="text-xl font-bold font-heading">
                      Access to Talent :
                    </strong>{" "}
                    Engage with a diverse pool of talent, including students,
                    professionals, and entrepreneurs, to identify potential
                    collaborators or future employees.
                  </p>
                  <p className="font-light font-content max-md:text-sm ">
                    <strong className="text-xl font-bold font-heading">
                      Showcase Expertise :
                    </strong>{" "}
                    Share your expertise through mentorship or workshops,
                    positioning your organization as a thought leader in your
                    field.
                  </p>

                  <p className="font-light font-content max-md:text-sm ">
                    <strong className="text-xl font-bold font-heading">
                      Brand Visibility :
                    </strong>{" "}
                    Gain prominent recognition throughout the hackathon,
                    enhancing your brand's reputation and demonstrating your
                    commitment to innovation and community development.
                  </p>
                  <p className="font-light font-content max-md:text-sm ">
                    <strong className="text-xl font-bold font-heading">
                      Networking Opportunities :
                    </strong>{" "}
                    Connect with like-minded individuals, potential partners,
                    and industry experts, fostering valuable collaborations and
                    business opportunities.
                  </p>

                  <p className="font-light font-content max-md:text-sm max-md:text-center ">
                    We believe your involvement will enrich the hackathon
                    experience and help us achieve our shared goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 faq">
              <h1 className="text-2xl font-anta">FAQ</h1>
              <Accordion>
                <AccordionItem>
                  <AccordionItemHeading className="font-normal font-heading max-md:text-sm max-lg:text-center">
                    <AccordionItemButton>
                      Will travel allowances be provided?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="font-light font-content max-md:text-sm max-lg:text-center">
                      We truly appreciate your interest in joining our
                      community-driven event! However, we regret to inform you
                      that, given our community-driven nature, we won't be able to
                      offer travel allowances
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading className="font-normal font-heading max-md:text-sm max-lg:text-center">
                    <AccordionItemButton>
                      What about accommodation?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="font-light font-content max-md:text-sm max-lg:text-center">
                      Since Technovate is going to be a 24 hour hackathon, the
                      Partner will be present at the final rounds of the hackathon,
                      we won’t be providing accommodation for the same.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading className="font-normal font-heading max-md:text-sm max-lg:text-center">
                    <AccordionItemButton>What about food?</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="font-light font-content max-md:text-sm max-lg:text-center">
                      Yes, we've got your meals covered. You'll be with us for the
                      full 24 hours, so food will be on us.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading className="font-normal font-heading max-md:text-sm max-lg:text-center">
                    <AccordionItemButton>
                      Will Partner receive compensation for their judging and
                      guidance?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="font-light font-content max-md:text-sm max-lg:text-center">
                      Our initiative is driven by the spirit of community and
                      volunteerism. We're looking for individuals who are
                      enthusiastic about contributing to this event voluntarily.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="flex flex-col gap-5 contact">
              <p className="font-light font-content max-md:text-sm max-lg:text-center">
                Feel free to reach out us at{" "}
                <strong className="font-semibold">dsc.uiet.pu@gmail.com</strong>{" "}
                if you have any more questions or need further information.
                We're excited to have you be a part of our event!
              </p>
              <div className="flex items-center justify-center ">
                <button
                  className="px-3 py-2 text-white bg-purple-900 rounded-md font-miami "
                  onClick={openGoogleForm}
                >
                  Become a Partner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partner;
