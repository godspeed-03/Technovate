import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/Register.json";
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

  const openGoogleForm = () => {
    window.open("https://forms.gle/BN8xFmovTXo49zRD7", "_blank");
  };

  const isMobile = () => {
    return window.innerWidth < 375; // Adjust the threshold as needed
  };

  return (
    <>
      <div className="flex z-10 items-center justify-center">
        <Navbar />
      </div>
      <div className=" flex justify-center items-center max-md:py-3 py-16">
        <div className="info rounded-xl relative bg-black max-lg:w-[90%] w-[60%] max-lg:p-8 p-14  flex gap-10 text-white">
<div className="flex flex-col gap-10">
<div className="content">
<h1 className="max-md:text-3xl text-5xl text-center text-white pb-10 font-heading font-bold">Register</h1>
<div className="flex flex-col gap-10">
<div className="gif flex  items-center justify-center">
          <Lottie
            options={defaultOptions}
            height={isMobile() ? 150 : 300}
      width={isMobile() ? 150 : 300}
          />
        </div>
<div className="content flex flex-col gap-5 ">
<h1 className="font-heading font-bold max-md:text-lg max-md:font-semibold text-xl pt-3 text-center">Unleashing Heroic Innovation: The Avengers Hackathon for a Better World</h1>
        <p className="font-content font-light max-md:text-sm max-lg:text-center">Join us for an exhilarating 24-Hour Hackathon where teams will compete to develop innovative solutions in
            the realms of data science, machine learning, and blockchain. This is your chance to be part of a heroic
            endeavor to create a better world through technology!</p>
        <p className="font-content font-light max-md:text-sm ">The event will feature:</p>

        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div class="p-2  w-full">
        <div class=" rounded flex  h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="font-content font-normal max-md:text-sm ">Team of 3-4 members</span>
        </div>
    </div>
    <div class="p-2  w-full">
        <div class=" rounded flex  h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="font-content font-normal max-md:text-sm ">Intense coding challenges</span>
        </div>
    </div>
    <div class="p-2 w-full">
        <div class=" rounded flex h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="font-content font-normal max-md:text-sm ">Collaborative teamwork</span>
        </div>
    </div>
    <div class="p-2 w-full">
        <div class=" rounded flex h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="font-content font-normal max-md:text-sm ">Opportunities to network with industry professionals</span>
        </div>
    </div>
    <div class="p-2 w-full">
        <div class=" rounded flex h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="font-content font-normal max-md:text-sm ">Exciting prizes for winning teams</span>
        </div>
    </div>
</div>
        <p className="font-heading font-bold max-md:text-lg max-md:font-semibold text-xl pt-3">Registration fee: Rs. 400 / Team</p>

        </div>

</div>
</div>
{/* <div className="faq flex flex-col gap-5">
<h1 className="font-anta text-2xl">FAQ</h1>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading className="font-heading font-normal max-md:text-sm max-lg:text-center">
                  <AccordionItemButton>
                    Will travel allowances be provided?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="font-content font-light max-md:text-sm max-lg:text-center">
                    We truly appreciate your interest in joining our
                    community-driven event! However, we regret to inform you
                    that, given our community-driven nature, we won't be able to
                    offer travel allowances
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading className="font-heading font-normal max-md:text-sm max-lg:text-center">
                  <AccordionItemButton>
                    What about accommodation?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="font-content font-light max-md:text-sm max-lg:text-center">
                    Since Technovate is going to be a 24 hour hackathon, the
                    Register will be present at the final rounds of the hackathon,
                    we won’t be providing accommodation for the same.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading className="font-heading font-normal max-md:text-sm max-lg:text-center">
                  <AccordionItemButton>What about food?</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="font-content font-light max-md:text-sm max-lg:text-center">
                    Yes, we've got your meals covered. You'll be with us for the
                    full 24 hours, so food will be on us.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading className="font-heading font-normal max-md:text-sm max-lg:text-center">
                  <AccordionItemButton>
                    Will Register receive compensation for their judging and
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
</div> */}
            <div className="contact flex flex-col gap-5">
            <p className="font-content font-light max-md:text-sm max-lg:text-center">
            Feel free to reach out us at <strong className="font-semibold"> dsc.uiet.pu@gmail.com </strong> if you have any
            more questions or need further information. We're excited to have
            you be a part of our event!
            </p>
            <div className="   flex items-center justify-center">
              <button
                className="text-white bg-purple-900 rounded-md px-3 py-2 font-miami "
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
