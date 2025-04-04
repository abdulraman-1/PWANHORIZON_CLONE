import note_des from "../assets/svg_designs/note_design.svg";
import box_des from "../assets/svg_designs/box_design.svg";
import { IoPin } from "react-icons/io5";


const Form = ({ estateflyer, estatename, estatestyle, estatedes, estatefulldes, estateamenities, estatelocation, estateform }) => {
    return (
        <div className="bg-white p-10 xl:p-20 w-full xl:w-4/5 mb-24 relative">
            {/* Background Designs */}
            <div className="absolute z-10 right-0 bottom-0 opacity-15 pointer-events-none">
                <img src={note_des} className="h-52" />
            </div>
            <div className="absolute z-10 right-0 top-0 opacity-80 pointer-events-none">
                <img src={box_des} className="h-22" />
            </div>
            <div className="">

                {/* Section Title */}
                <h2 className="text-4xl font-bold mb-10">
                    {estatename} <span className="text-red-600">{estatestyle}</span>
                </h2>

                <div className="w-full xl:w-3/5 mb-12">
                    <img src={estateflyer} className="h-auto w-full" />
                </div>

                <h2 className="text-2xl font-bold mb-8">
                    {estatefulldes} <span className="text-red-600">{estatedes}</span>
                </h2>

                {
                    estateamenities.map((value, index) => (
                        <p key={index} className="text-gray-500 mb-2 text-sm font-semibold">{value}</p>
                    ))

                }

                {
                    estatelocation.map((value, index) => (
                        <p key={index} className="flex gap-1 items-center text-gray-500 mb-2 text-sm font-semibold">
                            <IoPin className="text-red-600 " />
                            {value}
                        </p>
                    ))
                }

                <p className="text-gray-500 my-4  font-semibold">HURRY, SUBSCRIBE NOW WHILE OFFER LAST!!</p>

                <div className="flex mt-12 group z-20">
                    <div className="w-0 group-active:w-12 group-hover:w-12 transition-normal duration-100 bg-gray-600"></div>
                    <a href={estateform} target="_blank">
                        <button className="text-xs whitespace-nowrap px-6 py-4 font-semibold bg-red-600 text-white">
                            DOWNLOAD SUBSCRIPTION FORM
                        </button>
                    </a>
                </div>

            </div>

        </div>
    )
}

export default Form