import React from 'react'
import { Tilt } from 'react-tilt'
import Navbar from '../Components/Navbar'
import sponsor1 from '../assets/sponsor-1.jpg'
import sponsor2 from '../assets/sponsor-2.jpg'
import sponsor3 from '../assets/sponsor-3.jpg'
import sponsor4 from '../assets/sponsor-4.jpg'
import sponsor5 from '../assets/sponsor-5.jpg'

const Sponsors = () => {
    return (
        <div className='relative w-screen h-screen'>
            <div className='absolute flex flex-col items-center justify-center w-screen h-auto '>
                <Navbar />
                <div className='z-10 flex items-center justify-center py-16 mt-20'>
                    <Tilt
                        className="flex items-center justify-center Tilt"
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
                        <div className="info rounded-xl relative bg-black max-lg:w-[90%] w-[60%] max-lg:p-8 p-14 ">
                            <h1 className="pb-5 text-5xl font-bold text-center text-white max-md:text-3xl font-heading">
                                Our Sponsors
                            </h1>
                            <div className="flex flex-row gap-10 text-white max-lg:flex-col">
                                <div className="flex items-center justify-center gif">
                                    {/* <Lottie
                                        options={defaultOptionsimg}
                                        height={300} // Adjust height as needed
                                        width={300} // Adjust width as needed
                                    /> */}
                                </div>
                                <div className="flex flex-col items-start justify-center gap-10 content max-lg:items-center">
                                    <div className="grid grid-cols-12 grid-rows-1 p-6 gap-x-3">
                                        <a target='_blank' href="https://www.instagram.com/octanefitness09?igsh=MXRrYnZ4OTNwN2hkag" className='col-span-3'><img src={sponsor1} alt="" className='rounded-md' loading='lazy' /></a>
                                        <div className='flex flex-col items-center col-span-3 justify-evenly'>
                                            <a target='_blank' href="https://www.instagram.com/icphub_uiet/"><img src={sponsor2} alt="" className='rounded-t' loading='lazy' /></a>
                                            <img src={sponsor5} alt="" loading='lazy'  />
                                            <a target='_blank' href="https://www.instagram.com/icphub_uiet/"><img src={sponsor2} alt="" className='rounded-b' loading='lazy' /></a>
                                        </div>
                                        <a target='_blank' href="https://www.instagram.com/coding.ninjas?igsh=MXFyMHU5eHJmNjd1NQ==" className='col-span-3'><img src={sponsor3} alt="" className='rounded-md' loading='lazy' /></a>
                                        <a target='_blank' href="https://install.spilz.in/d8Uu/7xzvgf55" className='col-span-3'><img src={sponsor4} alt="" className='rounded-md' loading='lazy' /></a>
                                    </div>
                                    {/* <div className="flex items-center justify-center gap-5 location">
                                        <a
                                            href="https://maps.app.goo.gl/duEYT9VECn531GSt6"
                                            target="_blank"
                                        >
                                            <Lottie
                                                options={defaultOptionslocation}
                                                height={80} // Adjust height as needed
                                                width={80} // Adjust width as needed
                                            />
                                        </a>
                                        <a
                                            className="pt-5"
                                            href="https://maps.app.goo.gl/duEYT9VECn531GSt6"
                                            target="_blank"
                                        >
                                            <span className="text-center max-md:text-sm">
                                                UIET, Panjab University, Chandigarh
                                            </span>
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </Tilt>
                </div>
            </div>
        </div>
    )
}

export default Sponsors