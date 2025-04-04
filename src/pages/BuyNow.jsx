import Mainlayout from "../Mainlayout";
import BuyCard from "../components/BuyCard";
import Footer from "../components/Footer";
import buy from "../assets/images/buy.jpg"; // Correct way to import images in React
import line1_des from "../assets/svg_designs/line1_design.svg"
import { FaPhone, FaMap } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const BuyNowPage = () => {
    return (
        <Mainlayout>
            <div className="w-full xl:w-4/5 mb-24">
                <div className="relative w-full mb-12">

                    {/* Background Image */}
                    <div className="relative w-full h-64 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.4)]"></div>
                        <img
                            src={buy}
                            alt="About PWAN Haven"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <h1 className="text-white px-8 py-3 text-2xl xl:text-4xl font-bold absolute bottom-10 left-0">
                        BUY<span className="text-red-600">NOW</span>
                        <div className="mt-4">
                            <img src={line1_des} className="w-screen" />
                        </div>
                    </h1>
                </div>

                <BuyCard />
                <div className="flex flex-col xl:flex-row mt-4 gap-4">

                    <div className="bg-white relative flex items-center gap-4 p-6 w-full">
                        <div className="absolute top-0 right-0 px-2 bg-gray-100">
                            <span className="text-xs font-bold">01.</span>
                        </div>
                        <div className="bg-red-600 p-3 rounded-sm text-white text-lg drop-shadow-xl">
                            <FaPhone className="text-black" />
                        </div>
                        <div>
                            <h3 className="font-bold text-md text-gray-900">Sales</h3>
                            <p className="font-semibold text-gray-500 text-xs">080 6280 6026</p>
                            <p className="font-semibold text-gray-500 text-xs">080 3303 6833</p>
                        </div>
                    </div>
                    <div className="bg-white relative flex items-center gap-4 p-6 w-full">
                        <div className="absolute top-0 right-0 px-2 bg-gray-100">
                            <span className="text-xs font-bold">02.</span>
                        </div>
                        <div className="bg-red-600 p-3 rounded-sm text-white text-lg drop-shadow-xl">
                            <FaLocationPin className="text-black" />
                        </div>
                        <div>
                            <h3 className="font-bold text-md text-gray-900">We Are Located At</h3>
                            <p className="font-semibold text-gray-500 text-xs">Irede Estate</p>
                            <p className="font-semibold text-gray-500 text-xs">Duke And Duchess Estate</p>
                            <p className="font-semibold text-gray-500 text-xs">Buckingham Estate</p>
                            <p className="font-semibold text-gray-500 text-xs">Obibi Eze Estate</p>
                            <p className="font-semibold text-gray-500 text-xs">Horizon Court</p>
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

export default BuyNowPage;