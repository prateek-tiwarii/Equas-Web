import { create } from "zustand";
import { FaCloudUploadAlt, FaFileDownload, FaChartBar, FaCogs } from "react-icons/fa";
import { MdSummarize } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { BiAnalyse } from "react-icons/bi";


const useSidebarStore = create((set) => ({
    activeOption: "Upload Sample",
    setActiveOption: (option) => set({ activeOption: option })
}));

const options = [
    { name: "Upload Sample", icon: <FaCloudUploadAlt /> },
    { name: "Download Report", icon: <FaFileDownload /> },
    { name: "Graph Analysis", icon: <FaChartBar /> },
    { name: "Configure Test Rounds", icon: <FaCogs /> }
];

const Sidebar = () => {
    const { activeOption, setActiveOption } = useSidebarStore();

    return (
        <div className="w-full md:w-1/3 h-full p-8  rounded-lg  flex flex-col">
            <h2 className="text-5xl font-bold mb-4 text-blue-600">Our <span className="text-black">Solutions</span></h2>
            <p className="text-lg text-gray-600 mb-8">
                Our solution simplifies data processing with seamless file uploads, insightful report generation,
                in-depth graph analysis, and customizable test configurations for optimized workflow management.
            </p>
            <ul className="flex-grow">
                {options.map(({ name, icon }) => (
                    <li
                        key={name}
                        className={`flex items-center gap-3 p-4 text-xl font-medium cursor-pointer rounded-lg hover:bg-gray-200 transition ${activeOption === name ? "bg-blue-500 text-white" : ""}`}
                        onClick={() => setActiveOption(name)}
                    >
                        {icon} {name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const contentData = {
    "Upload Sample": {
        rectangle: "Easily upload files in multiple formats, including PDF, CSV, and DOCX. Our system extracts key insights instantly.",
        squares: [
            { text: "Drag & Drop Uploads", icon: <FaCloudUploadAlt /> },
            { text: "Auto-Summary Extraction", icon: <MdSummarize /> },
            { text: "Secure Cloud Storage", icon: <AiOutlineFileDone /> }
        ]
    },
    "Download Report": {
        rectangle: "Generate and download detailed reports in PDF and Excel formats with customizable insights.",
        squares: [
            { text: "Multiple Export Formats", icon: <FaFileDownload /> },
            { text: "Instant Report Generation", icon: <AiOutlineFileDone /> },
            { text: "Customizable Data Views", icon: <MdSummarize /> }
        ]
    },
    "Graph Analysis": {
        rectangle: "Visualize data trends with interactive charts and analytics for better decision-making.",
        squares: [
            { text: "Interactive Charts", icon: <FaChartBar /> },
            { text: "Advanced Data Insights", icon: <BiAnalyse /> },
            { text: "Real-time Statistics", icon: <MdSummarize /> }
        ]
    },
    "Configure Test Rounds": {
        rectangle: "Set up and customize test rounds with various configurations to fit your needs.",
        squares: [
            { text: "Custom Test Parameters", icon: <FaCogs /> },
            { text: "Automated Evaluations", icon: <BiAnalyse /> },
            { text: "Real-time Feedback", icon: <MdSummarize /> }
        ]
    }
};

const Content = () => {
    const { activeOption } = useSidebarStore();
    const data = contentData[activeOption];

    return (
        <div className="w-full md:w-2/3 p-8 flex flex-col gap-8">
            <div className="h-72 bg-white rounded-lg shadow-md flex items-center justify-center border border-gray-300 text-2xl font-semibold p-6 text-center hover:scale-105 transition-transform duration-300 drop-shadow-2xl">
                {data.rectangle}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {data.squares.map((square, index) => (
                    <div key={index} className="h-48 bg-blue-100 rounded-lg shadow-md flex flex-col items-center justify-center text-xl font-medium p-6 hover:scale-105 transition-transform duration-300 drop-shadow-2xl ">
                        <div className="text-5xl mb-3">{square.icon}</div>
                        {square.text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function BentoGrid() {
    return (
        <div className="flex flex-col md:flex-row gap-8 p-8 h-screen max-w-7xl mx-auto">
            <Sidebar />
            <Content />
        </div>
    );
}