import note_des from "../assets/svg_designs/note_design.svg"
import { FaSortUp } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="xl:mt-10">
            <div className="w-full xl:w-4/5 h-52 z-10 bg-white relative px-8">
                <div className="absolute -z-20 right-0 opacity-15 ">
                    <img src={note_des} className="h-42" />
                </div>
                <div className="h-28 w-full"></div>
                <div className="flex justify-between items-center py-6 border-t-2 border-gray-400">
                    <h3 className="text-sm font-bold">
                        PWANHAVEN || 2025 All rights reserved.
                    </h3>
                    <button className="bg-gray-200 py-2 rounded-sm px-8 text-xs font-semibold relative">
                        <div className="bg-black text-white rounded-full absolute -top-4 -right-5 w-12 h-12 flex items-center justify-center">                       
                            <FaSortUp className="text-2xl pt-1" />
                        </div>
                        BACK TO TOP
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer;