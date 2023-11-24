


import React from 'react'
import { Products } from '@/app/component/Products'
import Image from 'next/image'
import Link from 'next/link'

const Categoroy = () => {
  return (
    <section className="my-[50px] body-font">
  <div className="container px-5 py-10 mx-auto">
  <div className="text-center mb-10">
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-wider lg:text-3xl">
            our categories
          </h1>
          <div className="flex mt-3 justify-center">
            <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex" />
          </div>
        </div>
    <div className="flex flex-wrap  w-[80vw] mx-auto  ">
        {/* category - 1  */}
        <div className='flex lg:flex-row flex-col overflow-hidden '>
            {
                Products.map((product)=>(
                    <div key={product.id} className=' ' >
                        <Link href={'#'}>
                        <Image src={product.image} alt='' width={100} height={100} className='min-w-[20rem] min-h-[20rem] rounded lg:px-4 py-4 transition duration-400 ' />
                        <p className=' px-4'>{product.name}</p>

                        {/* <p >Product: {product.price}</p> */}
                        </Link>
                    </div>
                ))
            }
        </div>

      
      </div>
    </div>
 
</section>

  )
}

export default Categoroy
