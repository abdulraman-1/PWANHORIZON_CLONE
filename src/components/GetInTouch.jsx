import illus from "../assets/svg_designs/illus_design.svg"

const GetInTouch = () => {
    return (
        <div className="w-full xl:w-4/5 relative overflow-hidden bg-red-600 p-8 group">
            {/* Background Image */}
            <div className="absolute w-[60rem] -top-10 right-44 transition-transform duration-500 ease-in-out group-hover:scale-140">
                <img src={illus} className="h-auto w-full opacity-30" />
            </div>
            
            <div className="flex justify-between flex-col  items-start md:flex-row md:items-center z-10 relative">
                <h2 className="text-lg font-bold">
                    Want To Know More About Our Properties?
                </h2>
                <button className="bg-black text-white hover:text-gray-300 active:text-gray-300 mt-3 md:mt-0 px-5 py-3 text-xs whitespace-nowrap">
                    <a href="https://api.whatsapp.com/send/?phone=2348033036833&text&type=phone_number&app_absent=0" target="_blank">Get In Touch</a>
                </button>
            </div>
        </div>
    );
}

export default GetInTouch;
