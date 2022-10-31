import React from 'react';

const Aboutme = () => {
    return (
        <div name="about" className="w-full h-screen flex flex-col justify-center items-center bg-[#191A19]">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 text-[#D8E9A8]">
                <div className="sm:text-right pl-4 pb-8">
                    <p className="text-4xl border-b-4 inline font-bold border-[#4E9F3D]">About</p>
                </div>
                <div></div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-[#D8E9A8]">
                <div className="sm:text-right">
                    <p className="text-4xl font-bold">Hi. I'm Tutul, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>I am passionate about building excellent software that inproves the lives of those around me. I specialize in creating software for clients ranging from individuals and small businesses all the way to large enterprise corporates. What would you do if you had a software expert available at your fingertips?</p>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;