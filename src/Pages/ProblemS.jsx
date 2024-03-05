import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/ProblemS.json";
import "./hackinfo.css";

function ProblemS() {
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
      <div className="rounded-xl  max-lg:w-[90%] w-[60%] max-lg:p-8 p-14 border-2 border-white text-white">
        <h1 className="max-md:text-3xl text-5xl text-center text-white pb-5 font-heading font-bold">
          Problem Statement
        </h1>
        <div className="flex max-lg:flex-col-reverse flex-row items-center justify-center gap-10">
          <div className="content  flex flex-col items-start justify-center gap-10">
            <p className="font-heading font-bold max-md:text-lg max-md:font-semibold text-xl pt-3 text-center">
              Will be revealed on 10th March...
            </p>
          </div>
          <div className="gif flex  items-center justify-center">
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
