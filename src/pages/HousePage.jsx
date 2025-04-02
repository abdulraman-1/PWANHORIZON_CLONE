import Mainlayout from "../Mainlayout"
import GetInTouch from "../components/GetInTouch"
import Footer from "../components/Footer"
import Form from "../components/Form"

import haven from "../assets/images/flyer/haven.jpg"

const HousePage = () => {
    const formInfo = [
        {
            flyer: haven,
            name: "Haven",
            style: "Residence",
            fulldes: "Experience Luxury",
            des: "Living",
            amenities: [
                "When It comes to Luxury and Lavish Lifestyle, Lush Haven Estate Caps it All.... Located at Abijo G.R.A Lagos, this property presents the best option if A Lavish Lifestyle is what you desire!",
                "Located In close proximity to notable landmarks like:"
            ],
            location: [
                "Chalcedony School",
                "Caleb British Intl School",
                "Corona Intl School",
                "Novare Shopping Mall and Many More"
            ]
        }
    ];
    

    return (
        <Mainlayout>
            <Form estateflyer={formInfo[0].flyer} estatename={formInfo[0].name} estatestyle={formInfo[0].style} estatefulldes={formInfo[0].fulldes} estatedes={formInfo[0].des} estateamenities={formInfo[0].amenities} estatelocation={formInfo[0].location} />
            <GetInTouch />
            <Footer />
        </Mainlayout>
    )
}

export default HousePage