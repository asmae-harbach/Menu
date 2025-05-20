import { useContext, useEffect, useState } from "react"
import { FaPhoneAlt, FaSearch, FaWhatsapp } from "react-icons/fa"
import { GiRotaryPhone } from "react-icons/gi"
import { PiListBold } from "react-icons/pi"
import { VscClose } from "react-icons/vsc"
import { Link } from "react-router-dom"
import { dataContext } from "../userContext"

const Nav = ({className ,searchbar}) => {
    const {input, setInput} = useContext(dataContext)
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className={`w-full relative z-20 ${className}`}>
            <div className="w-full h-[40px] bg-ma-couleur flex justify-around items-center text-white">
                <div className="flex gap-3 items-center md:text-lg">
                    <FaPhoneAlt />
                    <p className="font-semibold">0664498297</p>
                </div>
                <div className="flex gap-3 items-center md:text-lg">
                    <GiRotaryPhone />
                    <p className="font-semibold">0520574477</p>
                </div>
                <div className="flex gap-3 items-center md:text-lg">
                    <FaWhatsapp />
                    <p className="font-semibold">0781373737</p>
                </div>
            </div>
            <div className={`flex justify-between py-2 px-5 md:px-20 items-center w-full h-[60px] ${isOpen ? "bg-transparent" : "bg-white shadow-lg"}  bg-opacity-40`}>
            
                <div onClick={()=>setIsOpen(!isOpen)} className="md:hidden text-white text-[30px]">
                    <PiListBold className="cursor-pointer" />
                </div>
                <div className={`text-white hidden md:flex justify-between ${searchbar ? 'w-[60%]' : 'w-[100%]' }  font-bold `}>
                    <Link to="/" className="hover:text-gray-900">Home</Link>
                    <Link to="/about" className="hover:text-gray-900">About</Link>
                    <Link to="/menu" className="hover:text-gray-900">Menu</Link>
                    <Link to="/location" className="hover:text-gray-900">Location</Link>
                </div>
                {isOpen &&                 
                    <div className="md:hidden inset-0 text-white flex flex-col justify-between py-8 items-center w-[50%] h-screen font-bold bg-ma-couleur bg-opacity-90 shadow-lg fixed">
                        <VscClose onClick={()=>setIsOpen(!isOpen)} className="cursor-pointer self-end text-[30px] hover:text-color2 font-bold" />
                        <Link to="/" className="hover:text-gray-900">Home</Link>
                        <Link to="/about" className="hover:text-gray-900">About</Link>
                        <Link to="/menu" className="hover:text-gray-900">Menu</Link>
                        <Link to="/location" className="hover:text-gray-900">Location</Link>
                    </div>
                }
       
       {
                    searchbar&&  <div className="flex items-center gap-3 text-white w-[40%] md:w-[25%]">
                    <FaSearch />
                    <form className="w-full">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text"  placeholder="Search" className="bg-transparent focus:outline-none w-full border-b pb-1 placeholder-white"/>
                    </form>
                </div>
                }
                

            </div>
        </div>

    )
}
export default Nav