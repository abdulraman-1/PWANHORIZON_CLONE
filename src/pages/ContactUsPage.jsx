import Mainlayout from "../Mainlayout";
import Footer from "../components/Footer";
import contactus from "../assets/images/contactus.jpg"; // Correct way to import images in React
import line1_des from "../assets/svg_designs/line1_design.svg"
import { FaPhone, FaMap } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const ContactUsPage = () => {
    return (
        <Mainlayout>
            <div className="w-full xl:w-4/5 mb-24">
                <div className="relative w-full mb-12">

                    {/* Background Image */}
                    <div className="relative w-full h-64 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.4)]"></div>
                        <img
                            src={contactus}
                            alt="About PWAN Haven"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <h1 className="text-white px-8 py-3 text-2xl xl:text-4xl font-bold absolute bottom-10 left-0">
                        CONTACT<span className="text-red-600">US</span>
                        <div className="mt-4">
                            <img src={line1_des} className="w-screen" />
                        </div>
                    </h1>
                </div>

                <div className="flex flex-col xl:flex-row gap-4">

                    <div className="bg-white relative flex items-center gap-4 p-6 w-full">
                        <div className="absolute top-0 right-0 px-2 bg-gray-100">
                            <span className="text-xs font-bold">01.</span>
                        </div>
                        <div className="bg-red-600 p-3 rounded-sm text-white text-lg drop-shadow-xl">
                            <FaPhone className="text-black" />
                        </div>
                        <div>
                            <h3 className="font-bold text-md text-gray-900">Our Phone Number</h3>
                            <p className="font-semibold text-gray-500 text-xs">080 6280 6026</p>
                            <p className="font-semibold text-gray-500 text-xs">080 3303 6833</p>
                        </div>
                    </div>
                    <div className="bg-white relative flex items-center gap-4 p-6 w-full">
                        <div className="absolute top-0 right-0 px-2 bg-gray-100">
                            <span className="text-xs font-bold">02.</span>
                        </div>
                        <div className="bg-red-600 p-3 rounded-sm text-white text-lg drop-shadow-xl">
                            <CiMail className="text-black" />
                        </div>
                        <div>
                            <h3 className="font-bold text-md text-gray-900">Our E-mail</h3>
                            <p className="font-semibold text-gray-500 text-xs">pwanhorizon@gmail.com</p>
                            <p className="font-semibold text-gray-500 text-xs">info@pwanhorizon.com</p>
                        </div>
                    </div>
                    <div className="bg-white relative flex items-center gap-4 p-6 w-full">
                        <div className="absolute top-0 right-0 px-2 bg-gray-100">
                            <span className="text-xs font-bold">03.</span>
                        </div>
                        <div className="bg-red-600 p-3 rounded-sm text-white text-lg drop-shadow-xl">
                            <FaMap className="text-black" />
                        </div>
                        <div>
                            <h3 className="font-bold text-md text-gray-900">Office Address</h3>
                            <p className="font-semibold text-gray-500 text-xs">D.N Danjuma House, KM 49, Olòkonla, Adjacent Lagos Business School, Lekki – Epe Expressway, Eti-Osa, Lagos 106104, Lagos, Nigeria.</p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </Mainlayout>
    );
}

export default ContactUsPage;