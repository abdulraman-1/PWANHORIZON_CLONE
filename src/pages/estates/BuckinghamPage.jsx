import Mainlayout from "../../Mainlayout"
import GetInTouch from "../../components/GetInTouch"
import Footer from "../../components/Footer"
import Form from "../../components/Form"

import buckingham from "../../assets/images/flyer/buckingham.png"
import buckinghamform from "../../assets/form/buckinghamform.pdf"

const BuckinghamPage = () => {
    const formInfo = [
        {
            flyer: buckingham,
            name: "Buckingham",
            style: "Estate",
            fulldes: "Happiness truly is a function of",
            des: "Where You Live",
            amenities: [
                "Discover the perfect blend of modern architecture and luxurious comfort at Burckingham Estate. Our estate offers an exclusive living experience with high-end amenities and meticulously crafted residences.",
                "Located In close proximity to notable landmarks like:"
            ],
            location: [
                "Azagba Mixed Secondary School",
                "Delta State Polytechnique",
                "Asaba International Airport",
                "Wintech Gerald Company",
                "Federal Housing Estate"
            ],
            form: buckinghamform
        }
    ];
    

    return (
        <Mainlayout>
            <Form estateflyer={formInfo[0].flyer} estatename={formInfo[0].name} estatestyle={formInfo[0].style} estatefulldes={formInfo[0].fulldes} estatedes={formInfo[0].des} estateamenities={formInfo[0].amenities} estatelocation={formInfo[0].location} estateform={formInfo[0].form} />
            <GetInTouch />
            <Footer />
        </Mainlayout>
    )
}

export default BuckinghamPage