import Mainlayout from "../../Mainlayout"
import GetInTouch from "../../components/GetInTouch"
import Footer from "../../components/Footer"
import Form from "../../components/Form"

import obibi from "../../assets/images/flyer/obibi.png"
import obibiform from "../../assets/form/obibiform.pdf"

const ObibiPage = () => {
    const formInfo = [
        {
            flyer: obibi,
            name: "Obibi Eze",
            style: "Estate",
            fulldes: "A KING IS NOT BORN BUT MADE BY HIS",
            des: "ACTIONS!",
            amenities: [
                "Experience the harmony of modern aesthetics and lavish comfort at Obibi Estate. Our estate provides an exceptional living environment complete with high-end amenities and exquisitely designed residences.",
                "Provides Luxury Amenities like:"
            ],
            location: [
                "WIFI SERVICE",
                "TECH HUB & CO-WORK SPACE",
                "SPORTS ARENA",
                "SWIMMING POOL",
                "LIBARY",
            ],
            form: obibiform
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

export default ObibiPage