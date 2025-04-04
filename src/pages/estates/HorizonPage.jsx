import Mainlayout from "../../Mainlayout"
import GetInTouch from "../../components/GetInTouch"
import Footer from "../../components/Footer"
import Form from "../../components/Form"

import horizon from "../../assets/images/flyer/horizon.png"
import horizonform from "../../assets/form/horizonform.pdf"

const HorizonPage = () => {
    const formInfo = [
        {
            flyer: horizon,
            name: "Horizon",
            style: "Court",
            fulldes: "Exquisite living spaces in the",
            des: "heart of the city",
            amenities: [
                "Embrace the fusion of sleek modern design and unparalleled comfort at Horizon Estate. Our community offers a premium living experience, featuring upscale amenities and thoughtfully designed residences. Experience a neighborhood built for both sophistication and convenience.",
                "Provides Luxury Amenities like:"
            ],
            location: [
                "WIFI SERVICE",
                "TECH HUB & CO-WORK SPACE",
                "SPORTS ARENA",
                "SWIMMING POOL",
                "LIBARY",
            ],
            form: horizonform
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

export default HorizonPage