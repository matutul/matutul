import React from 'react';
import linkArray from './projectData';

const Projects = () => {
    return (
        <div name="work" className="w-full h-full sm:min-h-screen text-textColor bg-primary sm:pt-20">
            <div className="max-w-[1000px] w-full h-full p-4 pt-20 sm:pt-0 mx-auto flex flex-col justify-center">
                <div className="">
                    <h2 className="text-4xl font-bold inline border-b-4 border-headingColor leading-normal">Works</h2>
                    <p className="py-2">Check out some of my recent works</p>
                </div>
                {/* container */}
                <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-8">
                    {/* grid */}
                    {/* card 1 */}
                    {
                        linkArray && linkArray.map(link => 
                            <div style={{ backgroundImage: `url(${link.image})` }} className={`h-[220px] text-center rounded-xl group content-dev flex flex-col justify-center items-center bg-slate-600 shadow-lg border-4 border-white overflow-hidden`}>
                                <div className="w-full h-full bg-cardOverlay backdrop-blur-sm opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-all ease-in-out duration-300">
                                    <h3 className="text-2xl font-bold tracking-wider mb-2 text-white">{link.name}</h3>
                                    <a href={link.demoLink} rel="noreferrer" target="_blank">
                                        <button className="bg-white text-gray-700 rounded-lg font-bold text-center text-lg px-4 py-2 m-2 shadow-gray-400 shadow-md hover:bg-gray-200 transition-all ease-in-out duration-200">Demo</button>
                                    </a>
                                    <a href={link.gitLink}>
                                        <button className="bg-white text-gray-700 rounded-lg font-bold text-center text-lg px-4 py-2 m-2 shadow-gray-400 shadow-md hover:bg-gray-200 transition-all ease-in-out duration-200">Code</button>
                                    </a>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;