import React from "react";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Navbar = ({colortype}) => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false);

  const handleclick = (url) => {
    setMobile(false);
    navigate(`/${url}`);
  };
  const openGoogleForm = () => {
    window.open("https://forms.gle/BN8xFmovTXo49zRD7", "_blank");
  };

  const openmobile = () => {
    setMobile(true);
  };
  return (
    <>
      <div
        className={`Navbar lg:w-[50%] w-[90%] flex items-baseline justify-end text-lg bg-transparent rounded-full py-5 mt-3 font-miami  bottom-2
    ${mobile ? " " : " "}`}
      >
        <nav>
          <ul
            className={`flex gap-3 md:flex text-${colortype ? 'balck' : 'white'} cursor-pointer  items-baseline justify-end   ${
              mobile
                ? " bg-black/30 py-3 backdrop-filter backdrop-blur-sm rounded-3xl pl-10 visible flex-col top-[70px]  absolute left-0 w-full mr-10"
                : "max-md:hidden pr-14"
            } `}
          >
            <li className="mr-10 text-lg hover:underlin " onClick={() => {handleclick('')}}>HOME</li>
            <li className="mr-10 text-lg hover:underline" onClick={openGoogleForm}>REGISTER</li>
            <li className="mr-10 text-lg hover:underline" onClick={() => {handleclick('judges')}}>JUDGES</li>
            <li className="mr-10 text-lg hover:underline" onClick={() => {handleclick('mentors')}}>MENTOR</li>
            {/* <li className="mr-10 text-lg hover:underline" onClick={() => {handleclick('/')}}>SPONSERS</li> */}
            <li  className="mr-10 text-lg hover:underline" onClick={() => {handleclick('/')}}>PARTNERS</li>
            
          </ul>
        </nav>
        <div className="md:hidden">
          {mobile ? (
            <span className="" onClick={() => setMobile(false)}>
              <IoIosCloseCircleOutline color="white" size={25} />
            </span>
          ) : (
            <span className="" onClick={() => openmobile()}>
              <GiHamburgerMenu color="white" size={25} />
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
