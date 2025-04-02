import Mainlayout from "../Mainlayout";
import CorporateStatement from "../components/CorporateStatement";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import pwanhaven_about from "../assets/images/pwanhaven_about.jpg"; // Correct way to import images in React
import pwanhaven_staff from "../assets/images/pwanhaven_staff.jpg"; // Correct way to import images in React
import line1_des from "../assets/svg_designs/line1_design.svg"
import line2_des from "../assets/svg_designs/line2_design.svg"
import note_des from "../assets/svg_designs/note_design.svg"


const AboutPage = () => {
    return (
        <Mainlayout>
            <div className="w-full xl:w-4/5 mb-24">
                <div className="relative w-full mb-12">
                    {/* Background Image */}
                    <div className="relative w-full h-64 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.4)]"></div>

                        <img
                            src={pwanhaven_about}
                            alt="About PWAN Haven"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <h1 className="text-white px-8 py-3 text-2xl xl:text-4xl font-bold absolute bottom-10 left-0">
                        PWAN HAVEN <span className="text-red-600">INVESTMENT & REALTORS</span> <br /> LIMITED
                        <div className="mt-4">
                            <img src={line1_des} className="w-screen" />
                        </div>
                    </h1>

                </div>

                <div className="relative w-full bg-white px-6 xl:px-24">
                    <div className="absolute right-0 bottom-0 opacity-15 ">
                        <img src={note_des} className="h-52" />
                    </div>
                    <div className="flex flex-col xl:flex-row">
                        {/* Image Section */}
                        <div className="flex-1 p-6 xl:p-24 text-center">
                            <img src={pwanhaven_staff} className="w-full h-auto mx-auto" alt="PWAN Haven Staff" />
                        </div>

                        {/* Text Section */}
                        <div className="flex-1 p-6 xl:p-24">
                            <h2 className="text-2xl xl:text-4xl mb-6 font-bold text-left">PWANHAVEN</h2>
                            <p className="text-xs xl:text-sm text-gray-400 leading-6 font-semibold">
                                PWAN Haven Investment & Realtors Limited Is A Real Estate Network Marketing Company And An Affiliate Of Nigeria Foremost Real Estate Firm, The Pwan Group. Founded On The 8th Of December 2017 And Registered With The Corporate Affairs Commission As Pwan Haven Investment & Realtors Ltd And Also With The Lagos State Real Estate Regulatory Authority With Permit No (bos/1000033/2020). Pwan Haven Is Your One-stop-shop For Properties And Real Estate Investments; Residential And Commercial Lands And Buildings Etc.
                            </p>
                            <div className="mt-6">
                                <img src={line2_des} className="w-full" alt="Line Divider" />
                            </div>
                        </div>
                    </div>

                    {/* Additional Text Section */}
                    <div className="px-6 xl:px-24 pb-6 xl:pb-24">
                        <p className="text-xs xl:text-sm text-gray-400 leading-6 font-semibold">
                            In The Past 7 Years We Have Gone Beyond Making Land And Home Ownership Dream A Reality Into Being A Premium Real Estate Brand Known For Trust, Excellence And Exceptional Delivery. Our Properties And Investment Are Of Great Value And We Offer Very Flexible And Affordable Payment Plans For All Investors. We Have Premium And Fast Selling Estates Situated In Lagos, Warri, Asaba, Uyo, Owerri & Aba.

                            We Are The Owners Of The Luxurious Residential Estate Known As Haven Residence Located At Abijo Gra And Crystal Haven Located At Mobil-road, Ilaje-ajah Lagos. All Our Estates Offer High Returns On Investment And Are Situated In Secured, Serene And Very Fast Developing Areas. Our Success Story Is Centered On A Dynamic, Innovative And Creative Team Striving For Excellence And Continuous Process Improvement, Prompt Service Delivery, Quality Products And Service, Mouth Watering Offerings And Prompt After Sales Services. We Also Go The Extra Mile To Ensure Our Properties Are Safe For Profitable Investments, We Ensure A Stress-free Inspection, Quality Development Projects And Prompt Plot Allocations. These Differentiates Us From Our Competitors And Makes Us The Right Partners To Take You Home.
                        </p>
                        <div className="mt-6">
                            <img src={line2_des} className="w-full" alt="Line Divider" />
                        </div>
                    </div>
                </div>

            </div>
            <CorporateStatement />
            <GetInTouch />
            <Footer />
        </Mainlayout>
    );
}

export default AboutPage;
