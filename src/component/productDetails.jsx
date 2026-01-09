import { VscClose } from 'react-icons/vsc'

const ProductDetails = ({isOpen, setIsOpen, data}) =>{
    return(
        <div className='bg-ma-couleur bg-opacity-70 w-[70%] md:w-[30%] h-[85%] md:h-[90%] rounded-xl flex flex-col gap-4 py-4'>
            <VscClose onClick={()=>setIsOpen(!isOpen)} className="m-2 cursor-pointer self-end text-[30px] text-white font-bold" />
            <img className='w-full h-[50%] p-0' src={item.image} alt="" />
            <div className='p-4 flex flex-col gap-4'>
                <div className='flex justify-between text-white text-2xl font-semibold'>
                    <h1>{data.name}</h1>
                    <p>DH{data.price}</p>
                </div>
                <hr/>
                <p className='text-white text-sm'>{data.description}</p>
            </div>
           
        </div>
    )
}
export default ProductDetails

