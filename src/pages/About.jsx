import Nav from "../component/Nav"
import imagebg from '../assets/aboutpage.png'
import image1 from '../assets/img1.png'
import image2 from '../assets/img2.png'
import image3 from '../assets/img3.png'

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* On passe la prop searchbar={false} pour épurer le Nav ici */}
            <Nav className="bg-ma-couleur" searchbar={false}/>

            {/* SECTION HERO */}
            <div 
                className="h-[40vh] md:h-[50vh] bg-cover bg-center relative flex items-center justify-center"
                style={{ backgroundImage: `url(${imagebg})` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <h1 className="relative text-white text-4xl md:text-6xl font-bold uppercase tracking-widest">
                    À Propos
                </h1>
            </div>

            {/* SECTION CONTENU */}
            <div className="max-w-7xl mx-auto px-5 py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    
                    {/* GAUCHE: TEXTE */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <hr className="w-12 border-2 border-ma-couleur" />
                            <span className="text-ma-couleur font-bold uppercase tracking-wider">Notre Histoire</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur saepe est nobis doloremque provident? Officiis, quidem eligendi. Dolore aut consequatur aperiam qui perferendis repudiandae eius harum nemo nesciunt dolorem ab tempora vero fuga magni nisi.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-justify">
                            Vitae in maxime magnam eos obcaecati veniam dolorum molestiae? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </p>
                    </div>

                    {/* DROITE: GRILLE D'IMAGES DYNAMIQUE */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <img src={image1} alt="About 1" className="w-full h-48 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition duration-300" />
                            <img src={image2} alt="About 2" className="w-full h-64 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition duration-300" />
                        </div>
                        <div className="flex items-center">
                            <img src={image3} alt="About 3" className="w-full h-80 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition duration-300" />
                        </div>
                    </div>

                </div>
            </div>

            {/* SECTION CITATION / VALEUR */}
            <div className="bg-ma-couleur text-white py-12 px-5">
                <div className="max-w-4xl mx-auto text-center italic text-lg md:text-xl">
                    <p>"La qualité et le service sont au cœur de notre engagement quotidien pour vous satisfaire."</p>
                </div>
            </div>
        </div>
    )
}

export default About