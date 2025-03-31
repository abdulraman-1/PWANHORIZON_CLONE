import { motion } from "motion/react";

const Circle = () => {
    return (
        <div className="fixed -z-40 -right-90 flex items-center justify-center">
            {/* Rotating Outer Circle */}
            <motion.div
                animate={{ rotate: 360 }} 
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="relative w-180 h-180 rounded-full bg-white flex items-center justify-center"
            >
                {/* Small dot on the edge of the Outer Circle */}
                <div className="absolute top-80 left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-400"></div>


                {/* Rotating Inner Circle */}
                <motion.div 
                    animate={{ rotate: -360 }} 
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="relative w-110 h-110 rounded-full bg-gray-300 flex items-center justify-center"
                >
                    {/* Small dot on the edge of the Inner Circle */}
                    <div className="absolute top-50 left-0 -translate-x-1/2 w-3 h-3 rounded-full bg-red-600"></div>

                    {/* Static Centered Circle */}
                    <div className="w-30 h-30 rounded-full bg-red-600 flex items-center justify-center">
                        <div className="w-10 h-1 bg-gray-400"></div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Circle;
