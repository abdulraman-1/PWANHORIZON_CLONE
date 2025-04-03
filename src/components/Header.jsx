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
        title = "PWANHORIZON";
    }


    return (
        <header className="bg-white fixed top-0 left-0 w-full shadow z-50">
            <div className="max-w-[91.5%] mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    {/* Logo */}
                    <div className="mr-10">
                        <div className="flex items-center">
                            <img src="/PWANHORIZON.png" alt="PWANHORIZON LOGO" className="h-12" />
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="hidden md:block border-l-2 border-red-600 pl-6 py-2 relative">
                        <div className="absolute top-2 -z-10 -right-32 w-42 h-6 bg-gray-300"></div>
                        <span className="text-gray-500 text-sm font-bold">{title}</span>
                    </div>
                </div>

                {/* Right side buttons */}
                <div className="flex items-center justify-center gap-x-3.5">
                    <div className="h-10 w-10 block md:hidden">
                        <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu}/>
                    </div>
                    <div className="flex items-center relative">
                        <img src={nav_des} className="hidden -z-10 md:block absolute right-24" />
                        <Link>
                            <button className="flex items-center font-medium gap-1 bg-red-600 z-1 text-black px-6 py-2 text-sm whitespace-nowrap">
                                <PiUsersThreeFill />
                                LET'S CHAT
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;