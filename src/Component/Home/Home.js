import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
const Home = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center md:px-[10%] py-[200px] bg-[#191A19] text-[#D8E9A8]'>
            <div className=''>

            </div>
            <div className='text-center max-w-[1000px]'>
                <p className='sm:text-xl'>Hello, My name is</p>
                <h1 className='text-4xl sm:text-5xl text-[#4E9F3D]'>Md Ashrafujjaman Tutul</h1>
                <h2 className='text-3xl sm:text-4xl'>I am a Full Stack Web Application Developer</h2>
                <p className='my-5 px-4 sm:text-xl max-w-[700px]'>I am specialized in building exceptional and modern digital experiences together with motion and still graphics arts. Currently, I am more focused on building responsive full-stack web applications.</p>
                <div className="flex justify-center">
                    <button className='border-2 border-[#D8E9A8] py-2 px-5 my-2 flex justify-center items-center group hover:bg-[#1E5128] duration-150'>
                        View Work
                        <span className='group-hover:rotate-90 duration-200'><HiArrowNarrowRight className='ml-2' /></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;