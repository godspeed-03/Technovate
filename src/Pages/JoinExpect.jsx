import React from "react";
import Lottie from "react-lottie";
import expectanimation from "../assets/expect.json";
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
    <div className="z-10 w-screen flex justify-center items-center py-16">
      <div className="rounded-xl  max-lg:w-[90%] w-[60%] max-lg:p-8 p-14 border-2 border-white text-white">
        <div className="flex max-lg:flex-col flex-row gap-10">
          <div className="whyjoin  lg:w-1/2 info relative bg-black  p-5 rounded-xl">

            <div className="flex flex-col gap-5">
              <div className="gif flex  items-center justify-center">
                <Lottie
                  options={defaultjoin}
                  height={isMobile() ? 150 : 300}
                  width={isMobile() ? 150 : 300}
                />
              </div>
              <h1 className="max-md:text-xl text-3xl text-center text-white pb-5 font-heading font-bold">
              Why Join Us
            </h1>
              <div className="content  flex items-start justify-center gap-10">
                <p className="font-content font-light max-md:text-sm max-lg:text-center">
                  Join us to broaden your horizons, sharpen your skills, and
                  make lifelong connections with like-minded individuals.
                  Whether you're a seasoned coder or just getting started, the
                  Google Developer Students Club 24-hours Hackathon at UIET
                  Chandigarh is the place to be.
                </p>
              </div>
            </div>
          </div>
          <div className="expect lg:w-1/2  info relative bg-black  p-5 rounded-xl">

            <div className="flex flex-col gap-5">
              <div className="gif flex  items-center justify-center">
                <Lottie
                  options={defaultexpect}
                  height={isMobile() ? 150 : 300}
                  width={isMobile() ? 150 : 300}
                />
              </div>

              <div className="content  flex flex-col gap-5">
<div className="flex flex-col border p-1 border-white rounded-md">
<h1 className="max-md:text-xl text-3xl text-center text-white pb-5 font-heading font-bold">
Prerequisite
            </h1>
                <div class="p-2  w-full">
                      <div class=" rounded flex  h-full ">
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
                        Registration fees : Rs. 400 / team
                        </span>
                      </div>
                    </div>
                    <div class="p-2  w-full">
                      <div class=" rounded flex  h-full ">
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
                    <div className="flex flex-col p-1 border-white border rounded-md">
                    <h1 className="max-md:text-xl text-3xl text-center text-white pb-5 font-heading font-bold">
                    What to Expect
            </h1>
                    <div class="p-2  w-full">
                      <div class=" rounded flex  h-full ">
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
                        Rewards : Prize pool 20k
                        </span>
                      </div>
                    </div>
                    <div class="p-2  w-full">
                      <div class=" rounded flex  h-full ">
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
