import Circle from "./components/Circle"
import Rec from "./components/Rectangle"

const Mainlayout = ({ children }) => {
    return (
        <main className="relative overflow-hidden w-full md:w-[calc(100%-16rem)] md:ml-auto py-0 md:px-8 md:py-16 mt-8">
            <Circle />
            <Rec />
            {children}
        </main>
    );
}


export default Mainlayout;
