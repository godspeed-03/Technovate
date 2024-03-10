import Navbar from "./Navbar";

import Frame from "../assets/Frame 2.svg";
import banner from "../assets/banner.png";
import { useNavigate } from "react-router-dom";

const Herobanner = () => {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <div
        className="max-md:w-[100%] md:mt-14 mt-1 max-lg:px-3 w-[50%] z-10 h-screen bg-center bg-cover flex flex-col items-center  justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={Frame} alt="" />
          <span  className="relative" onClick={() => {navigate('/register')}}>
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-500 rounded"></span>
                    <span className="relative inline-block w-full h-full px-5 py-1 text-base font-bold text-black transition duration-100 bg-blue-500 border-2 border-white rounded fold-bold font-heading md:px-10 hover:bg-white dark:bg-transparent">Register</span>
                  </span>
        </div>
        {/* <h1 className='text-white text-center text-[5rem] font-bold'>
      TECHNOVATE24
    </h1>
    <h6 className='text-white text-center text-[2rem] font-light'>
    <i>The Technical Fest Of UIET</i>
    </h6>
    <p className='font-medium text-center text-white'>
    13th March | UIET, Panjab University, Chandigarh
    </p> */}
      </div>
    </>
  );
};

export default Herobanner;
