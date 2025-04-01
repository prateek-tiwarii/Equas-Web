import React from 'react';

const AboutUs = () => {

    return (
        <div className="flex flex-col items-center justify-center bg-white p-8 text-center">

            <h1 className="text-5xl font-semibold text-blue-600 mb-6">
                A Platform Made for Simplified Proficient Testing
            </h1>


            <div className="flex flex-col md:flex-row items-center w-full">

                <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
                    <img
                        src="about.png"
                        alt="Medical Lab Collaboration"
                        className="max-w-sm h-auto"
                    />
                </div>

                {/* Right Section - Text Content */}
                <div className="md:w-2/3 text-left px-6">
                    <p className="text-gray-700 mb-4">
                        Our platform enables medical professionals and diagnostic labs to enhance testing efficiency,
                        streamline workflows, and ensure accurate results with minimal manual intervention.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Real-Time Test Monitoring:</strong> Track ongoing tests and receive instant updates.</li>
                        <li><strong>Automated Reporting:</strong> Generate precise and structured reports effortlessly.</li>
                        <li><strong>AI-Powered Analysis:</strong> Leverage AI for enhanced diagnostics and insights.</li>
                        <li><strong>Seamless Integration:</strong> Connect with hospital management systems and EMRs.</li>
                        <li><strong>24/7 Support:</strong> Get round-the-clock assistance from our expert team.</li>
                    </ul>
                    <p className="mt-4 text-gray-600">
                        Join leading laboratories in revolutionizing diagnostic testing with our intelligent solutions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
