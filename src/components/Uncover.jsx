import React, { useState, useEffect } from "react";

const cards = [
    {
        id: 1,
        title: "Accurate & Reliable Testing",
        image: "gimg4.jpeg",
        description: "Ensure precision with industry-standard proficiency testing."
    },
    {
        id: 2,
        title: "Compliance & Accreditation",
        image: "gimg1.jpeg",
        description: "Meet regulatory standards like CAP, CLIA, ISO 15189."
    },
    {
        id: 3,
        title: "Automated Report Analysis",
        image: "gimg2.jpeg",
        description: "AI-driven insights for faster decision-making."
    },
    {
        id: 4,
        title: "Seamless Lab Integration",
        image: "ging3.jpeg",
        description: "Easily integrate with LIMS and lab workflows."
    }
];

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        if (hoveredIndex !== null) return;

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [hoveredIndex]);

    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="text-center mb-6">
                <p className="text-5xl font-bold mb-4">Discover the future of <span className='text-blue-600'>efficient</span> proficiency testing</p>
                <p className="text-gray-600 text-xl">Explore how our cutting-edge app is set to revolutionize the industry!</p>
            </div>
            <div className="flex w-full h-80 gap-4 overflow-hidden">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className={`relative transition-all duration-500 rounded-xl overflow-hidden cursor-pointer 
              ${hoveredIndex === index || activeIndex === index ? "flex-[3]" : "flex-[1]"} 
              bg-gray-100 shadow-lg`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover opacity-75"
                        />
                        <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                            <h3 className="text-lg font-bold">{card.title}</h3>
                            {(hoveredIndex === index || activeIndex === index) && (
                                <p className="text-sm mt-2">{card.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
