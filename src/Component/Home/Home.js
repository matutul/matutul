import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { Link } from 'react-scroll';
import ProfilePic from '../../Assets/phofilepic.png';
const Home = () => {
    return (
        <div name="home" className='relative w-full h-screen grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center px-4 md:px-[10%] py-20 bg-pri text-textColor bg-primary'>
            <div className='col-span-1 w-[100px] h-[100px] md:w-[250px] md:h-[250px] rounded-full border-4 border-whtie md:-mt-10 overflow-hidden object-cover  mx-auto md:mr-0 mt-auto'>
                <img className="w-full h-full content-cover overflow-hidden scale-150" src={ProfilePic} alt="" />
            </div>
            <div className='col-span-2 text-left max-w-[1000px] md:ml-10 mt-0 mb-auto md:my-auto'>
                <p className='sm:text-xl'>Hello, My name is</p>
                <h1 className='text-4xl sm:text-5xl font-bold text-headingColor my-3'>Md Ashrafujjaman Tutul</h1>
                <h2 className='text-3xl sm:text-4xl font-medium'>I am a Full Stack Web Application Developer</h2>
                <p className='my-5 sm:text-xl max-w-[700px] text-textColor'>I am specialized in building exceptional and modern digital experiences together with motion and still graphics arts. Currently, I am more focused on building responsive full-stack web applications.</p>
                <div className="flex justify-start">
                    <Link to="work" smooth={true} duration={500} className="cursor-pointer">
                        <button className='border-2 border-textColor py-2 px-5 my-2 flex justify-center items-center group hover:bg-textColor hover:text-white duration-150 rounded-md'>
                            View Work
                            <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-2' /></span>
                        </button>
                    </Link>
                </div>
            </div>
            {/* hover animated button group */}
            <div className='absolute md:fixed right-14 bottom-10 md:left-0 md:-mt-14 flex md:flex-col md:justify-center gap-14 cursor-pointer'>
                {/* LinkedIn */}
                <div className='relative flex items-center group'>
                    <span className='absolute ml-0 h-[40px] w-[40px] p-2 rounded-full flex justify-center items-center bg-sky-700 z-10'>
                        <FaLinkedinIn className='font-bold text-white text-lg' />
                    </span>
                    <span className='absolute ml-0 h-[40px] w-[40px] flex items-center transition-all duration-200 md:group-hover:w-[140px] bg-sky-600 rounded-full px-1 py-1'>
                        <p className='w-full p-3 text-white text-right hidden md:group-hover:block transition-all duration-100 ease'>LinkedIn</p>
                    </span>
                </div>

                {/* Github */}
                <div className='relative flex items-center group'>
                    <span className='absolute ml-0 h-[40px] w-[40px] p-2 rounded-full flex justify-center items-center bg-slate-700 z-10'>
                        <FaGithub className='font-bold text-white text-lg' />
                    </span>
                    <span className='absolute ml-0 h-[40px] w-[40px] flex items-center transition-all duration-200 md:group-hover:w-[140px] bg-slate-600 rounded-full px-1 py-1'>
                        <p className='w-full p-3 text-white text-right hidden md:group-hover:block transition-all duration-100 ease'>GitHub</p>
                    </span>
                </div>


                <div className='relative flex items-center group'>
                    <span className='absolute ml-0 h-[40px] w-[40px] p-2 rounded-full flex justify-center items-center bg-green-700 z-10'>
                        <SiUpwork className='font-bold text-white text-lg' />
                    </span>
                    <span className='absolute ml-0 h-[40px] w-[40px] flex items-center transition-all duration-200 md:group-hover:w-[140px] bg-green-600 rounded-full px-1 py-1'>
                        <p className='w-full p-3 text-white text-right hidden md:group-hover:block transition-all duration-100 ease'>UpWork</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Home;