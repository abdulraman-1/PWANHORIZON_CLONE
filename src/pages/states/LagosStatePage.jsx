import Mainlayout from "../../Mainlayout";
import GetInTouch from "../../components/GetInTouch";
import Footer from "../../components/Footer";
import EstateCard from "../../components/EstateCard";

const LagosStatePage = () => {
    const estateName = [
        {name: "legacy haven"},
        {name: "legacy haven"},
        {name: "legacy haven"},
        {name: "legacy haven"},
        {name: "legacy haven"},
    ]

    return (
        <Mainlayout>
            <div className="w-full xl:w-4/5 mb-24">
                <div className="flex flex-col xl:flex-row gap-4 flex-wrap">
                    {
                        estateName.map((value, index) => (
                            <EstateCard estatename={value.name} key={index} />
                        ))
                    }
                </div>
            </div>
            <GetInTouch />
            <Footer />
        </Mainlayout>
    );
}

export default LagosStatePage;