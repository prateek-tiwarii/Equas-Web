import React from "react";
import { FaQuestionCircle, FaComments, FaUserTie } from "react-icons/fa";

const SupportSection = () => {
    const supportOptions = [
        {
            icon: <FaQuestionCircle className="text-4xl text-black" />,
            title: "Help Centre",
            description: "Access detailed guides, tutorials, and help articles in 20+ languages to solve any issue quickly.",
            linkText: "Go to Help Center →",
            linkHref: "#",
        },
        {
            icon: <FaComments className="text-4xl text-black" />,
            title: "Live Support",
            description: "Our expert team is available 24/7 via live chat and email. Get a fast response, any time.",
            linkText: "Login & Get Support →",
            linkHref: "#",
        },
        {
            icon: <FaUserTie className="text-4xl text-black" />,
            title: "Hire a equas Expert",
            description: "Need help to set up your equas dashboard? Hire a equas Pro for custom dashboard setup.",
            linkText: "Hire a equas Expert →",
            linkHref: "#",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-semibold text-center mb-8">
                We’re Here for You — 24/7 Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {supportOptions.map((option, index) => (
                    <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                        <div className="flex justify-center mb-4">{option.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                        <p className="text-gray-600 mb-4">{option.description}</p>
                        <a href={option.linkHref} className="text-blue-600 font-semibold hover:underline">
                            {option.linkText}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SupportSection;