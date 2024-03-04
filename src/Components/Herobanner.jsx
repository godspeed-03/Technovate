import Navbar from "./Navbar";

import Frame from '../assets/Frame 2.png'
import banner from '../assets/banner.png'

const Herobanner = () => {

  return <>



  <Navbar/>
  <div className=" lg:w-[40vw] w-[70vw] z-10 h-screen bg-center bg-cover flex flex-col items-center  justify-center" style={{ backgroundImage: `url(${banner})` }}>    
    <div className='flex justify-center items-center'>
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




  </>;
};

export default Herobanner
