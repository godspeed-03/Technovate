import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/Register.json";
import limitedOfferData from "../assets/limitedTime.json";
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

function Register() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const limitedTimeOptions = {
    loop: true,
    autoplay: true,
    animationData: limitedOfferData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const openGoogleForm = () => {
    window.open("https://forms.gle/BN8xFmovTXo49zRD7", "_blank");
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
                Register
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
                  <h1 className="pt-3 text-xl font-bold text-center font-heading max-md:text-lg max-md:font-semibold">
                    Unleashing Heroic Innovation: The Avengers Hackathon for a
                    Better World
                  </h1>
                  <p className="font-light font-content max-md:text-sm max-lg:text-center">
                    Join us for an exhilarating 24-Hour Hackathon where teams
                    will compete to develop innovative solutions in the realms
                    of data science, machine learning, and blockchain. This is
                    your chance to be part of a heroic endeavor to create a
                    better world through technology!
                  </p>
                  <p className="font-light font-content max-md:text-sm ">
                    The event will feature:
                  </p>

                  <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    <div class="p-2  w-full">
                      <div class=" rounded flex  h-full items-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span class="font-content font-normal max-md:text-sm ">
                          Team of 2-4 members
                        </span>
                      </div>
                    </div>
                    <div class="p-2  w-full">
                      <div class=" rounded flex  h-full items-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span class="font-content font-normal max-md:text-sm ">
                          Intense coding challenges
                        </span>
                      </div>
                    </div>
                    <div class="p-2 w-full">
                      <div class=" rounded flex h-full items-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span class="font-content font-normal max-md:text-sm ">
                          Collaborative teamwork
                        </span>
                      </div>
                    </div>
                    <div class="p-2 w-full">
                      <div class=" rounded flex h-full items-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span class="font-content font-normal max-md:text-sm ">
                          Opportunities to network with industry professionals
                        </span>
                      </div>
                    </div>
                    <div class="p-2 w-full">
                      <div class=" rounded flex h-full items-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span class="font-content font-normal max-md:text-sm ">
                          Exciting prizes for winning teams
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <p className="pt-3 text-xl font-bold font-heading max-md:text-lg max-md:font-semibold">
                      Registration fee: Rs. <strike>400</strike> 200 / Team
                    </p>
                    <div className="absolute lg:top-0 lg:left-[calc(50%-40px)] top-10 left-12">
                      <Lottie
                        options={limitedTimeOptions}
                        height={isMobile() ? 35 : 45}
                        width={isMobile() ? 30 : 40}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col gap-5 faq">
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
                    Register will be present at the final rounds of the hackathon,
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
                    Will Register receive compensation for their judging and
                    guidance?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="font-light font-content max-md:text-sm max-lg:text-center">
                    ​Our initiative is driven by the spirit of community and
                    volunteerism. We're looking for individuals who are
                    enthusiastic about contributing to this event voluntarily.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
</div> */}
            <div className="flex flex-col gap-5 contact">
              <p className="font-light font-content max-md:text-sm max-lg:text-center">
                Feel free to reach out us at{" "}
                <strong className="font-semibold">
                  {" "}
                  dsc.uiet.pu@gmail.com{" "}
                </strong>{" "}
                if you have any more questions or need further information.
                We're excited to have you be a part of our event!
              </p>
              <div className="flex items-center justify-center ">
                <button
                  className="px-3 py-2 text-white bg-purple-900 rounded-md font-miami "
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

export default Register;
