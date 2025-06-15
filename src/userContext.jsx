import { createContext, useEffect, useState } from "react"
import axios from 'axios'


export const dataContext = createContext()
const UserContext = ({children}) =>{
    const [allProducts, setAllProducts] = useState([])
    const [cate, setCate] = useState([])
    const [input, setInput] = useState("")

    useEffect(()=>{
        const fetch = async() => {
            const response = await axios.get("http://localhost:4000/api/v2/get-products")
            setCate(response.data)
            setAllProducts(response.data)
        }
        fetch()
    }, [])
    const data = {
        allProducts,
        cate,
        setCate,
        input,
        setInput
    }
    return(
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    )
    
}

export default UserContext