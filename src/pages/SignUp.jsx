import axios from "axios"
import { useState } from "react"
import { FaUser } from "react-icons/fa"
import { GiPadlock } from "react-icons/gi"
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const [data, setData] = useState({ username: "", password: "" })
    const navigate = useNavigate()

    const change = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const submit = async () => {
        try {
            if (!data.username || !data.password) {
                alert("Tous les champs sont requis")
                return
            }

            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/v1/signup`,
                data
            )

            alert(res.data.message)
            navigate("/signin")

        } catch (error) {
            alert(error.response?.data?.message || "Erreur serveur")
        }
    }

    return (
        <div className="h-screen w-full md:flex">
            <div className="h-full hidden md:w-[60%] bg-color2 md:flex flex-col items-center justify-center gap-3">
                <h1 className="text-[50px] text-white font-semibold">Create Account</h1>
                <p className="text-white">Create a new account to access the platform</p>
            </div>

            <div className="flex flex-col items-center justify-center w-full md:w-[40%] h-full gap-9">
                <h1 className="text-[50px] font-semibold text-color2">Sign Up</h1>

                <div className="flex flex-col gap-3 w-full items-center">
                    <div className="flex gap-3 items-center py-2 px-4 w-[50%] rounded-3xl border border-gray-400">
                        <FaUser className="text-gray-500" />
                        <input
                            name="username"
                            onChange={change}
                            className="focus:outline-0"
                            placeholder="Username"
                        />
                    </div>

                    <div className="flex gap-3 items-center py-2 px-4 w-[50%] rounded-3xl border border-gray-400">
                        <GiPadlock className="text-gray-500" />
                        <input
                            name="password"
                            type="password"
                            onChange={change}
                            className="focus:outline-0"
                            placeholder="Password"
                        />
                    </div>
                </div>

                <button
                    onClick={submit}
                    className="py-3 px-4 w-[50%] rounded-3xl text-white bg-color2"
                >
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default Signup
