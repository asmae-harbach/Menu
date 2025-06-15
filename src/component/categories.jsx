import { useContext } from 'react'
import CategoryList from '../CategoryList'
import { dataContext } from '../userContext'

const Categories = () => {
    const {setCate, allProducts} = useContext(dataContext)
    const filter = (category) =>{
        if(category === "ALL"){
            setCate(allProducts)
        }else{
            const newList = allProducts.filter(item=>item.category===category)
            setCate(newList)
        }

    }
    return(
        <div className='py-10 overflow-x-auto scroll-hidden'>
            <div className="flex gap-3 md:gap-7 w-max mx-auto text-color2 text-[12px] font-semibold" >
                {CategoryList.map(item => (
                    <div onClick={()=>filter(item.name)} className='w-[65px] md:w-[150px] h-[100px] md:h-[170px] cursor-pointer hover:bg-color2 hover:bg-opacity-50 hover:text-white bg-white shadow-lg rounded-md flex flex-col items-center justify-center  gap-2'>
                        <img className='w-[100%] h-[60%]' src={item.image} alt="" />
                        <h4 className='text-[10px] md:text-[14px]'>{item.name}</h4>
                    </div>
                ))}
            </div>
        </div>

    )
}
export default Categories