import Mainlayout from "../../Mainlayout"
import GetInTouch from "../../components/GetInTouch"
import Footer from "../../components/Footer"
import Form from "../../components/Form"

import irede from "../../assets/images/flyer/irede.png"
import iredeform from "../../assets/form/iredeform.pdf"

const IredePage = () => {
    const formInfo = [
        {
            flyer: irede,
            name: "Irede",
            style: "Estate",
            fulldes: "Experience Luxury",
            des: "Living",
            amenities: [
                "Discover the perfect union of contemporary architecture and luxurious comfort at Irede Estate. Our estate delivers an exclusive lifestyle with top-of-the-line amenities and meticulously crafted homes. Immerse yourself in a community designed for elegance and practicality.",
                "Located In close proximity to notable landmarks like:"
            ],
            location: [
                "LA CAMPAGNE TROPICANA",
                "DANGOTE REFINERY",
                "LEKKI DEEP SEAPORT",
                "LEEKI FREE TRADE ZONE",
                "NEW LEKKI INTERNATIONAL AIRPORT"
            ],
            form: iredeform
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

export default IredePage