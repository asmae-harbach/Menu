import Nav from "../component/Nav"
import imagebg from '../assets/aboutpage.png'
import image1 from '../assets/img1.png'
import image2 from '../assets/img2.png'
import image3 from '../assets/img3.png'


const About = () => {
    return(
        <div className="relative">
            <Nav/>
            <div className="absolute inset-0 h-screen w-full md:flex">
                <div className="md:w-[50%] bg-color2 h-full flex flex-col justify-center pt-32">
                    <div className="flex justify-center items-center gap-5" >
                        <img className="w-[140px] h-[120px] md:w-[180px] md:h-[150px]" src={image1} alt="" />
                        <img className="w-[140px] h-[120px] md:w-[180px] md:h-[150px]" src={image2} alt="" />
                        <img className="w-[140px] h-[120px] md:w-[180px] md:h-[150px]" src={image3} alt="" />
                    </div>
                    <div className="text-white px-5 py-9">
                        <h1 className="text-[30px] md:text-[35px] font-semibold pb-5" >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
                        <hr className="w-[60px]" />
                        <p className="py-5 text-[13px] text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur saepe est nobis doloremque provident? Officiis, quidem eligendi. Dolore aut consequatur aperiam qui perferendis repudiandae eius harum nemo nesciunt dolorem ab tempora vero fuga magni nisi, iure aspernatur quis dolores praesentium! Vitae in maxime magnam eos obcaecati veniam dolorum molestiae?</p>
                    </div>
                </div>
                <div className="md:w-[50%] bg-cover bg-center h-full flex items-end p-5 text-white font-semibold " style={{backgroundImage : `url(${imagebg})`}}>
                    <p className="bg-ma-couleur bg-opacity-50 p-5 shadow-lg text-[12px] text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur saepe est nobis doloremque provident? Officiis, quidem eligendi. Dolore aut consequatur aperiam qui perferendis repudiandae eius harum nemo nesciunt dolorem ab tempora vero fuga magni nisi, iure aspernatur quis dolores praesentium! Vitae in maxime magnam eos obcaecati veniam dolorum molestiae?</p>
                </div>
            </div>
        </div>

    )
}
export default About