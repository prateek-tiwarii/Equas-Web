const Hero = () => {

    return (
        <section className="w-full py-10 md:py-20">

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 text-center md:text-left">
                    <p className="text-gray-600 font-semibold text-lg md:text-2xl">AI-Driven Proficiency Testing</p>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
                        The World's Most Advanced <br />
                        <span className="text-blue-600">AI-Powered Proficiency Testing Platform.</span>
                    </h1>
                    <p className="text-gray-600 mt-4 text-xl md:text-2xl">
                        Gain a competitive edge with the world's leading AI-powered proficiency testing platform trusted by top medical labs. Ensure accuracy, automate compliance, and streamline workflows to reduce errors, save time, and improve patient outcomes.
                    </p>

                    <button className="mt-6 border-2 border-[#003699] text-white text-xl bg-[#003699] px-20 py-3 rounded-lg hover:bg-white hover:text-[#003699] transition">
                        Book a Demo
                    </button>
                </div>

                <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <img src="pt-3.png" alt="Hero Image" className="w-full max-w-xs md:max-w-md rounded-6xl" />
                </div>
            </div>
        </section>
    );
};

export default Hero;