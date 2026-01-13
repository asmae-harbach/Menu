import axios from "axios"
import { useState } from "react"
import { FaUser } from "react-icons/fa"
import { GiPadlock } from "react-icons/gi"
import { useDispatch } from "react-redux"
import { authActions } from "../store/auth"
import { useNavigate } from "react-router-dom"

const SignIn = () =>{
    const [data, setData] =  useState({username : "", password : ""})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const change = (e)=>{
        const {name, value} = e.target
        setData({...data, [name] : value})
    }

    const submit = async()=> {
        try {
            if(data.username === "" || data.password === ""){
                alert('Tous les cases sont requis')
            }else{
                const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/signin`, data)
                console.log("RESPONSE:", response)
                localStorage.setItem("id", response.data.id)
                localStorage.setItem("token", response.data.token)
                setData({username:"", password:""})
                dispatch(authActions.login())
                navigate('/form')   
            }
            
        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert('Une erreur est survenue. Veuillez réessayer')
            }
        }
    }
    return(
        <div className="h-screen w-full md:flex">
            <div className="h-full hidden md:w-[60%] bg-color2 md:flex flex-col items-center justify-center gap-3">
                <h1 className="text-[50px] text-white font-semibold">Welcome Back !</h1>
                <p className="text-white">You can sign in to access with your existing account</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full md:w-[40%] h-full gap-9">
                <h1 className="text-[50px] font-semibold text-color2">Sign In</h1>
                <div className="flex flex-col gap-3 w-full justify-center items-center">
                    <div className="flex gap-3 items-center py-2 px-4 w-[50%] rounded-3xl border border-gray-400 focus:border-2 focus:border-color2">
                        <FaUser className="text-gray-500" />
                        <input onChange={change} value={data.username} className="focus:outline-0" type="text" placeholder="Username" name="username" />
                    </div>
                    <div className="flex gap-3 items-center py-2 px-4 w-[50%] rounded-3xl border border-gray-400 focus:border-2 focus:border-color2">
                        <GiPadlock className="text-gray-500" />
                        <input onChange={change} value={data.password} className="focus:outline-0" type="password" placeholder="Password" name="password"/>
                    </div>
                    
                </div>
                <button onClick={submit} className="py-3 px-4 w-[50%] rounded-3xl text-white bg-color2" >Sign In</button>
            </div>
        </div>
    )
}
export default SignIn