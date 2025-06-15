import { useContext, useEffect, useState } from "react"
import Categories from "../component/categories"
import Nav from "../component/Nav"
import Products from "../component/Products"
import { dataContext } from "../userContext"
import ProductDetails from "../component/productDetails"

const Menu = () => {
    const {input, setCate, allProducts} = useContext(dataContext)
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState([])

    useEffect(()=>{
        const newList = allProducts.filter(item=>item.name.toLowerCase().includes(input.toLowerCase()))
        setCate(newList)
    }, [input])
    return(
        <div className="w-full h-full bg-bg-page">
            <div className="w-full h-[300px] bg-color2">
                <Nav searchbar={true} className="z-10" />
                <div className="w-full h-[70%] flex justify-center items-center">
                    <h1 className="text-[80px] font-semibold text-white font-Pacifico" ><i>Our Menu</i></h1>
                </div>
            </div>
            {!input && (
                <div>
                    <Categories/>
                </div>
            )}
            <div>
                <Products isOpen={isOpen} setIsOpen={setIsOpen} setData={setData}  />
            </div>
            {isOpen && (
                <div className="inset-0 w-full h-full bg-white bg-opacity-70 fixed flex items-center justify-center z-20">
                    <ProductDetails isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
                </div>
            )}

        </div>
    )
}

export default Menu