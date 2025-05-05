import Mainlayout from "../Mainlayout";
import CorporateStatement from "../components/CorporateStatement";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import founders from "../assets/images/founders.jpg";
import president from "../assets/images/president.jpg";
import Daniel from "../assets/images/Daniel.jpg";
import peace from "../assets/images/peace.jpg";
import note_des from "../assets/svg_designs/note_design.svg"

const BoardOfDirectorsPage = () => {
    return (
        <Mainlayout>
            <div className="w-full xl:w-4/5 mb-24">
                <div className="relative w-full bg-white px-6 xl:px-24">
                    <div className="absolute right-0 bottom-0 opacity-15 ">
                        <img src={note_des} className="h-52" />
                    </div>
                    <div className="flex items-center py-12 xl:py-24 xl:gap-4 flex-col xl:flex-row">
                        {/* Image Section */}
                        <div className="flex-1 text-center">
                            <img src={founders} className="w-full h-auto" alt="PWAN Haven Staff" />
                        </div>

                        {/* Text Section */}
                        <div className="flex-1">
                            <h2 className="text-blue-900 text-2xl text-left mb-4 font-bold xl:text-left">Dr Augustine OziomaOnwumere</h2>
                            <p className="text-sm  text-red-600 font-semibold mb-4">Founders Of PWAN GROUP</p>
                            <p className="text-xs xl:text-sm text-gray-400 leading-6 font-semibold text-justify">
                                The story of Dr. Augustine Ozioma Onwumere and Dr. Jayne Obioma Onwumere is truly inspiring and a testament to resilience, vision, and unwavering commitment to human empowerment. Their journey—from leaving their comfort zones to facing homelessness while still honoring their financial obligations—demonstrates remarkable integrity and perseverance.

                                Key Highlights of Their Journey:
                                Pursuit of Personal Development: Despite challenges, they remained dedicated to self-improvement and business growth, engaging in network marketing and human capacity development.

                                Failure as a Stepping Stone: The collapse of their first venture, Learning World, led to two years of homelessness, yet they prioritized repaying investors—an act of rare ethical responsibility.

                                Birth of PWAN: Out of their struggles emerged Property World Africa Network (PWAN), a groundbreaking empowerment platform that has grown exponentially, now encompassing over 64 affiliate companies and 63 Managing Directors.

                                Expansion and Impact: With over 1,200 staff across Nigeria and beyond, PWAN stands as a beacon of African entrepreneurship and empowerment.

                                Legacy of the Onwumeres:
                                Their story underscores that true success is born from perseverance, ethical leadership, and a commitment to uplifting others. PWAN’s growth reflects not just a business triumph but a movement transforming lives across Africa.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center py-12 xl:py-24 xl:gap-4 flex-col xl:flex-row">
                        {/* Image Section */}
                        <div className="flex-1 w-full  text-center">
                            <img src={president} className="w-full h-auto" alt="PWAN Haven Staff" />
                        </div>

                        {/* Text Section */}
                        <div className="flex-1">
                            <h2 className="text-blue-900 text-2xl text-left mb-4 font-bold xl:text-left">Dr Jane Obioma Onwumere</h2>
                            <p className="text-sm  text-red-600 font-semibold mb-4">Co-Founders Of PWAN GROUP</p>
                            <p className="text-xs xl:text-sm text-gray-400 leading-6 font-semibold text-justify">
                                Dr Jayne Obioma Onwumere (Sun Man of the Year 2024) epitomizes visionary leadership as the Co-founder of Properly World Africa Network (PWAN), the first real estate network marketing company in the World. Since its inception in March 2012 as PWAN HOMES Limited, Dr Jayne has steered the organization to unparalleled success. She is currently serving as the President/Chief Executive Officer and Group Managing Director of PWAN and oversees a vast network comprising 63 Managing Directors and over 1200 full-time staff across 62 affiliate companies. Under her guidance, PWAN has cultivated a dynamic community of over 300,000 independent real estate professionals globally popularly known as PWAN Business Owners (PBOs).

                                Driven by a relentless passion for networking and a strength-based approach, Dr Jayne Obioma Onwumere pioneered an innovative expansion strategy. Three years into the company’s operation, through this expansion initiative, PWAN HOMES formed a strategic partnership with independent consultants to establish additional companies within the PWAN Group. This groundbreaking growth initiative is a move that has no precedence in the history of business in Nigeria and has redefined business paradigms in Nigeria and beyond.

                                Committed to addressing societal challenges, Dr O.J Onwumere launched the PWAN Food Network, aligning with the World Sustainable Development Goals of zero hunger. This initiative, dubbed "The Now Revolution," complements PWAN's vision of promoting home ownership while tackling food insecurity nationwide. This idea with the home ownership vision increased the organizational spread with physical presence in all 36 states of the Federation and the Federal Capital Territory, Abuja, Nigeria.

                                In 2017, being a staunch advocate for women empowerment, “Mama Africa” as fondly called initiated the "Empowerment for all Women" Program, providing financial support to 50 women to start or enhance their businesses. Her empowerment program for women has been strengthened through partnerships with sponsors who are equally dogged and determined to liberate the woman gender from hardship to having a decent life. She has since continued to expand this program, offering monthly pay of N100,000 each to a new set of twelve women in 2020 with plans for further growth in no distant time.

                                Her philanthropic endeavors across Nigeria are unparalleled and extend beyond economic empowerment. This is evidenced in September 2022, through her contribution to renovating and equipping two unmaintained primary schools in Nsukwa, Aniocha South LGA of Delta State Nigeria. Believing in the transformative power of education, provision for furniture, new uniforms and books were not left out in her agenda as Dr Jayne remains dedicated to securing a brighter future for children nationwide.

                                Together with her husband, she pays school fees for so many children, pays house rent for many and keeps a completely open door policy that has made many refer to her as "Mummy, Mama Africa, Global Mummy" etc. All these eventually birthed the launch of the Jayne Onwumere Foundation in March 2024. A service that aims at providing aid, resources, and advocacy to those in need, advancing education, and contributing to the overall well-being of the society.

                                In recognition of her outstanding contributions, Dr. Onwumere was awarded an Honorary Doctorate Degree by the European-American University, Commonwealth of Dominica. Additionally, she was honored as one of the "Top 100 Most Influential Women" by the Lagos State Government for her innovative strategies and impactful empowerment programs in real estate network marketing.

                                She recently received the prestigious "Sun Man of the Year Award 2024," the first of its kind for a woman, "Sun Investor of the Year 2023 award" all from the SUN Publishing in Nigeria, recognizing her significant contributions to human capital investment among distinguished figures in the country. A lifelong learner, Dr. Onwumere has enriched her leadership acumen through programs at the Lagos Business School and the prestigious Owner President Management Program at Harvard University. Married to her best friend and both are blessed with lovely children, she finds fulfillment in family life while continuing to inspire positive change in society through the Jayne Onwumere Foundation, dedicated to promoting education and well-being for all.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center py-12 xl:py-24 xl:gap-4 flex-col xl:flex-row">
                        {/* Image Section */}
                        <div className="flex-1 w-full  text-center">
                            <img src={Daniel} className="w-full h-auto" alt="PWAN Haven Staff" />
                        </div>

                        {/* Text Section */}
                        <div className="flex-1">
                            <h2 className="text-blue-900 text-2xl text-left mb-4 font-bold xl:text-left">Daniel Nnadi</h2>
                            <p className="text-sm  text-red-600 font-semibold mb-4">MD/CEO</p>
                            <p className="text-xs xl:text-sm text-gray-400 leading-6 font-semibold text-justify">
                                NNADI Daniel Osonduagwike (Global Salesman), is a seasoned Real Estate Investment Advisory Professional, an active citizen, an ardent advocate of the first world mindset, a strong proponent of transformational values, and servant leader with over 14 years professional experience cutting across Human Resources, Executive Management, Real Estate, Sales and Marketing, and Leadership Development.

                                Daniel graduated with a BA. (Hons.) in Fine and Applied Art with options in (Graphics and Advertising) from Imo State University, a Mini-MBA in General Business Administration from Tekedia Institute Boston, a PMP certified project manager, a Certified Negotiation Specialist, a trained Ec-council CRM, and an alumnus of Junior Chamber International Leadership Academy.

                                In 2010 he started his career in the HR department of United Bank for Africa HQ Marina, and led a team of colleagues in UBA Nigeria staff guarantor’s validation project. In 2012, he took up the opportunity to express his intent in the real estate sector by joining the sales force of PWAN Group. Through the platform created by PWAN, Daniel gained momentum and has today evolved with rooted knowledge in the real estate industry by servicing a pool of clientele both within and the diaspora.

                                In March 2019, Daniel was appointed into the board of PWAN LEKKI as the Executive Director/Chief Operations Officer, in 2024 he was elevated to lead in the capacity of MD/CEO of PWAN Horizon where he oversees the daily operations and activities of the company while envisioning and implementing growth strategies. For a period spanning 13 years working with PWAN, first within her independent sales force, he has acquired and delivered diverse training locally and internationally and has widely traveled under the auspices of the company.

                                As an active citizen and a member of Junior Chamber International, He served as the 21st President of Lagos Coral chapter in 2021. As part of recognition for his outstanding and continued service, he was awarded with JCI Senatorship, a life membership honor. He holds a diploma in Ministerial leadership from Proof Producers Bible School, he is a graduate of Leadership Masterclass at GOTNI Leadership Centre under the mentorship of Dr. Linus Okorie. He did an Oak seed Executive Leadership Course at Institute for National Transformation.

                                He remained career focused and believes in the philosophy of the “the road less traveled”. He loves reading and is obsessed with good music.

                                His Pulse: Advocating the oasis of the first world mindset in the third world Nations.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center py-12 xl:py-24 xl:gap-4 flex-col xl:flex-row">
                        {/* Image Section */}
                        <div className="flex-1 w-full  text-center">
                            <img src={peace} className="w-full h-auto" alt="PWAN Haven Staff" />
                        </div>

                        {/* Text Section */}
                        <div className="flex-1">
                            <h2 className="text-blue-900 text-2xl text-left mb-4 font-bold xl:text-left">Peace O. Nnadi</h2>
                            <p className="text-sm  text-red-600 font-semibold mb-4">Non-Executive Director</p>
                            <p className="text-xs xl:text-sm text-gray-400 leading-6 font-semibold text-justify">
                                Nnadi Peace Oluebubechukwu is a seasoned Marketing and Real Estate professional, an experienced fashion designer and tutor with over 8 years professional experience cutting across Brand Marketing, Real Estate Marketing and Fashion Designing.



                                She started her Career in 2016 in the sales and marketing department of Easylife Microfinance Bank where her knowledge about marketing was deployed to transform the company’s customer base and its cash flow. In 2017 she went ahead to work in a branding firm (JUST BRAND IT) as the executive marketing manager before she was called to serve (NYSC) where she taught as the marketing teacher.



                                Peace was privileged to attend FGC Okigwe where she earned her SSCE. She proceeded to Abia State University and graduated with a BSc (Hons) in Marketing. Her passion for fashion and its enthusiasm led her to attend the prestigious Prudential Fashion Academy where she advanced her skills in Fashion designing haven initially gained the knowledge during NYSC.



                                In 2018 she launched her fashion brand. Her quest to make a difference drove her in search of opportunities that will accommodate her passion for fashion and her career in marketing. In 2019 she joined the PWAN Group after briefly working for a Real Estate company in Lagos. In her first year in PWAN having understood the company's reward system, she has closed multiple deals and also emerged as one of the Group’s performance bonus earners.



                                In 2024 she was appointed Non-Executive Director in PWAN Horizon.

                                She is a graduate of the Institute for National Transformation's History Makers.



                                Peace is a passionate, positive, and energy filled personality who loves good music, dancing and watching movies.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
            <CorporateStatement />
            <GetInTouch />
            <Footer />
        </Mainlayout>
    )
}



export default BoardOfDirectorsPage