import React from "react";
import Lottie from "react-lottie";
import expectanimation from "../assets/expect.json";
import limitedOfferData from "../assets/limitedTime.json";
import JoinUsanimation from "../assets/JoinUs.json";
import "./hackinfo.css";

function JoinExpect() {
  const defaultjoin = {
    loop: true,
    autoplay: true,
    animationData: JoinUsanimation,
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

  const defaultexpect = {
    loop: true,
    autoplay: true,
    animationData: expectanimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const isMobile = () => {
    return window.innerWidth < 400; // Adjust the threshold as needed
  };

  return (
    <div className="z-10 flex items-center justify-center w-screen py-16">
      <div className="rounded-xl  max-lg:w-[90%] w-[60%] max-lg:p-8 p-14 border-2 border-white text-white">
        <div className="flex flex-row gap-10 max-lg:flex-col">
          <div className="relative p-5 bg-black whyjoin lg:w-1/2 info rounded-xl">

            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-center gif">
                <Lottie
                  options={defaultjoin}
                  height={isMobile() ? 150 : 300}
                  width={isMobile() ? 150 : 300}
                />
              </div>
              <h1 className="pb-5 text-3xl font-bold text-center text-white max-md:text-xl font-heading">
                Why Join Us
              </h1>
              <div className="flex items-start justify-center gap-10 content">
                <p className="font-light font-content max-md:text-sm max-lg:text-center">
                  Join us to broaden your horizons, sharpen your skills, and
                  make lifelong connections with like-minded individuals.
                  Whether you're a seasoned coder or just getting started, the
                  Google Developer Students Club 24-hours Hackathon at UIET
                  Chandigarh is the place to be.
                </p>
              </div>
            </div>
          </div>
          <div className="relative p-5 bg-black expect lg:w-1/2 info rounded-xl">

            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-center gif">
                <Lottie
                  options={defaultexpect}
                  height={isMobile() ? 150 : 300}
                  width={isMobile() ? 150 : 300}
                />
              </div>

              <div className="flex flex-col gap-5 content">
                <div className="flex flex-col p-1 border border-white rounded-md">
                  <h1 className="pb-5 text-3xl font-bold text-center text-white max-md:text-xl font-heading">
                    Prerequisite
                  </h1>
                  <div className="w-full p-2">
                    <div className="flex h-full rounded">
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
                      <span className="font-content max-md:text-sm">
                        Registration fee: Rs. <strike>400</strike> 200 / Team
                      </span>
                      <span>
                        <Lottie
                          options={limitedTimeOptions}
                          height={isMobile() ? 35 : 45}
                          width={isMobile() ? 30 : 40}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="w-full p-2">
                    <div className="flex h-full rounded ">
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
                      <span class="font-content  max-md:text-sm ">
                        Team of 2-4 members
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-1 border border-white rounded-md">
                  <h1 className="pb-5 text-3xl font-bold text-center text-white max-md:text-xl font-heading">
                    What to Expect
                  </h1>
                  <div className="w-full p-2">
                    <div className="flex h-full rounded ">
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
                      <span className="font-content max-md:text-sm ">
                        Rewards : Prize pool 15k
                      </span>
                    </div>
                  </div>
                  <div className="w-full p-2">
                    <div className="flex h-full rounded ">
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
                      <span class="font-content  max-md:text-sm ">
                        Paid Internship opportunities for the winners.
                      </span>
                    </div>
                  </div>
                  <div className="w-full p-2">
                    <div className="flex h-full rounded ">
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
                      <span class="font-content  max-md:text-sm ">
                        NOTE: Refreshments will not be provided, However you can purchase food coupons on the day of Hackathon
                      </span>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinExpect;
