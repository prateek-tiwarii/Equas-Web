import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 w-full  z-50 transition-colors duration-300 ${isScrolled ? "bg-white shadow " : "bg-transparent"}`}>

            <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">

                <div className="flex items-center gap-8">
                    <h1 className="text-4xl font-bold text-[#0054FF]">Equas</h1>

                    <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
                        <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
                        <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-600">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <Link to="/login" className="hover:text-blue-600 text-gray-700 font-medium">Login</Link>
                    <Link
                        to="/demo"
                        className="border-2 border-[#003699] text-white bg-[#003699] px-4 py-2 rounded-lg hover:bg-white hover:text-[#003699] transition"
                    >
                        Book a Demo
                    </Link>
                </div>

                <button
                    className="md:hidden text-2xl text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </nav>

            {/* Mobile menu */}
            <div className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ${isOpen ? "scale-100" : "scale-0"} origin-top`}>
                <button
                    className="absolute top-5 right-5 text-3xl text-gray-700"
                    onClick={() => setIsOpen(false)}
                >
                    <FiX />
                </button>

                <ul className="flex flex-col items-center gap-6 text-gray-700 font-medium mt-20">
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
                    <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
                    <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
                    <li>
                        <Link
                            to="/demo"
                            className="border-2 border-[#003699] text-white bg-[#003699] px-4 py-2 rounded-lg hover:bg-white hover:text-[#003699] transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Book a Demo
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
