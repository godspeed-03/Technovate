import Navbar from "./Navbar";

import Frame from "../assets/Frame 2.svg";
import banner from "../assets/banner.png";

const Herobanner = () => {
  return (
    <>
      <Navbar text={"white"} />
      <div
        className="max-md:w-[100%] max-lg:px-3 w-[50%] z-10 h-screen bg-center bg-cover flex flex-col items-center  justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="flex justify-center items-center">
          <img src={Frame} alt="" />
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
