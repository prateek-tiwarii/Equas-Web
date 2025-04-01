import React from 'react'
import { LuTestTubeDiagonal } from 'react-icons/lu'
import { TbTruckDelivery } from 'react-icons/tb'

const Who = () => {
    return (
        <div>
            <div className="bg-gray-100 py-16 px-6 text-center">
                <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-14">
                    <h2 className="text-5xl font-bold text-gray-900">
                        Who do we <span className="text-blue-600">help?</span>
                    </h2>

                    <div className="mt-8 flex flex-col md:flex-row justify-center gap-72 md:gap-72">
                        {/* Sample Shippers */}
                        <div className="max-w-4xl text-center">
                            <TbTruckDelivery className="mx-auto mb-4 w-8 h-8 md:w-12 md:h-12 text-gray-700" />
                            <h3 className="text-xl font-semibold text-gray-900">Sample Shippers</h3>
                            <p className="text-gray-600 mt-2 text-left">
                                Efficiently handle high-cost exceptions, enhance sample transportation, and ensure timely deliveries from <strong>Souresee</strong> to various laboratories. Improve efficiency and reliability with digital tracking solutions.
                            </p>
                        </div>

                        {/* Proficiency Testing Providers */}
                        <div className="max-w-4xl text-center">
                            <LuTestTubeDiagonal className="mx-auto mb-4 w-8 h-8 md:w-12 md:h-12 text-gray-700" />
                            <h3 className="text-xl font-semibold text-gray-900">Proficiency Testing Providers</h3>
                            <p className="text-gray-600 mt-2 text-left">
                                Ensure proficiency reports are delivered on time, optimize logistics for test samples, and enhance credibility through seamless digital transformation in your testing services.
                            </p>
                        </div>
                    </div>

                    {/* Contact Us Button */}
                    <div className="mt-8">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold">
                            Contact Us →
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Who