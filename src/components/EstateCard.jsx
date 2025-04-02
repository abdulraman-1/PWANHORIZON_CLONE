
import { BsHouse } from "react-icons/bs";

const EstateCard = ({estatename}) => {
    return (
        <div className="bg-white relative flex items-center gap-4 p-6 overflow-hidden">
            <div className="absolute top-0 -right-3 w-12 h-12 rounded-b-full rounded-l-full bg-gray-100">
                <span className="text-sm font-black"></span>
            </div>
            <div className="bg-red-600 p-3 text-white text-lg border-8 border-gray-300 rounded-md">
                <BsHouse className="text-2xl" />
            </div>
            <div className="z-10">
                <h3 className="font-bold text-4xl uppercase">{estatename}</h3>
            </div>
        </div>
    )
}

export default EstateCard