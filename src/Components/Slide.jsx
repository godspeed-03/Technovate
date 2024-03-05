// import React from "react";
// import { Tilt } from "react-tilt";

// const Slide = ({ index, activeIndex, title, paragraph }) => {
//   const distance = index - activeIndex;
//   const stt = Math.abs(distance);
//   const transformValue = distance * 120;

//   // Determine opacity and blur values based on screen size
//   let opacity, blur;
//   if (window.innerWidth >= 1024) { // Desktop
//     opacity = stt <= 3 ? (distance === 0 ? 1 : Math.abs(0.5 / distance)) : 0;
//     blur = stt > 3 ? "blur(15px)" : "none";
//   } else if (window.innerWidth >= 768) { // Tablet
//     opacity = stt <= 2 ? (distance === 0 ? 1 : Math.abs(0.5 / distance)) : 0;
//     blur = stt > 2 ? "blur(15px)" : "none";
//   } else { // Mobile
//     opacity = stt <= 1 ? (distance === 0 ? 1 : Math.abs(0.5 / distance)) : 0;
//     blur = stt > 1 ? "blur(15px)" : "none";
//   }

//   return (
//     <div
//       className="absolute w-[300px] h-auto text-center bg-white rounded-xl p-5 transition duration-400 lg:left-[40%] transform -translate-x-1/2 top-0"
//       style={{
//         transform: `translateX(${transformValue}px) scale(${1 - 0.2 * stt}) rotateY(${distance > 0 ? -1 : 0}deg)`,
//         zIndex: distance === 0 ? 1 : -stt,
//         filter: blur,
//         opacity: opacity,
//       }}
//     >
//       {distance === 0 ? (
//         <Tilt
//           className="Tilt"
//           style={{
//             transformStyle: "preserve-3d",
//           }}
//           options={{
//             max: 30,
//             perspective: 1400,
//             easing: "cubic-bezier(.03,.98,.52,.99)",
//             speed: 2000,
//             glare: true,
//             maxGlare: 0.2,
//             scale: 1,
//           }}
//         >
//           <div className="w-full h-full rounded-xl px-5 py-2" style={{ boxShadow: '0 0 10px 15px lightblue' }}>
//             <h1>{title}</h1>
//             <p>{paragraph}</p>
//           </div>
//         </Tilt>
//       ) : (
//         <div>
//           <h1>{title}</h1>
//           <p>{paragraph}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Slide;




<div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4">
    <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="font-medium">Africa</span>
        </div>
    </div>
    <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="font-medium">Antarctica</span>
        </div>
    </div>
</div>