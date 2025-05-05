import Mainlayout from "../Mainlayout";
import CorporateStatement from "../components/CorporateStatement";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import pwanhaven_about from "../assets/images/pwanhaven_about.png"; // Correct way to import images in React
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
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <h1 className="text-white px-8 py-3 text-2xl xl:text-4xl font-bold absolute bottom-10 left-0">
                        PWAN HORIZON <span className="text-red-600">REALTY & AGRO</span> <br /> LIMITED
                        <div className="mt-4">
                            <img src={line1_des} className="w-screen" />
                        </div>
                    </h1>

                </div>

                <div className="relative w-full bg-white pt-24 px-6 xl:px-18">
                    <div className="absolute right-0 bottom-0 opacity-15 ">
                        <img src={note_des} className="h-52" />
                    </div>
                    <div className="flex flex-col xl:flex-row">
                        {/* Image Section */}
                        <div className="flex-1  my-auto w-full h-full text-center">
                            <img src={pwanhaven_staff} className="w-full h-auto mx-auto" alt="PWAN Haven Staff" />
                        </div>

                        {/* Text Section */}
                        <div className="flex-1 py-6 xl:pl-6 xl:py-24">
                            <h2 className="text-2xl xl:text-4xl mb-6 font-bold text-left">PWAN HORIZON</h2>
                            <p className="text-xs xl:text-sm text-gray-400 leading-6 font-semibold">
                                PWAN Horizon Realty and Agro Ltd. is a metropolitan first world minded Real Estate marketing and development company focused on urban gentrification and rural linkage. We are poised to create eco-friendly and sustainable environments for humanity and deliver significant values and ROI to our stakeholders while contributing to the reduction in the housing deficit. We make home ownership dream a reality and at the same time enhance food supply through our Agro focused farming.
                            </p>
                            <div className="mt-6">
                                <img src={line2_des} className="w-full" alt="Line Divider" />
                            </div>
                        </div>
                    </div>

                    {/* Additional Text Section */}
                    <div className="pb-6 xl:pb-18 ">
                        <p className="text-xs  xl:text-sm text-gray-400 leading-6 font-semibold">
                            At PWAN Horizon, we believe that there is a strong connection between the soul of a man and the environment he lives in, he thrives successfully if he lives in an eco-friendly and sustainable city. This is why we are committed to urban renewal and rural linkage.
                            We have delivered investments and home ownership opportunities to over 5000 clientele across the globe, and as a people centric organization focused on empowering greatness, we have empowered over 300,000 active real estate professionals across the globe.
                            Armed with over 12 years of industry and management experience, we are committed and are driven by purpose to deliver home ownership and create wealth.
                        </p>
                        <div className="mt-6 mb-22">
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
