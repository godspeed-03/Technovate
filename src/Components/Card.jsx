import React from 'react'
import animationData from "../assets/Infoanimation.json";
import locationanimation from "../assets/locat.json";
import { Tilt } from "react-tilt";
import Lottie from "react-lottie";

const Card = ({title, problem}) => {

  const defaultOptionsimg = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionslocation = {
    loop: true,
    autoplay: true,
    animationData: locationanimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="z-10 flex items-center justify-center py-16">
        <Tilt
          className="flex items-center justify-center Tilt"
          style={{
            transformStyle: "preserve-3d",
          }}
          options={{
            max: 30,
            perspective: 1400,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            speed: 2000,
            glare: true,
            maxGlare: 0.2,
            scale: 1,
          }}
        >
          <div className="info rounded-xl relative bg-black max-lg:w-[90%] w-[60%] max-lg:p-8 p-14 ">
            <h1 className="pb-5 text-5xl font-bold text-center text-white max-md:text-3xl font-heading">
              {title}
            </h1>
            <div className="flex flex-row gap-10 text-white max-lg:flex-col">
              <div className="flex items-center justify-center gif">
                <Lottie
                  options={defaultOptionsimg}
                  height={300} // Adjust height as needed
                  width={300} // Adjust width as needed
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-10 content max-lg:items-center">
                {problem}
                <div className="flex items-center justify-center gap-5 location">
                  <a
                    href="https://maps.app.goo.gl/duEYT9VECn531GSt6"
                    target="_blank"
                  >
                    <Lottie
                      options={defaultOptionslocation}
                      height={80} // Adjust height as needed
                      width={80} // Adjust width as needed
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </>
  )
}

export default Card