import Navbar from "./Navbar";

import Frame from "../assets/Frame 2.svg";
import banner from "../assets/banner.png";

const Herobanner = () => {
  return (
    <>
      <Navbar />
      <div
        className="max-md:w-[100%] md:mt-14 mt-1 max-lg:px-3 w-[50%] z-10 h-screen bg-center bg-cover flex flex-col items-center  justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="flex flex-col gap-3 justify-center items-center">
          <img src={Frame} alt="" />
          <a  href="https://forms.gle/BN8xFmovTXo49zRD7" target="_blank"  className="relative">
                    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full  rounded bg-blue-500"></span>
                    <span className="fold-bold font-heading  relative inline-block h-full w-full rounded border-2 border-white bg-blue-500 px-5 py-1 text-base font-bold text-black transition duration-100 hover:bg-white dark:bg-transparent">
Register                    </span>
                  </a>
        </div>
        {/* <h1 className='text-white text-center text-[5rem] font-bold'>
      TECHNOVATE24
    </h1>
    <h6 className='text-white text-center text-[2rem] font-light'>
    <i>The Technical Fest Of UIET</i>
    </h6>
    <p className='text-white text-center  font-medium'>
    13th March | UIET, Panjab University, Chandigarh
    </p> */}
      </div>
    </>
  );
};

export default Herobanner;
