import note_des from "../assets/svg_designs/note_design.svg";
import box_des from "../assets/svg_designs/box_design.svg";
import { IoPin } from "react-icons/io5";


const Form = ({ estateflyer, estatename, estatestyle, subform, estatedes, estatefulldes, estateamenities, estatelocation }) => {
    return (
        <div className="bg-white p-10 xl:p-20 w-full xl:w-4/5 mb-24 relative">
            {/* Background Designs */}
            <div className="absolute z-10 right-0 bottom-0 opacity-15">
                <img src={note_des} className="h-52" />
            </div>
            <div className="absolute z-10 right-0 top-0 opacity-80">
                <img src={box_des} className="h-22" />
            </div>
            <div className="">

                {/* Section Title */}
                <h2 className="text-3xl font-semibold mb-10">
                    {estatename} <span className="text-red-600">{estatestyle}</span>
                </h2>

                <div className="w-full xl:w-3/5 mb-12">
                    <img src={estateflyer} className="h-auto w-full" />
                </div>

                <h2 className="text-3xl font-semibold mb-8">
                    {estatefulldes} <span className="text-red-600">{estatedes}</span>
                </h2>

                {
                    estateamenities.map((value, index) => (
                        <p key={index} className="text-gray-500 mb-2 font-semibold">{value}</p>
                    ))

                }

                {
                    estatelocation.map((value, index) => (
                        <p key={index} className="flex gap-1 items-center text-gray-500 mb-2 font-semibold">
                            <IoPin className="text-red-600 " />
                            {value}
                        </p>
                    ))
                }

                {/* <p className="text-gray-500 mb-2 font-semibold">When It comes to Luxury and Lavish Lifestyle, Lush Haven Estate Caps it All.... Located at Abijo G.R.A Lagos, this property presents the best option if A Lavish Lifestyle is what you desire!</p>
                <p className="text-gray-500 mb-2 font-semibold">Chalcedony School</p>
                <p className="text-gray-500 mb-2 font-semibold">Caleb British Intl School</p>
                <p className="text-gray-500 mb-2 font-semibold">Corona School</p>
                <p className="text-gray-500 mb-2 font-semibold">Novare Shopping Mall and Many More!</p> */}
                <p className="text-gray-500 mb-2 font-semibold">HURRY, SUBSCRIBE NOW WHILE OFFER LAST!!</p>

                <div className="flex mt-12 group">
                    <div className="w-0 group-hover:w-12 transition-all duration-300 bg-gray-600"></div>
                    <a href={subform}>
                        <button className="text-xs px-6 py-4 font-semibold bg-red-600 text-white">
                            DOWNLOAD SUBSCRIPTION FORM
                        </button>
                    </a>
                </div>

            </div>

        </div>
    )
}

export default Form