import { Link } from 'react-router-dom'
import imagebg from '../assets/imagebg.png'
import text from '../assets/text.png'
import Nav from '../component/Nav'

const Home = ()=>{
    return(
        <div className='w-full h-screen bg-cover bg-no-repeat  bg-center flex flex-col items-center' style={{backgroundImage : `url(${imagebg})`}}>
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <Nav searchbar={false} className="relative z-20" />
            <div className="relative z-10 text-white p-10 flex flex-col justify-center items-center my-auto">
                <img src={text} className='w-[300px]' alt="" />
                <Link to='/menu' className='py-3 px-5 border border-white font-semibold hover:bg-ma-couleur'>Explorer Le Menu</Link>
            </div>

        </div>

    )
}
export default Home