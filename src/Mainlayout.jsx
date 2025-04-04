import Circle from "./components/Circle"
import Rectangle from "./components/Rectangle"

const Mainlayout = ({ children }) => {
    return (
        <main className="relative overflow-hidden w-full lg:w-[calc(100%-16rem)] md:ml-auto py-14 lg:px-8 lg:py-16 mt-8">
            <Circle />
            <Rectangle />
            {children}
        </main>
    );
}


export default Mainlayout;
