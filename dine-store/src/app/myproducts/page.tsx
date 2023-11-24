import ProductCard from "@/app/component/ProductCard"
import { Products } from "@/app/component/Products"
import Image from 'next/image'
// import { it } from "node:test"
import Link from "next/link"


import React from 'react'

const AllProducts = () => {
  return (
    <div className="flex flex-wrap w-[90%] mx-auto">
      {
        Products.map((items)=>(
         
            <div className='my-10'>
    <Link href={`/products/${items.id}`} className=''>
    <div className=''>
        <Image src={items.image} alt='card-image' height={300}width={300} className='px-4'/>
      <h3 className='text-lg font-semibold px-4'>{items.name}</h3>
      <p className='text-md font-semibold px-4'>Price : {items.price}</p>
      <p className='text-md font-semibold px-4'>Category: {items.category} </p>
    </div>
    </Link>
    </div>
        ))
      }
      
    </div>
  )
}

export default AllProducts
