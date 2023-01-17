import React from 'react';

const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen text-textColor bg-primary flex justify-center items-center">
            <div className="max-w-[1000px] w-full p-4 py-10 mx-auto">
                <div className="my-5">
                    <h3 className="font-bold text-4xl inline border-b-4 border-headingColor tracking-wider">Contact</h3>
                    <p className="my-4">Send message if you have any questions</p>
                </div>
                <form method="POST" action="https://getform.io/f/226fddb5-9f97-48db-8ed4-e6853c55e6ba">
                    <input type="text" placeholder="Name" name="name" className="w-full p-2 my-2 rounded-md text-lg outline-none text-textColor placeholder:text-lightTextGray bg-white" />
                    <input type="text" placeholder="Email" name="email" className="w-full p-2 my-2 rounded-md bordertext-lg outline-none text-textColor placeholder:text-lightTextGray bg-white" />
                    <textarea type="text" placeholder="Message" name="message" rows="5" className="w-full p-2 my-2 rounded-md text-lg outline-none text-textColor placeholder:text-lightTextGray bg-white" />
                    <button className="text-lg font-medium tracking-wider uppercase px-10 py-2 rounded-md text-center text-textColor border-2 border-textColor hover:bg-textColor hover:text-white">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;