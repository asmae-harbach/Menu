import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import axios from "axios"


const Form = () =>{
    const [data, setData] = useState({name : "", description : "", category : "", price : 0, image : ""})
    const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
    const Navigate = useNavigate()
    const fileInputRef = useRef(null)

    useEffect(()=>{
        if(!isLoggedIn){
            Navigate('/signin')
        }
    })
    const change = (e)=>{
        const {name, value, files} = e.target
        if(name === "image"){
            setData({...data, image : files[0]})
        }else{
            setData({...data, [name] : value})
        }
    }

    const addProduct = async()=>{
        const {name, description, category, price, image} = data
        if(!name || !description || !category || !image){
            alert('Tous les champs sont requis')
        }
        
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('category', category)
        formData.append('price', price)
        formData.append('image', image)


        try{
            await axios.post(`${process.env.REACT_APP_API_URL}/api/v2/add-product`, formData, {headers : {'Content-Type': 'multipart/form-data'}})
            alert("Produit Ajoutée !")
            setData({name : "", description : "", category : "", price : 0, image : ""})
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }catch(err){
            console.error(err)
            alert("Erreur lors de l'ajout du produit")
        }
    }
    
    return(
        <div className="h-screen w-full md:flex">
            <div className="h-full hidden md:w-[60%] bg-color2 md:flex flex-col items-center justify-center gap-3">
                <h1 className="text-[50px] text-white font-semibold">Your menu is evolving !</h1>
                <p className="text-white">Add your new culinary creations to the menu .</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full md:w-[40%] h-full gap-9">
                <h1 className="text-[50px] font-semibold text-color2">Add Product</h1>
                <div className="flex flex-col gap-3 w-full justify-center items-center">
                    <input value={data.name} onChange={change} name="name" className="py-2 px-4 w-[70%] rounded-3xl border border-gray-400 focus:border-2 focus:border-color2 focus:outline-0" type="text" placeholder="Product Name" />
                    <textarea value={data.description} onChange={change} name="description" rows={5} className="py-2 px-4 w-[70%] rounded-3xl border border-gray-400 focus:border-2 focus:border-color2 focus:outline-0" placeholder="Product Description" />
                    <select value={data.category} onChange={change} name="category" className="py-2 px-4 w-[70%] rounded-3xl border border-gray-400 focus:border-2 focus:border-color2 focus:outline-0" type="text" placeholder="Category">
                        <option value="">Category</option>
                        <option value="BRIOCHE">BRIOCHE</option>
                        <option value="BURGER">BURGER</option>
                        <option value="TRES TACOS">TRES TACOS</option>
                        <option value="SHAKSHUKA">SHAKSHUKA</option>
                        <option value="DUO BOWL">DUO BOWL</option>
                        <option value="BREAKFAST">BREAKFAST</option>
                    </select>
                    <input value={data.price} onChange={change} name="price" className="py-2 px-4 w-[70%] rounded-3xl border border-gray-400 focus:border-2 focus:border-color2 focus:outline-0" type="number" placeholder="Price" />
                    <input ref={fileInputRef} onChange={change} name="image" className="my-2 file:mx-3 file:py-2 file:px-4 file:w-[50%] file:rounded-3xl file:border-2 file:text-sm file:font-semibold file:border-color2 file:bg-transparent  file:text-color2 hover:file:bg-color2/80 hover:file:text-white" type="file" accept="image/*" />
                </div>
                <button onClick={addProduct} className="py-3 px-4 w-[50%] rounded-3xl text-white bg-color2" >Add</button>
            </div>
        </div>
    )
}
export default Form