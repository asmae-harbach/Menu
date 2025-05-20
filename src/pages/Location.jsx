import { CiLocationOn, CiTimer } from "react-icons/ci"
import Nav from "../component/Nav"
import { GiRotaryPhone } from "react-icons/gi"

const Location = () => {
    return(
        <div className="w-full h-screen">
            <div className="w-full h-[65%] bg-color2">
                <Nav/>
                <div className="w-full h-[70%] flex justify-center items-center">
                    <h1 className="text-[80px] font-semibold text-white font-Pacifico" ><i>Find Us</i></h1>
                </div>
            </div>
            <div className="h-[35%] w-full flex flex-col md:flex-row justify-around items-center">
                    <div className="flex flex-col gap-5 items-center py-10 md:py-5">
                        <CiTimer className="text-[40px] text-ma-couleur font-bold" />
                        <p className="text-gray-600 font-semibold"><span className="font-bold text-[20px] font-Pacifico text-ma-couleur">Ouverture :</span> 07 AM / 21 PM</p>
                        <p className="text-gray-600 font-semibold"><span className="font-bold text-[20px] font-Pacifico text-ma-couleur">Brunch :</span> 08 AM / 17 PM</p>
                    </div>
                    <div className="flex flex-col gap-5 items-center py-10 md:py-5">
                        <CiLocationOn className="text-[40px] text-ma-couleur font-bold"  />
                        <h1 className="font-bold text-[25px] font-Pacifico text-ma-couleur">Location</h1>
                        <p className="text-gray-600 font-semibold">Rue Charif al Idrissi, Casablanca 20250</p>
                    </div>
                    <div className="flex flex-col gap-5 items-center py-10 md:py-5">
                        <GiRotaryPhone className="text-[40px] text-ma-couleur font-bold"  />
                        <h1 className="font-bold text-[25px] font-Pacifico text-ma-couleur">Réservation</h1>
                        <p className="text-gray-600 font-semibold">0520574477</p>
                    </div>
            </div>
        </div>
    )
}
export default Location