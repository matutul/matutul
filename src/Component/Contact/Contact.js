import React from 'react';

const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen text-[#D8E9A8] bg-[#191A19] flex justify-center items-center">
            <div className="max-w-[1000px] w-full p-4 py-10 mx-auto">
                <div className="my-5">
                    <h3 className="font-bold text-4xl inline border-b-4 border-[#4E9F3D] tracking-wider">Contact</h3>
                    <p className="my-4">Send message if you have any questions</p>
                </div>
                <form action="">
                    <input type="text" placeholder="Name" name="name" className="w-full p-2 my-2 rounded-xl text-lg outline-none text-gray-700 bg-[#D8E9A8]" />
                    <input type="text" placeholder="Email" name="email" className="w-full p-2 my-2 rounded-xl bordertext-lg outline-none text-gray-700 bg-[#D8E9A8]" />
                    <textarea type="text" placeholder="Message" name="message" rows="5" className="w-full p-2 my-2 rounded-xl text-lg outline-none text-gray-700 bg-[#D8E9A8]" />
                    <button className="text-lg font-bold tracking-wider uppercase px-10 py-2 rounded-xl text-center text-[#4E9F3D] border-2 border-[#4E9F3D] hover:bg-[#4E9F3D] hover:text-white">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;