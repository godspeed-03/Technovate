import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/Mission.json";
import "./hackinfo.css";

function Mission() {
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
      <div className="info rounded-xl relative bg-black max-lg:w-[90%] w-[60%] max-lg:p-8 p-14 gap-10 text-white">
        <h1 className="max-md:text-3xl text-5xl text-center text-white pb-5 font-heading font-bold">
          Our Mission
        </h1>
        <div className="flex max-lg:flex-col flex-row gap-10">
          <div className="gif flex  items-center justify-center">
            <Lottie
              options={defaultOptions}
              height={300} // Adjust height as needed
              width={300} // Adjust width as needed
            />
          </div>
          <div className="content  flex flex-col items-start justify-center gap-10">
            <p className="font-content font-light max-md:text-sm max-lg:text-center">
              Our mission is simple yet profound: to challenge participants to
              harness their creativity, coding skills, and teamwork to solve
              real-world problems. We believe in the transformative power of
              collaboration and coding, and we aim to inspire the next
              generation of tech leaders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
