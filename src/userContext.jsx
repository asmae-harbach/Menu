import { createContext, useState } from "react"
import CategoryList from "./CategoryList"

export const dataContext = createContext()
const UserContext = ({children}) =>{
    const [cate, setCate] = useState(CategoryList)
    const [input, setInput] = useState("")
    const data = {
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