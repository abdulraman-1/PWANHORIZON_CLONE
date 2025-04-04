import { Link } from "react-router-dom";
import { BsHouse } from "react-icons/bs";

const EstateCard = ({ estatename, path }) => {
    return (
        <Link to={path}>
            <div className="bg-white relative flex items-center gap-4 p-6 overflow-hidden">
                <div className="absolute -top-5 -right-6 w-16 h-16 rounded-b-full rounded-l-full bg-gray-100">

                </div>
                <div className="bg-red-600 p-3 text-white text-lg border-8 border-gray-300 rounded-md">
                    <BsHouse className="text-2xl" />
                </div>
                <div className="z-10">
                    <h3 className="font-bold text-2xl uppercase">{estatename}</h3>
                </div>
            </div>
        </Link>
    )
}

export default EstateCard