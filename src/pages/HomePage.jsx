import Mainlayout from "../Mainlayout"
import Footer from "../components/Footer";
import video from "../assets/video_bg.mp4"
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <Mainlayout>
            <div className="w-full mb-26 xl:mb-0 bg-gray-700 relative">
                <div className="absolute left-12 top-12 hidden xl:block  w-32 h-32 border-gray-200 border-t-2 border-l-2"></div>
                <div className="absolute left-12 bottom-12 hidden xl:block  w-32 h-32 border-gray-200 border-b-2 border-l-2"></div>
                

                {/* OVERLAY */}
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.4)]"></div>
                <video src={video} autoPlay loop muted className="w-full h-full object-cover" />

                {/* TEXT CONTENT */}
                <div className="absolute w-full h-full flex flex-col items-center justify-center text-white top-0">
                    <div className="h-0.5 bg-red-600 w-16 mb-4 hidden md:block"></div>
                    <p className="text-md xl:text-2xl font-bold">PWAN HORIZON</p>
                    <h1 className="text-center text-xl xl:text-6xl font-bold">
                        WELCOME
                        <br />
                        TO
                        <br />
                        PWAN HORIZON
                    </h1>
                    <div className="flex items-center justify-center h-0.5 bg-gray-500 w-42 mt-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div>
                    </div>
                    <Link to="/about">
                        <button className="bg-red-600 px-10 font-bold py-1 md:py-2 rounded-sm text-xs md:text-sm mt-2 md:mt-4">
                            About Us
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </Mainlayout>
    )
}

export default HomePage;