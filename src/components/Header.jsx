import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import nav_des from "../assets/svg_designs/navbar_design.svg"
import HamburgerMenu from "./HamburgerMenu";
import { PiUsersThreeFill } from "react-icons/pi";


const Header = ({ isOpen, toggleMenu }) => {
    const location = useLocation();
    let title = location.pathname.split("/")[1]
        .replace(/-/g, " ")  // Replace dashes with spaces
        .toUpperCase();

    if (title === "") {
        title = "PWAN HORIZON";
    }


    return (
        <header className="bg-white fixed top-0 left-0 w-full shadow z-50">
            <div className=" mx-auto px-3 py-5 flex justify-between items-center">
                <div className="flex items-center">
                    {/* Logo */}
                    <div className="mx-auto md:pl-16 md:w-60">
                        <div className="flex w-16 md:w-24 h-6 items-center">
                            <img src="/PWANHORIZON.png" alt="PWANHORIZON LOGO" className="w-full h-auto" />
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="hidden md:block border-l-2 border-red-600 pl-6 py-2 relative">
                        <div className="absolute top-2 -z-10 -right-32 w-42 h-6 bg-gray-300"></div>
                        <span className="text-gray-500 text-[0.7rem] font-bold">{title}</span>
                    </div>
                </div>

                {/* Right side buttons */}
                <div className="flex pr-0 md:pr-16 items-center gap-2 justify-center">
                    <div className="block lg:hidden">
                        <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu}/>
                    </div>
                    <div className="flex items-center relative">
                        <img src={nav_des} className="hidden -z-10 lg:block absolute right-24" />
                        <Link to="/buynow">
                            <button className="flex rounded-sm items-center font-semibold gap-2 bg-red-600 z-1 text-black px-6 py-3 text-[0.6rem] xl:text-sm whitespace-nowrap">
                                <PiUsersThreeFill className="text-white" />
                                <span className="text-xs">BUY NOW</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;