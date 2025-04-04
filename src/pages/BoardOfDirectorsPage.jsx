import Mainlayout from "../Mainlayout";
import CorporateStatement from "../components/CorporateStatement";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import chairman from "../assets/images/chairman.png";
import president from "../assets/images/president.jpg";
import Daniel from "../assets/images/Daniel.jpg";
import peace from "../assets/images/peace.jpg";
import note_des from "../assets/svg_designs/note_design.svg"

const BoardOfDirectorsPage = () => {
    return (
        <Mainlayout>
            <div className="w-full xl:w-4/5 mb-24">
                <div className="relative w-full bg-white px-6 xl:px-24">
                    <div className="absolute right-0 bottom-0 opacity-15 ">
                        <img src={note_des} className="h-52" />
                    </div>
                    <div className="flex py-12 xl:py-24 xl:gap-4 flex-col xl:flex-row">
                        {/* Image Section */}
                        <div className="flex-1 w-full  text-center">
                            <img src={chairman} className="w-full h-auto" alt="PWAN Haven Staff" />
                        </div>

                        {/* Text Section */}
                        <div className="flex-1">
                            <h2 className="text-blue-900 text-2xl text-left mb-4 font-bold xl:text-left">Dr Augustine OziomaOnwumere</h2>
                            <p className="text-sm  text-red-600 font-semibold mb-4">Founders Of PWAN GROUP</p>
                            <p className="text-xs xl:text-sm text-gray-400 leading-6 font-semibold">
                                We As the vision bearer, Dr. Augustine and Dr Jayne Onwumere demonstrated to the World how to successfully operate the business of Real Estate Network Marketing, entrusting the leadership of PWAN GROUP ( with over 70 affiliates Companies) into the hands of members and Promoters of the Business who ones were independent marketers in the organisation that has lead millions of people out of poverty and lack into prosperity and financial freedom just by opening centers that train and recruit novices and people who must discover Real Estate Network Marketing.
                            </p>
                        </div>
                    </div>
                    <div className="flex py-12 xl:py-24 xl:gap-4 flex-col xl:flex-row">
                        {/* Image Section */}
                        <div className="flex-1 w-full  text-center">
                            <img src={president} className="w-full h-auto" alt="PWAN Haven Staff" />
                        </div>

                        {/* Text Section */}
                        <div className="flex-1">
                            <h2 className="text-blue-900 text-2xl text-left mb-4 font-bold xl:text-left">Dr Jane Obioma Onwumere</h2>
                            <p className="text-sm  text-red-600 font-semibold mb-4">Co-Founders Of PWAN GROUP</p>
                            <p className="text-xs xl:text-sm text-gray-400 leading-6 font-semibold">
                                We As the vision bearer, Dr. Augustine and Dr Jayne Onwumere demonstrated to the World how to successfully operate the business of Real Estate Network Marketing, entrusting the leadership of PWAN GROUP ( with over 70 affiliates Companies) into the hands of members and Promoters of the Business who ones were independent marketers in the organisation that has lead millions of people out of poverty and lack into prosperity and financial freedom just by opening centers that train and recruit novices and people who must discover Real Estate Network Marketing.
                            </p>
                        </div>
                    </div>
                    <div className="flex py-12 xl:py-24 xl:gap-4 flex-col xl:flex-row">
                        {/* Image Section */}
                        <div className="flex-1 w-full  text-center">
                            <img src={Daniel} className="w-full h-auto" alt="PWAN Haven Staff" />
                        </div>

                        {/* Text Section */}
                        <div className="flex-1">
                            <h2 className="text-blue-900 text-2xl text-left mb-4 font-bold xl:text-left">Daniel Nnamdi</h2>
                            <p className="text-sm  text-red-600 font-semibold mb-4">MD/CEO</p>
                            <p className="text-xs xl:text-sm text-gray-400 leading-6 font-semibold">
                            Daniel Nnamdi is a visionary leader and an accomplished real estate professional with a proven track record in property development, investment, and urban planning. As the Managing Director/CEO of PWANHORIZON, he/she has been instrumental in transforming Nigeria’s real estate landscape by delivering innovative, sustainable, and high-value property solutions                            </p>
                        </div>
                    </div>
                    <div className="flex py-12 xl:py-24 xl:gap-4 flex-col xl:flex-row">
                        {/* Image Section */}
                        <div className="flex-1 w-full  text-center">
                            <img src={peace} className="w-full h-auto" alt="PWAN Haven Staff" />
                        </div>

                        {/* Text Section */}
                        <div className="flex-1">
                            <h2 className="text-blue-900 text-2xl text-left mb-4 font-bold xl:text-left">Peace O. Nnadi</h2>
                            <p className="text-sm  text-red-600 font-semibold mb-4">Non-Executive Director</p>
                            <p className="text-xs xl:text-sm text-gray-400 leading-6 font-semibold">
                            Peace is a Non-Executive Director at PWANHORIZON, offering strategic guidance and oversight to support the company’s growth in Nigeria’s real estate sector. With expertise in Real Estate, she contributes to sound governance and long-term planning.                            </p>
                        </div>
                    </div>
                    
                </div>

            </div>
            <CorporateStatement />
            <GetInTouch />
            <Footer />
        </Mainlayout>
    )
}



export default BoardOfDirectorsPage