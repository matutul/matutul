import React from 'react';
import SkillData from './SkillData';

const Skills = () => {
    return (
        <div name="skills" className="w-full h-auto sm:min-h-screen bg-primary sm:pt-20">
            <div className="max-w-[1000px] w-full h-full mx-auto p-4 pt-20 sm:pt-0 flex flex-col justify-center text-textColor">
                <div>
                    <h2 className="text-4xl font-bold inline border-b-4 border-headingColor leading-normal tracking-wider">Experience</h2>
                    <p className="py-2">These are the technologies I've worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-8">

                    {
                        SkillData && SkillData.map(skill =>
                            <div className="bg-white rounded-md shadow-md p-4 hover:scale-110 duration-500">
                                <img className="h-12 mx-auto" src={skill.image} alt="HTML icon" />
                                <p className="mt-4">{skill.name}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;