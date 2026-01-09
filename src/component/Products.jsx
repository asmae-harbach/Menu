import { useContext, useEffect, useState } from 'react'
import { dataContext } from '../userContext'
const Products = ({isOpen, setIsOpen, setData}) => {
    const {cate} = useContext(dataContext)

    

    return(
        <div className='flex flex-wrap justify-center items-center gap-5 py-5'>
            {cate.map(item=>(
                <div className='flex flex-col justify-around gap-4 w-[200px] h-[360px] bg-white border-2 border-transparent hover:border-color2 rounded-lg my-3'>
                    <img className='w-full h-[150px]' src={item.image} alt="" />
                    <div className='flex flex-col justify-center items-center gap-2 px-4'>
                        <h4 className='text-color2 font-semibold text-center'>{item.name?.slice(0, 30) || ""}</h4>
                        <p className='text-center text-[12px] text-gray-600 font-semibold'>{item.description?.slice(0, 34) || ""}...</p>
                        <h5 className='text-ma-couleur font-bold'>DH{item.price}</h5>
                    </div>
                    <button onClick={()=>{setIsOpen(!isOpen); setData({image:item.image, name:item.name, description:item.description, price:item.price})}} className='py-2 mb-3 text-ma-couleur font-semibold rounded-md mx-4 border border-ma-couleur hover:bg-ma-couleur hover:text-white'>Voir le Produit</button>
                </div>
            ))}
           
        </div>
    )
}

export default Products