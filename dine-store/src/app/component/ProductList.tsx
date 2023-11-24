
import {Products} from "@/app/component/Products"
import ProductCard from "@/app/component/ProductCard"
import Image,  { StaticImageData } from "next/image"



const ProductList = () => {
    
  return (
    <div className="flex justify-evenly mt-16 gap-5">
      {Products.map((product)=>(
        <div className="w-[20%] ">
        <ProductCard 
        img={product.image as StaticImageData}
        title={product.name}
        key={product.id}
        price={product.price}
        category={product.category}
        id={product.id} />
        </div>
      ))
      }
    </div>
  )
}

export default ProductList
