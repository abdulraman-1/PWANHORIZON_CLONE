import Mainlayout from "../Mainlayout";
import CorporateStatement from "../components/CorporateStatement";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import founder from "../assets/images/founder.jpg";
import chairman from "../assets/images/chairman.jpg";
import fed from "../assets/images/fed.jpg";
import note_des from "../assets/svg_designs/note_design.svg"

const BoardOfDirectorsPage = () => {
    return (
        <Mainlayout>
            <div className="w-full xl:w-4/5 mb-24">
                <div className="relative w-full bg-white px-6 xl:px-24">
                    <div className="absolute right-0 bottom-0 opacity-15 ">
                        <img src={note_des} className="h-52" />
                    </div>
                    <div className="flex flex-col xl:flex-row">
                        {/* Image Section */}
                        <div className="flex-1 p-6 xl:p-24 text-center">
                            <img src={founder} className="w-full h-auto max-w-lg mx-auto" alt="PWAN Haven Staff" />
                        </div>

                        {/* Text Section */}
                        <div className="flex-1 p-6 xl:p-24">
                            <h2 className="text-blue-700 text-lg xl:text-2xl text-left mb-4 font-bold xl:text-left">Dr Augustine Ozioma & Dr Mrs Jayne Onwumere</h2>
                            <p className="text-sm  text-red-600 font-semibold mb-4">Founders Of PWAN GROUP</p>
                            <p className="text-xs xl:text-sm text-gray-400 leading-6 font-semibold">
                                We As the vision bearer, Dr. Augustine and Dr Jayne Onwumere demonstrated to the World how to successfully operate the business of Real Estate Network Marketing, entrusting the leadership of PWAN GROUP ( with over 70 affiliates Companies) into the hands of members and Promoters of the Business who ones were independent marketers in the organisation that has lead millions of people out of poverty and lack into prosperity and financial freedom just by opening centers that train and recruit novices and people who must discover Real Estate Network Marketing.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row">
                        {/* Image Section */}
                        <div className="flex-1 p-6 xl:p-24 text-center">
                            <img src={chairman} className="w-full h-auto max-w-lg mx-auto" alt="PWAN Haven Staff" />
                        </div>

                        {/* Text Section */}
                        <div className="flex-1 p-6 xl:p-24">
                            <h2 className="text-blue-700 text-lg xl:text-2xl text-left mb-4 font-bold xl:text-left">Dr Augustine Ozioma & Dr Mrs Jayne Onwumere</h2>
                            <p className="text-sm text-red-600 font-semibold mb-4">Chairman Of PWAN GROUP</p>
                            <p className="text-xs xl:text-sm text-gray-400 leading-6 font-semibold">
                                Pwan Haven Investment & Realtors Limited Is A Real Estate Network Marketing Company And An Affiliate Of Nigeria Foremost Real Estate Firm, The Pwan Group. Founded On The 8th Of December 2017 And Registered With The Corporate Affairs Commission As Pwan Haven Investment & Realtors Ltd And Also With The Lagos State Real Estate Regulatory Authority With Permit No (bos/1000033/2020). Pwan Haven Is Your One-stop-shop For Properties And Real Estate Investments; Residential And Commercial Lands And Buildings Etc.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row">
                        {/* Image Section */}
                        <div className="flex-1 p-6 xl:p-24 text-center">
                            <img src={fed} className="w-full h-auto max-w-lg mx-auto" alt="PWAN Haven Staff" />
                        </div>

                        {/* Text Section */}
                        <div className="flex-1 p-6 xl:p-24">
                            <h2 className="text-blue-700 text-lg xl:text-2xl mb-4 font-bold text-left xl:text-left">Dr Augustine Ozioma & Dr Mrs Jayne Onwumere</h2>
                            <p className="text-sm text-red-600 font-semibold mb-4">MD/CEO Of PWAN GROUP</p>
                            <p className="text-xs xl:text-sm text-gray-400 leading-6 font-semibold">
                                Dr. Frederick Efeoghene Okpaje hails from Delta State, Nigeria. He holds a BSC degree in electrical engineering from the University Of Benin, Edo State and a higher national diploma in project management from Ulster University Business School, Belfast, United Kingdom.

                                He went further and bagged another diploma in business management from Kilroys College, Dublin, Ireland. He is also an alumnus of the Lagos Business School. He has attended several executive trainings with the prestigious Pan African University. He holds an honorary doctorate degree award in Human Resources, Project Management, Real Estate Development and Corporate Governance from European American University, Republic of Dominica.

                                He is an highly enthusiastic project management mogul and a professional realtor. With over 10 Years experience in the Real Estate industry and Management, he has strong leadership and communication skill with proven capability in strategic work. He is an effective Coach, Philanthropist, people and sales man with consistent success in project and sales deliverables. He has won several awards locally and internationally. Presently, Dr. Frederick Efeoghene Okpaje holds the office of the Executive Vice Chairman of PWAN Group, The Managing Director/ CEO Of PWAN Haven, while also acting as the Chairman Of PWAN Elite, PWAN Castle, PWAN Blossom & PWAN Success.
                            </p>
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