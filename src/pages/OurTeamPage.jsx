import Mainlayout from "../Mainlayout";
import Footer from "../components/Footer";
import note_des from "../assets/svg_designs/note_design.svg";
import box_des from "../assets/svg_designs/box_design.svg";
import h1 from "../assets/images/team/h1.jpg"
import h2 from "../assets/images/team/h2.jpg"
import h3 from "../assets/images/team/h3.jpg"
import h4 from "../assets/images/team/h4.jpg"
import h5 from "../assets/images/team/h5.jpg"
import h6 from "../assets/images/team/h6.jpg"
import h7 from "../assets/images/team/h7.jpg"
import h8 from "../assets/images/team/h8.jpg"
import h9 from "../assets/images/team/h9.jpg"
import h10 from "../assets/images/team/h10.jpg"
import h11 from "../assets/images/team/h11.jpg"
import h12 from "../assets/images/team/h12.jpg"

const OurTeamPage = () => {
    const team = [
        { image: h1, name: "Gerard Udeokoye", position: "EXECUTIVE DIRECTOR" },
        { image: h2, name: "Efe Ejeh", position: "HOD, Human Resources/ Admin" },
        { image: h3, name: "Micheal Okesanya", position: "HOD, ACCOUNTS" },
        { image: h4, name: "Emmanuel Esangbedo", position: "Chief Operating Officer" },
        { image: h4, name: "Precious Okpaje", position: "Chief Operating Officer" },
        { image: h6 , name: "Emmanuella Nzenwa", position: "Research & Development" },
        { image: h7 , name: "Oteri Eseoghene", position: "HOD, Media Department" },
        { image: h8 , name: "Murphy Ibeh", position: "AUDITOR" },
        { image: h9 , name: "Kevwe Onovughakpo", position: "BDE Asaba" },
        { image: h10 , name: "Nelson Ita", position: "BDE UYO" },
        { image: h11 , name: "Anthony Sanco", position: "BDE WARRI" },
        { image: h12 , name: "Donald Okereke", position: "BDE OWERRI" },
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
                                <div key={index} className="bg-white rounded-b-sm w-full xl:w-[32.5%] p-2 border border-gray-300">
                                    <img src={value.image} className="max-w-full h-auto" />
                                    <h3 className="text-red-600 font-semibold mt-3">{value.name}</h3>
                                    <p className="text-sm font-semibold">{value.position}</p>
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