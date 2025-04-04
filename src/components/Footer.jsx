import { FaSortUp } from "react-icons/fa"
import note_des from "../assets/svg_designs/note_design.svg";


const Footer = () => {
    const year = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="xl:mt-10">
            <div className="w-full xl:w-4/5  z-10 bg-white relative px-8">
                <div className="absolute -z-20 right-0 opacity-15 ">
                    <img src={note_des} className="h-42" />
                </div>
                <div className="h-28 w-full"></div>
                <div className="flex justify-between flex-col md:flex-row items-start md:items-center py-12 border-t border-gray-300">
                    <h3 className="text-xs text-gray-500 font-bold">
                        PWAN HORIZON || {year} All rights reserved.
                    </h3>
                    <button onClick={scrollToTop} className="pointer mt-8 md:mt-0 whitespace-nowrap bg-gray-200 py-2 rounded-sm px-8 text-xs font-semibold relative">
                        <div className="bg-black hover:bg-red-600 active:bg-red-600 text-white rounded-full absolute -top-4 right-26 md:-right-5 w-12 h-12 flex items-center justify-center">
                            <FaSortUp className="text-2xl pt-1" />
                        </div>
                        <span className="text-[0.7rem] text-gray-500 font-bold">BACK TO TOP</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer;