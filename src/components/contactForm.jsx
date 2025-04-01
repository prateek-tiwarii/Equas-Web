import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        contactNumber: "",
        region: "India",
        workEmail: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className=" text-black text-center py-16">
                <h1 className="text-4xl font-bold mb-4">More than a service</h1>
                <p className="text-lg mb-6">
                    No More Excel | Increase Efficiency | Manage Labs | Schedule Rounds
                </p>
                <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200">
                    Get Started
                </button>
                <p className="mt-3 text-sm">15 Days Free Trial. No credit card required.</p>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-2xl mx-auto p-6 mt-10">
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-6">
                    If you have any questions or need help, please fill out the form below.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                    <div className="flex space-x-2">
                        <select
                            name="region"
                            value={formData.region}
                            onChange={handleChange}
                            className="p-3 border rounded-lg"
                        >
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Canada">Canada</option>
                        </select>
                        <input
                            type="tel"
                            name="contactNumber"
                            placeholder="Enter your contact number"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg"
                            required
                        />
                    </div>
                    <input
                        type="email"
                        name="workEmail"
                        placeholder="Enter your work email"
                        value={formData.workEmail}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700"
                    >
                        Schedule Demo
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;

