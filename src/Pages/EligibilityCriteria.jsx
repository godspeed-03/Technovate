import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/EligibilityCriteria.json";
import "./hackinfo.css";

function List({ text }) {
  return (
    <>
      <div className="w-[10%] flex items-center  justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="mr-2 h-auto w-6 text-indigo-500 sm:w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          ></path>
        </svg>
      </div>
      <div className="w-[90%]">
        <p className="font-content font-light max-md:text-sm py-2">{text}</p>
      </div>
    </>
  );
}

function EligibilityCriteria() {
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
      <div className="info rounded-xl relative bg-black max-lg:w-[90%] w-[60%] max-lg:p-8 p-14  text-white">
        <h1 className="max-md:text-3xl text-5xl text-center text-white pb-5 font-heading font-bold">
          Eligibility Criteria
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
            <ul className="mt-3 flex flex-col space-y-2">
              <li className="flex gap-3">
                <List
                  text={
                    "Hackathon is open to all Indian science, technology and engineering students pursuing undergraduate degrees."
                  }
                />
              </li>
              <li className="flex gap-3">
                <List
                  text={
                    "All team members must be enrolled in any academic course."
                  }
                />
              </li>
              <li className="flex gap-3">
                <List
                  text={"Team members can be from different academic years."}
                />
              </li>
              <li className="flex gap-3">
                <List
                  text={
                    "Team members could be from any of the technology streams."
                  }
                />
              </li>
              <li className="flex gap-3">
                <List
                  text={
                    "Once teams have registered, changes in team members will not be encouraged."
                  }
                />
              </li>
              <li className="flex gap-3">
                <List
                  text={"The participants must form a team of 2-4 students."}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EligibilityCriteria;
