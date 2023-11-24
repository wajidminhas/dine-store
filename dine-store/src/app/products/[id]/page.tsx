

import { Products } from '@/app/component/Products'
import Image from 'next/image'
import Quantity from '@/app/Logic/Quantity'
import { PiShoppingCartThin } from 'react-icons/pi'
import React from 'react'
import Link from 'next/link'

const getProductDetail = (id: number | string) =>{
    return Products.filter((product)=> product.id == id)
}

const size = ["xs", "s", "m", "l", "xl"]

const Page = ({params}: {params: {id:string}}) => {
const result = getProductDetail(params.id)
  return (
    <div className='flex lg:flex-row flex-col  lg:w-[60%]  w-[90%] mx-auto py-5 lg:mt-16 mt:5'>
      {
        result.map((items)=>(
             <div key={items.id} className='flex lg:flex-row flex-col lg:justify-between lg:gap-10 ' >
              {/* left div  */}
              {
                result.map((value)=>(
                  <div key={items.id}>
                    
                     <Image src={value.image} alt={value.name} height={100} width={100}  />
                    
                  </div>
                ))
              }
                <div>
                <Image src={items.image} alt={items.name} height={500} width={500}  />
                </div>
                {/* Right div  */}
                <div className='mt-5'>
                 <div>
                    <h1 className='font-bold capitalize lg:text-2xl text-xl text-black tracking-widest '>{items.name} </h1>
                    <h2 className='font-bold capitalize text-base text-gray-400'>{items.titletag}</h2>
                </div>
                <div className='mt-5'>
                    <h2 className='text-sm uppercase font-semibold  '>seclect size</h2>
                    {/* sizes  */}
                     <div className='flex gap-x-4 cursor-pointer'>
                     {
                       size.map((items)=>(
                          <div className='flex justify-center items-center w-6 h-6 border rounded-full mt-2 hover:shadow-xl duration-300'>
                        <span className='items-center text-4 font-semibold text-gray-600 uppercase '>{items}</span>
                      </div>
                        ))
                      }
                      </div>
                      {/* Quantity  */}
                      <div className='mt-5 flex gap-x-3'>
                        <h2 className='font-semibold text-sm'>Quantity:</h2>
                        <div><Quantity /></div>
                      </div>
                      <div className='mt-5 flex gap-x-3  items-center'>
                      <button className="btn btn-neutral text-white"><span className=''><PiShoppingCartThin size={20} /></span> Add to Cart</button>
                        <h2 className='font-bold text-2xl '>$ {items.price.toFixed(2)}</h2>
                      </div>
                </div>
                </div>
                </div>
                    
            
        ))
      }
    </div>
  )
}

export default Page
