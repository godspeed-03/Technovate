import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/Theme.json"; // Import your JSON animation file

function Theme() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="z-10 w-screen flex justify-center items-center py-16">
      <div className=" rounded-xl relative border-2 border-white max-lg:p-8 p-14 w-[60%] max-lg:w-[90%] h-auto text-white">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="max-md:text-3xl text-5xl text-center text-white pb-5 font-heading font-bold">
            Theme
          </h1>
          <p className="font-heading font-bold max-md:text-lg max-md:font-semibold text-xl pt-3 text-center">
            Unleashing Heroic Innovation: The Avengers Hackathon for a Better
            World
          </p>
          <div className="flex -mt-8">
            <div className=" flex max-lg:flex-col flex-row gap-10">
              <div className="Technical flex flex-col items-center justify-center gap-5 pt-10">
                <h1 className="max-md:text-xl text-3xl text-center text-white pb-5 font-heading font-bold">
                  Tech used
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-6 max-md:flex-col">
                  <span className="relative" href="">
                    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-[#6E1ED4]"></span>
                    <span className="fold-bold font-heading relative inline-block h-full w-full rounded border-2 border-white bg-white px-3 py-1 text-base font-bold text-black transition duration-10 hover:bg-blue-500 dark:bg-transparent">
                      Blockchain
                    </span>
                  </span>
                  <span href="" className="relative">
                    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-blue-500"></span>
                    <span className="fold-bold font-heading relative inline-block h-full w-full rounded border-2 border-white bg-blue-500 px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-white dark:bg-transparent">
                      Machine Learning
                    </span>
                  </span>
                  <span href="" className="relative">
                    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-[#B45AA1]"></span>
                    <span className="fold-bold font-heading relative inline-block h-full w-full rounded border-2 border-white bg-blue-500 px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-blue-500 dark:bg-transparent">
                      Web Development
                    </span>
                  </span>
                </div>
              </div>
              <div className="">
                <Lottie
                  options={defaultOptions}
                  height={300} // Adjust height as needed
                  width={300} // Adjust width as needed
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theme;
