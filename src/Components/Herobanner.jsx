import banner from '../assets/banner.png'

const Herobanner = () => {

  return <>


  <div className=" w-[40vw] h-screen bg-center bg-cover flex flex-col items-center justify-center" style={{ backgroundImage: `url(${banner})` }}>
    <h1 className='text-white text-center text-[5rem] font-bold'>
      TECHNOVATE24
    </h1>
    <h6 className='text-white text-center text-[2rem] font-light'>
    <i>The Technical Fest Of UIET</i>
    </h6>
    <p className='text-white text-center  font-medium'>
    13th March | UIET, Panjab University, Chandigarh
    </p>
  </div>




  </>;
};

export default Herobanner
