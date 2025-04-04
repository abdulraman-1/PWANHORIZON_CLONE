import Mainlayout from "../../Mainlayout"
import GetInTouch from "../../components/GetInTouch"
import Footer from "../../components/Footer"
import Form from "../../components/Form"

import haven from "../../assets/images/flyer/haven.jpg"
import dukeform from "../../assets/form/dukeform.pdf"

const DukePage = () => {
    const formInfo = [
        {
            flyer: haven,
            name: "Duke And Duchess",
            style: "Estate",
            fulldes: "A Legacy Waiting To Be",
            des: "Captured!!!",
            amenities: [
                "Uncover the blend of innovative design and sumptuous comfort at Duke And Duchess Estate. Our estate offers an exclusive living experience, featuring state-of-the-art amenities and impeccably designed homes. Revel in a community crafted for both luxury and ease.",
                "Whether you’re planning to settle in or invest, Duke And Duchess Estate represents the pinnacle of refined urban living.",
                "Located In close proximity to notable landmarks like:"
            ],
            location: [
                "New Epe Toll Gate",
                "Micheal Otedola College of Education",
                "New Epe Ijebu-Ode Expressway",
                "Yabatech (Epe Campus)",
                "Lekki Int'l Airport",
                "Nigerian Breweries"
            ],
            form: dukeform
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

export default DukePage