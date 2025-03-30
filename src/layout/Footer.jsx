import { TbTruckDelivery } from "react-icons/tb";
import { LuTestTubeDiagonal } from "react-icons/lu";
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function HelpSection() {
    return (
        <>

            {/* Footer Section */}
            <footer className="bg-[#0B1D41] text-white py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">EQUAS</h2>
                        <p className="text-gray-300"> SuperNova,crossing republik ghaziabad , up-14</p>
                    </div>
                    <hr className="border-gray-600 mb-6" />
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Solutions */}
                        <div>
                            <h3 className="font-semibold">Solutions</h3>
                            <ul className="mt-2 space-y-1 text-gray-300">
                                <li>Platform Overview</li>
                                <li>GoProcure</li>
                                <li>GoPlan</li>
                                <li>GoTrack</li>
                                <li>GoShipment</li>
                                <li>GoInvoice</li>
                            </ul>
                        </div>

                        {/* Market Intelligence */}
                        <div>
                            <h3 className="font-semibold">Market Intelligence</h3>
                            <ul className="mt-2 space-y-1 text-gray-300">
                                <li>Container Tracking</li>
                                <li>LSP Database</li>
                                <li>GoComet Freight Index</li>
                                <li>Lead Time Benchmark</li>
                                <li>Smart Schedules</li>
                                <li>Port Congestion Data</li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="font-semibold">Company</h3>
                            <ul className="mt-2 space-y-1 text-gray-300">
                                <li>About Us</li>
                                <li>Media</li>
                                <li>Careers</li>
                                <li>Contact Us</li>
                                <li>Tech Blog</li>
                            </ul>
                        </div>

                        {/* Sustainability */}
                        <div className="text-right flex flex-row ">
                            <img src="3rs.webp" alt="Sustainability" className="w-20 h-20 mx-auto mb-2" />
                            <h3 className="font-semibold">Driving sustainability, reducing CO2 emissions.</h3>

                        </div>
                    </div>
                    <hr className="border-gray-600 mt-6 mb-6" />
                    <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
                        <p>Made with love in 🇮🇳</p>
                        <div className="flex space-x-4">
                            <p>Site Map</p>
                            <p>Privacy Policy</p>
                            <p>SaaS Terms of Use</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}