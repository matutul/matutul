import React from 'react';
import CakeValley from '../../Assets/CakeValley.PNG';
import CarRentalService from '../../Assets/carRentalService.PNG';
import CookingMaster from '../../Assets/CookingMaster.PNG';
import EasyTransport from '../../Assets/easyTransport.PNG';
import EmaJohn from '../../Assets/ema-john-simple.PNG';
import TeamSelection from '../../Assets/teamSelection.PNG';

const Projects = () => {
    return (
        <div name="work" className="w-full h-full sm:h-screen text-[#D8E9A8] bg-[#191A19]">
            <div className="max-w-[1000px] w-full h-full p-4 pt-20 sm:pt-0 mx-auto flex flex-col justify-center">
                <div className="">
                    <h2 className="text-4xl font-bold inline border-b-4 border-[#4E9F3D] leading-normal">Works</h2>
                    <p className="py-2">Check out some of my recent works</p>
                </div>
                {/* container */}
                <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-8">
                    {/* grid */}
                    {/* card 1 */}
                    <div style={{ backgroundImage: `url(${CarRentalService})` }} className={`h-[220px] p-4 text-center rounded-xl group content-dev flex flex-col justify-center items-center bg-slate-600`}>
                        <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-bold tracking-wider mb-2">Car Rental Services</h3>
                            <a href="https://molla-rent-a-car.web.app/home" target="_blank">
                                <button className="bg-white text-gray-700 rounded-lg font-bold text-center text-lg px-4 py-3 m-2">Demo</button>
                            </a>
                            <a href="https://github.com/matutul/car-rent-service">
                                <button className="bg-white text-gray-700 rounded-lg font-bold text-center text-lg px-4 py-3 m-2">Code</button>
                            </a>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div style={{ backgroundImage: `url(${EasyTransport})` }} className="h-[220px] p-4 text-center rounded-xl group content-dev flex flex-col justify-center items-center bg-slate-600">
                        <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-bold tracking-wider mb-2">Easy Transport</h3>
                            <a href="https://easy-transport-system.web.app/" target="_blank">
                                <button className="bg-white text-gray-700 rounded-lg font-bold text-center text-lg px-4 py-3 m-2">Demo</button>
                            </a>
                            <a href="https://github.com/matutul/react-auth-matutul" target="_blank">
                                <button className="bg-white text-gray-700 rounded-lg font-bold text-center text-lg px-4 py-3 m-2">Code</button>
                            </a>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div style={{ backgroundImage: `url(${CakeValley})` }} className="h-[220px] p-4 text-center rounded-xl group content-dev flex flex-col justify-center items-center bg-slate-600">
                        <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-bold tracking-wider mb-2">Cake Valley</h3>
                            <a href="https://cake-valley-authentication.web.app/" target="_blank">
                                <button className="bg-white text-gray-700 rounded-lg font-bold text-center text-lg px-4 py-3 m-2">Demo</button>
                            </a>
                            <a href="https://github.com/matutul/full-stack-client" target="_blank">
                                <button className="bg-white text-gray-700 rounded-lg font-bold text-center text-lg px-4 py-3 m-2">Code</button>
                            </a>
                        </div>
                    </div>
                    {/* card 4 */}
                    <div style={{ backgroundImage: `url(${CookingMaster})` }} className="h-[220px] p-4 text-center rounded-xl group content-dev flex flex-col justify-center items-center bg-slate-600">
                        <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-bold tracking-wider mb-2">Cooking Master</h3>
                            <a href="https://matutul.github.io/cooking-master/" target="_blank">
                                <button className="bg-white text-gray-700 rounded-lg font-bold text-center text-lg px-4 py-3 m-2">Demo</button>
                            </a>
                            <a href="https://github.com/matutul/cooking-master" target="_blank">
                                <button className="bg-white text-gray-700 rounded-lg font-bold text-center text-lg px-4 py-3 m-2">Code</button>
                            </a>
                        </div>
                    </div>
                    {/* card 5 */}
                    <div style={{ backgroundImage: `url(${TeamSelection})` }} className="h-[220px] p-4 text-center rounded-xl group content-dev flex flex-col justify-center items-center bg-slate-600">
                        <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-bold tracking-wider mb-2">Team Selection</h3>
                            <a href="https://jovial-fermat-0e5be8.netlify.app/" target="_blank">
                                <button className="bg-white text-gray-700 rounded-lg font-bold text-center text-lg px-4 py-3 m-2">Demo</button>
                            </a>
                            <a href="https://github.com/matutul/simple-react-matutul" target="_blank">
                                <button className="bg-white text-gray-700 rounded-lg font-bold text-center text-lg px-4 py-3 m-2">Code</button>
                            </a>
                        </div>
                    </div>
                    {/* card 6 */}
                    <div style={{ backgroundImage: `url(${EmaJohn})` }} className="h-[220px] p-4 text-center rounded-xl group content-dev flex flex-col justify-center items-center bg-slate-600">
                        <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-bold tracking-wider mb-2">Ema John</h3>
                            <a href="https://dreamy-franklin-a38eb1.netlify.app/" target="_blank">
                                <button className="bg-white text-gray-700 rounded-lg font-bold text-center text-lg px-4 py-3 m-2">Demo</button>
                            </a>
                            <a href="https://github.com/matutul/ema-john-simple" target="_blank">
                                <button className="bg-white text-gray-700 rounded-lg font-bold text-center text-lg px-4 py-3 m-2">Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;