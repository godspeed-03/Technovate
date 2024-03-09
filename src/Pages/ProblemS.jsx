import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/ProblemS.json";
import "./hackinfo.css";
import { useNavigate } from "react-router-dom";

function ProblemS() {
  const navigate = useNavigate()
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="z-10 flex items-center justify-center w-screen py-16">
      <div className="rounded-xl  max-lg:w-[90%] w-[60%] max-lg:p-8 p-14 border-2 border-white text-white">
        <h1 className="pb-5 text-5xl font-bold text-center text-white max-md:text-3xl font-heading">
          Problem Statement
        </h1>
        <div className="flex flex-row items-center justify-center gap-10 max-lg:flex-col-reverse">
          <div className="flex flex-col items-start justify-center gap-10 content">
            <p className="pt-3 text-xl font-bold text-center font-heading max-md:text-lg max-md:font-semibold">
              Will be revealed on 12th March...
            </p>
            <span onClick={() => {navigate('/register')}} className="relative">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded "></span>
                    <span className="fold-bold font-heading relative inline-block h-full w-full rounded border-2 border-blue-500  px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-[#6E1ED4]  hover:border-white dark:bg-transparent">
                      Register Now
                    </span>
                  </span>
          </div>
          <div className="flex items-center justify-center gif">
            <Lottie
              options={defaultOptions}
              height={300} // Adjust height as needed
              width={300} // Adjust width as needed
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemS;
