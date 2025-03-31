import nav_des from "../assets/svg_designs/navbar_design.svg"
import HamburgerMenu from "./HamburgerMenu";

const Header = ({ isOpen, setIsOpen }) => {
    return (
        <header className="bg-white fixed top-0 left-0 w-full shadow z-50">
            <div className="max-w-[91.5%] mx-auto px-4 py-2 flex justify-between items-center">
                <div className="flex items-center">
                    {/* Logo */}
                    <div className="mr-10">
                        <div className="flex items-center">
                            <img src="/PWANHORIZON.png" alt="PWANHORIZON LOGO" className="h-12" />
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="hidden md:block border-l-2 border-red-600 pl-6 py-2 ">
                        <span className="text-gray-700">PWAN HAVEN</span>
                    </div>
                </div>

                {/* Right side buttons */}
                <div className="flex gap-x-3.5">
                    <div className="h-10 w-10 block md:hidden">
                        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                    <div className="flex items-center relative">
                        <img src={nav_des} className="hidden md:block absolute right-24" />
                        <button className="bg-red-600 z-1 text-white px-6 py-2">
                            LET'S CHAT
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;