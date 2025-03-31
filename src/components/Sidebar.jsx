import { useState } from "react";
import rec_des from "../assets/svg_designs/rectangle_design.svg"

const Sidebar = ({isOpen}) => {
    const [show, setShow] = useState(true);

    const handleShow = () => {
        setShow(prev => !prev);
    };

    return (
        <aside className={`w-64 z-20 fixed top-0 left-0 bg-white ${isOpen ? 'block' : 'hidden'} md:block h-screen overflow-y-auto`}>
            <nav className="py-28">
                <ul>
                    <li className="px-6 py-3 border-t border-gray-300 relative group">
                        <div className="absolute top-0 left-0 w-1 h-0 bg-red-600 transition-all duration-300 group-hover:h-full"></div>
                        <a href="#" className="flex text-xs font-semibold items-center text-gray-700">
                            <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            HOME
                        </a>
                    </li>
                    <li className="px-6 py-3 border-t border-gray-300 relative group cursor-pointer">
                        <div className="absolute top-0 left-0 w-1 h-0 bg-red-600 transition-all duration-300 group-hover:h-full"></div>
                        <div onClick={handleShow} className="flex text-xs font-semibold items-center text-gray-700">
                            <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            WHO WE ARE
                        </div>
                        {show && (
                            <ul>
                                <li className="px-8 py-3 relative group">
                                    <a href="#" className="flex text-xs font-semibold items-center text-gray-700">
                                        ABOUT US
                                    </a>
                                </li>
                                <li className="px-8 py-3 relative group">
                                    <a href="#" className="flex text-xs font-semibold items-center text-gray-700">
                                        BOARD OF DIRECTORS
                                    </a>
                                </li>
                                <li className="px-8 py-3 relative group">
                                    <a href="#" className="flex text-xs font-semibold items-center text-gray-700">
                                        OUR TEAM
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>
                    {/* Rest of list items remain the same */}
                    <li className="px-6 py-3 border-t border-gray-300 relative group">
                        <div className="absolute top-0 left-0 w-1 h-0 bg-red-600 transition-all duration-300 group-hover:h-full"></div>
                        <a href="#" className="flex text-xs font-semibold items-center text-gray-700">
                            <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            OUR ESTATE
                        </a>
                    </li>
                    <li className="px-6 py-3 border-t border-gray-300 relative group">
                        <div className="absolute top-0 left-0 w-1 h-0 bg-red-600 transition-all duration-300 group-hover:h-full"></div>
                        <a href="#" className="flex text-xs font-semibold items-center text-gray-700">
                            <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            HOUSES
                        </a>
                    </li>
                    <li className="px-6 py-3 border-t border-gray-300 relative group">
                        <div className="absolute top-0 left-0 w-1 h-0 bg-red-600 transition-all duration-300 group-hover:h-full"></div>
                        <a href="#" className="flex text-xs font-semibold items-center text-gray-700">
                            <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            VIDEOS
                        </a>
                    </li>
                    <li className="px-6 py-3 border-t border-b border-gray-300 relative group">
                        <div className="absolute top-0 left-0 w-1 h-0 bg-red-600 transition-all duration-300 group-hover:h-full"></div>
                        <a href="#" className="flex text-xs font-semibold items-center text-gray-700">
                            <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            CONTACT US
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="px-6 mt-3">
                <h3 className="text-xs font-medium text-gray-500 mb-4">OUR CONTACT INFO</h3>

                <div className="space-y-4">
                    <div className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 mr-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span className="text-xs">PWANHAVEN@GMAIL.COM</span>
                    </div>

                    <div className="flex items-start text-gray-700">
                        <svg className="w-5 h-5 mr-3 text-red-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs">PLOT 10 ROAD 4, LEKKI COUNTY HOMES IKOTA VILLA LEKKI LAGOS.</span>
                    </div>

                    <div className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 mr-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span className="text-xs">09124115554 <br />09060004376</span>
                    </div>
                </div>
            </div>

            <div className="px-6 pb-8 mt-10 border-b border-gray-300">
                <h3 className="text-xs font-medium text-gray-500 mb-4">STAY CONNECTED WITH US</h3>
                <div className="flex space-x-2">
                    <a href="#" className="w-8 h-8 bg-red-600 text-white flex items-center justify-center">
                        <span className="text-xs">f</span>
                    </a>
                    <a href="#" className="w-8 h-8 bg-red-600 text-white flex items-center justify-center">
                        <span className="text-xs">t</span>
                    </a>
                    <a href="#" className="w-8 h-8 bg-red-600 text-white flex items-center justify-center">
                        <span className="text-xs">i</span>
                    </a>
                    <a href="#" className="w-8 h-8 bg-red-600 text-white flex items-center justify-center">
                        <span className="text-xs">y</span>
                    </a>
                </div>
            </div>

            <div className="mt-28">
                <img src={rec_des} className="h-22" />
            </div>
        </aside>
    );
};

export default Sidebar;