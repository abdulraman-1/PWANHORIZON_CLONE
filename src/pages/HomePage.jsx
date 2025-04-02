import Mainlayout from "../Mainlayout"
import Footer from "../components/Footer";
import video from "../assets/video_bg.mp4"

const HomePage = () => {
    return (
        <Mainlayout>
            <div className="w-full mb-26 xl:mb-0 bg-gray-700 relative">
                <div className="absolute left-12 top-12 hidden xl:block  w-32 h-32 border-gray-200 border-t-2 border-l-2"></div>
                <div className="absolute left-12 bottom-12 hidden xl:block  w-32 h-32 border-gray-200 border-b-2 border-l-2"></div>
                

                {/* OVERLAY */}
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.4)]"></div>
                <video src={video} autoPlay loop muted className="w-full h-full object-cover" />

                {/* TEXT CONTENT */}
                <div className="absolute w-full h-full flex flex-col items-center justify-center text-white top-0">
                    <div className="h-0.5 bg-red-600 w-16 mb-8"></div>
                    <p className="text-xl xl:text-2xl font-bold">PWAN HAVEN</p>
                    <h1 className="text-center text-3xl xl:text-6xl font-bold">
                        WELCOME
                        <br />
                        TO
                        <br />
                        PWAN HAVEN
                    </h1>
                    <div className="flex items-center justify-center h-0.5 bg-gray-500 w-42 mt-8">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div>
                    </div>

                </div>
            </div>
            <Footer />
        </Mainlayout>
    )
}

export default HomePage;