import React from 'react';
import HTML from '../../Assets/html.png';
import CSS from '../../Assets/css.png';
import javascript from '../../Assets/javascript.png';
import react from '../../Assets/react.png';
import node from '../../Assets/node.png';
import mongo from '../../Assets/mongo.png';
import firebase from '../../Assets/firebase.png';
import tailwind from '../../Assets/tailwind.png';
import github from '../../Assets/github.png';


const Skills = () => {
    return (
        <div name="skills" className="w-full h-auto sm:h-screen bg-primary">
            <div className="max-w-[1000px] w-full h-full mx-auto p-4 pt-20 sm:pt-0 flex flex-col justify-center text-textColor">
                <div>
                    <h2 className="text-4xl font-bold inline border-b-4 border-headingColor leading-normal tracking-wider">Experience</h2>
                    <p className="py-2">These are the technologies I've worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-8">
                    <div className="bg-white rounded-md shadow-md p-4 hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
                        <p className="mt-4">HTML</p>
                    </div>
                    <div className="bg-white rounded-md shadow-md p-4 hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
                        <p className="mt-4">CSS</p>
                    </div>
                    <div className="bg-white rounded-md shadow-md p-4 hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={javascript} alt="JAVASCRIPT icon" />
                        <p className="mt-4">JAVASCRIPT</p>
                    </div>
                    <div className="bg-white rounded-md shadow-md p-4 hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={react} alt="REACT JS icon" />
                        <p className="mt-4">REACT JS</p>
                    </div>
                    <div className="bg-white rounded-md shadow-md p-4 hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={node} alt="NODE JS icon" />
                        <p className="mt-4">NODE JS</p>
                    </div>
                    <div className="bg-white rounded-md shadow-md p-4 hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={mongo} alt="MONGO DB icon" />
                        <p className="mt-4">MongoDB</p>
                    </div>
                    <div className="bg-white rounded-md shadow-md p-4 hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={firebase} alt="firebase icon" />
                        <p className="mt-4">FIREBASE</p>
                    </div>
                    <div className="bg-white rounded-md shadow-md p-4 hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={github} alt="github icon" />
                        <p className="mt-4">GITHUB</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;