import ProductCard from "@/app/component/ProductCard"
import { Products } from "@/app/component/Products"



const getDetailsByCategory = (category:string)=>{
    return Products.filter((items)=>items.category === category)
}
const page = ({params}: {params:{slug:string}}) => {
const result = getDetailsByCategory(params.slug)
  return (
    <div className="flex flex-wrap w-[90%] mx-auto">
      {result.length > 0 ? (result.map((items)=>(
            <div className="">
                <ProductCard 
                img={items.image}
                title={items.name}
                price={items.price}
                category={items.category}
                id={items.id}
                />
            </div>
        ))):(
          <p>No data found</p>
        )
      }
    </div>
  )
}

export default page
