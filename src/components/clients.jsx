import { useRef } from "react";

const testimonials = [
    {
        name: "John Doe",
        position: "CEO, Chimera",
        feedback:
            "Chimera's innovative solutions have transformed our workflow, making everything seamless and efficient.",
        image: "https://m.media-amazon.com/images/M/MV5BNWI4ZTJiZmUtZGI5MC00NTk4LTk2OTYtNDU3NTJiM2QxNzM0XkEyXkFqcGc@._V1_.jpg",
    },
    {
        name: "Jane Smith",
        position: "Marketing Head, Chimera",
        feedback:
            "Using Chimera's tools, we've seen a tremendous increase in engagement and efficiency.",
        image: "https://m.media-amazon.com/images/M/MV5BNWI4ZTJiZmUtZGI5MC00NTk4LTk2OTYtNDU3NTJiM2QxNzM0XkEyXkFqcGc@._V1_.jpg",
    },
    {
        name: "Robert Brown",
        position: "Project Manager, Chimera",
        feedback:
            "Chimera has completely changed how we handle project management. It's a game-changer!",
        image: "https://m.media-amazon.com/images/M/MV5BNWI4ZTJiZmUtZGI5MC00NTk4LTk2OTYtNDU3NTJiM2QxNzM0XkEyXkFqcGc@._V1_.jpg",
    },
];

const Testimonials = () => {
    const scrollRef = useRef(null);

    return (
        <div className="w-full p-6 text-center overflow-hidden">
            <h2 className="text-4xl font-semibold mb-6">The Testimonials of Our Clients</h2>
            <div className="flex gap-4 overflow-x-auto scroll-smooth p-4" ref={scrollRef}>
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-xl shadow-lg min-w-[350px] h-[250px] flex flex-col justify-between transition-transform transform hover:scale-105"
                    >
                        <div>
                            <span className="text-4xl text-blue-600 font-bold">“</span>
                            <p className="italic text-lg text-gray-700">{testimonial.feedback}</p>
                            <span className="text-4xl text-blue-600 font-bold block text-right">”</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                <p className="text-sm text-gray-500">{testimonial.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;