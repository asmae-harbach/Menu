import { Link } from 'react-router-dom'
import imagebg from '../assets/imagebg.png'
import text from '../assets/text.png'
import Nav from '../component/Nav'

const Home = () => {
    return (
        <div 
            className='relative w-full h-screen bg-cover bg-no-repeat bg-center flex flex-col' 
            style={{ backgroundImage: `url(${imagebg})` }}
        >
            {/* Overlay dégradé pour plus de modernité */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

            {/* Navigation - On la laisse en haut */}
            <Nav searchbar={false} className="relative z-30" />

            {/* Contenu Central */}
            <div className="relative z-10 flex-grow flex flex-col justify-center items-center text-center px-4">
                
                {/* Image/Logo de texte avec animation d'entrée */}
                <div className="animate-fade-in-down">
                    <img 
                        src={text} 
                        className='w-[250px] md:w-[450px] drop-shadow-2xl mb-8' 
                        alt="Logo Texte" 
                    />
                </div>

                {/* Accroche optionnelle (si vous voulez ajouter du texte) */}
                <p className="text-white text-lg md:text-2xl mb-10 font-light tracking-widest uppercase animate-fade-in-up">
                    L'expérience culinaire unique
                </p>

                {/* Bouton Explorer avec effet Hover moderne */}
                <Link 
                    to='/menu' 
                    className='group relative py-4 px-10 overflow-hidden border-2 border-white text-white font-bold text-lg uppercase tracking-tighter transition-all duration-300 hover:text-black'
                >
                    <span className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                    <span className="relative z-10">Explorer Le Menu</span>
                </Link>
            </div>


        </div>
    )
}

export default Home