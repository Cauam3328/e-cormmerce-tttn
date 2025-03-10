import React,{useState,useEffect} from 'react'
import { apiGetProducts } from '../apis/product'
import {Product} from '.'
import Slider from "react-slick";


const tabs = [
    {id:1, name:'best seller'},
    {id:2, name:'new arrivals'},
    {id:3, name:'tablet'},
]
const settings = {
    dots: false,
    Infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
};

const BestSeller = () => {
    const [bestSeller, setBestSeller] = useState(null)
    const [newProducts,setNewProducts] = useState(null)
    const [activeTab,setActiveTab] = useState(0)

    const fetchProducts = async () => {
        const response  = await Promise.all([apiGetProducts({sort:'-sold'}),apiGetProducts({sort:'-createdAt'})])
        if (response[0]?.success) setBestSeller(response[0].products)
        if (response[1]?.success) setNewProducts(response[1].products)
    }

    useEffect(() => {
        fetchProducts ()
    }, [])
    return (
        <div>
            <div className='flex text-5xl gap-8 pb-4 border-b-2 border-main'>
                {tabs.map(el => (
                    <span key={el.id} className = {`font-semibold capitalize border-r cursor-pointer text-gray-400 ${activeTab === el.id ? 'text-black' : ' '}`}
                    onClick = {() => setActiveTab(el.id)}
                        >{el.name}</span>
                ))}
            </div>
            <div className = 'mt-4'>
                <Slider {...settings}>
                    {bestSeller?.map(el =>(
                        <Product
                                key= {el.id}
                                productData={el}                        
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}   

export default BestSeller 