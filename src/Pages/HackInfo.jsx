import React from 'react'
import './hackinfo.css'
import { Tilt } from "react-tilt";
import Lottie from 'react-lottie';
import animationData from '../assets/Animation - 1709495053289.json';
// import WordCloud2 from './WordCloud'

function HackInfo() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <>
    <Tilt
          className="Tilt bg-black"
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
    <div className="z-10 flex justify-center items-center py-16">
    <div className="info rounded-xl relative bg-black p-14 w-[60%] h-auto  flex gap-10 text-white">
    <div className="gif flex w-1/3 items-center justify-center">
          <Lottie
            options={defaultOptions}
            height={300} // Adjust height as needed
            width={300} // Adjust width as needed
          />
        </div>
        <div className="content w-2/3 flex flex-col items-start justify-center gap-10">
          <h1>Hackethon nameeeee</h1>
          <p>Dive into an immersive experience where your ideas hold the power to shape the future. Our inclusive hackathon invites developers, innovators, and thinkers from diverse backgrounds to come together for an exhilarating challenge. At Technovate,we are calling for solutions that are sustainable, innovative, and have the potential to redefine our world. Join us in this journey of creation, collaboration, and celebration.</p>
        </div>
      </div>
    </div>
    </Tilt>
    </>
  )
}

export default HackInfo