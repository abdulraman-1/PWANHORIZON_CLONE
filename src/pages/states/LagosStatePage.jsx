import Mainlayout from "../../Mainlayout";
import GetInTouch from "../../components/GetInTouch";
import Footer from "../../components/Footer";
import EstateCard from "../../components/EstateCard";

const LagosStatePage = () => {
    const estateName = [
        {name: "Irede Estate", path:"/irede-estate"},
        {name: "Duke And Duchess Estate", path:"/duke-and-duchess-estate"},
        {name: "Buckingham Estate", path:"/buckingham-estate"},
        {name: "Horizon Court", path:"/horizon court"},
        {name: "Obibi Eze Estate", path:"/obibi-eze-estate"}
    ]

    return (
        <Mainlayout>
            <div className="w-full xl:w-4/5 mb-24">
                <div className="flex flex-col xl:flex-row gap-4 flex-wrap">
                    {
                        estateName.map((value, index) => (
                            <EstateCard estatename={value.name} key={index} path={value.path} />
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