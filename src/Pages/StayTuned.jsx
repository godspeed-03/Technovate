import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/StayTuned.json";
import "./hackinfo.css";

function StayTuned() {
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
          Stay Tuned
        </h1>
        <div className="flex max-lg:flex-col-reverse flex-row gap-10">
          <div className="content  flex flex-col items-start justify-center gap-10">
            <p className="font-content font-light max-md:text-sm max-lg:text-center">
              Stay tuned for updates, registration details, and exciting
              announcements as we gear up for an unforgettable hackathon
              experience. Together, let's push the boundaries of innovation and
              make a positive impact on the world through technology.
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

export default StayTuned;
