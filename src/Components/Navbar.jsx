import React from "react";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate= useNavigate()
  const [mobile, setMobile] = useState(false);

  const handleclick =(url) => {
setMobile(false);
console.log()
navigate(`/${url}`)
  }

  const openmobile = () => {
    setMobile(true);
  };
  return (
    <>
      <div
        className={`Navbar z-20 lg:w-[50%] w-[80%] flex items-center justify-center rounded-full py-5 mt-3 bg-white/30 backdrop-filter backdrop-blur-sm
    ${mobile ?"" : ""}`}
      >
        <nav>
          <ul
            className={`flex gap-3 md:flex text-white cursor-pointer  items-start   ${
              mobile
                ? " bg-white/30 py-3 backdrop-filter backdrop-blur-sm rounded-3xl pl-10 visible flex-col top-[70px]  absolute left-0 w-full "
                : "max-md:hidden"
            } `}
          >
            <li onClick={() => {handleclick('')}}>HOME</li>
            <li onClick={() => {handleclick('/')}}>REGISTER</li>
            <li onClick={() => {handleclick('/')}}>JUDGES</li>
            <li onClick={() => {handleclick('/')}}>MENTOR</li>
            {/* <li onClick={() => {handleclick('/')}}>SPONSERS</li> */}
            <li onClick={() => {handleclick('/')}}>PARTNERS</li>
            {/* <li onClick={() => {handleclick('/')}}></li> */}
          </ul>
        </nav>
        <div className="md:hidden">
          {mobile ? (
            <span className="" onClick={() => setMobile(false)}>
              <IoIosCloseCircleOutline size={25} />
            </span>
          ) : (
            <span className="" onClick={() => openmobile()}>
              <GiHamburgerMenu size={25} />
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
