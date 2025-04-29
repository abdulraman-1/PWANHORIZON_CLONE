import Mainlayout from "../Mainlayout";
import Footer from "../components/Footer";
import note_des from "../assets/svg_designs/note_design.svg";
import box_des from "../assets/svg_designs/box_design.svg";
import h1 from "../assets/images/team/h1.jpg"
import h2 from "../assets/images/team/h2.jpg"
import h3 from "../assets/images/team/h3.jpg"
import h4 from "../assets/images/team/h4.jpg"
import { FaPlus } from "react-icons/fa";

const OurTeamPage = () => {
    const team = [
        { image: h1, name: "AMAECHI SIXTUS CHIMEZIE", position: "BDE, Business Development Executive" },
        { image: h2, name: "UGOCHUKWU J.ACHI", position: "BDE, Business Development Executive" },
        { image: h4, name: "Mike Ichie Anna.C ", position: "Accountant" },
        { image: h3, name: "POPOOLA OMOLOLA FAITH", position: "Customer Service" },

    ]

    return (
        <Mainlayout>
            <div className="bg-white p-10 xl:p-20 w-full xl:w-4/5 mb-24">
                <div className="relative">
                    {/* Background Designs */}
                    <div className="absolute z-10 right-0 bottom-0 opacity-15">
                        <img src={note_des} className="h-52" />
                    </div>
                    <div className="absolute z-10 right-0 top-0 opacity-80">
                        <img src={box_des} className="h-22" />
                    </div>

                    {/* Section Title */}
                    <h2 className="text-3xl font-semibold mb-10">
                        MEET OUR <span className="text-red-600">AWESOME TEAM</span>
                    </h2>

                    <div className="flex gap-2 flex-wrap w-full">
                        {
                            team.map((value, index) => (
                                <div key={index} className="bg-white rounded-b-sm w-full xl:w-[32.5%] border border-gray-300">
                                    <div className="relative w-full group overflow-hidden">
                                        <img src={value.image} className="max-w-full h-auto" />

                                        {/* Hover Overlay */}
                                        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                            <div className="w-full h-full flex items-center justify-center">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-full border-6 border-gray-100 bg-red-600">
                                                    <FaPlus className="text-xs " />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-red-600 px-2 font-semibold mt-3">{value.name}</h3>
                                    <p className="text-sm px-2 pb-2 font-semibold">{value.position}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </Mainlayout>
    )
}

export default OurTeamPage;