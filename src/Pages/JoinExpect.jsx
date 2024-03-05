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
    return window.innerWidth < 600; // Adjust the threshold as needed
  };

  console.log(isMobile())


  return (
    <div className="z-10 w-screen flex justify-center items-center py-16">
        
      <div className="info rounded-xl relative bg-black max-lg:w-[80%] w-[60%] max-lg:p-8 p-14  flex gap-10 text-white">
      
<div className="flex max-lg:flex-col flex-row gap-10">
  <div className="whyjoin border-2 border-white p-5 rounded-md">
  <h1 className="max-md:text-xl text-3xl text-center text-white pb-5 font-heading font-bold">Why Join Us</h1>
  <div className="flex flex-col gap-5">
  <div className="gif flex  items-center justify-center">
  <Lottie
      options={defaultjoin}
      height={isMobile() ? 150 : 300}
      width={isMobile() ? 150 : 300}
    />
        </div>
<div className="content  flex items-start justify-center gap-10">
            <p className="font-content font-light max-md:text-sm max-lg:text-center">
            Join us to broaden your horizons, sharpen your skills, and make lifelong connections with like-minded individuals. Whether you're a seasoned coder or just getting started, the D4 Community's Hackathon at CGC Jhanjeri is the place to be.


            </p>

        </div>

</div>

  </div>
  <div className="expect   border-2 border-white p-5 rounded-md">
  <h1 className="max-md:text-xl text-3xl text-center text-white pb-5 font-heading font-bold">What to Expect</h1>
  <div className="flex flex-col gap-5">
  <div className="gif flex  items-center justify-center">
  <Lottie
      options={defaultexpect}
      height={isMobile() ? 150 : 300}
      width={isMobile() ? 150 : 300}
    />
        </div>
<div className="content  flex items-start justify-center">
            <p className="font-content font-light max-md:text-sm max-lg:text-center ">
            Expect an adrenaline-fueled 24 hours of non-stop coding, brainstorming, and networking. Participants will tackle exciting challenges, engage in workshops, and have the opportunity to win fantastic prizes worth 20k.
            </p>

        </div>

</div>

  </div>

</div>
      </div>
    </div>
  );
}

export default JoinExpect;
