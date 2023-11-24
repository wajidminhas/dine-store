import Image, {StaticImageData} from 'next/image'
import Link from 'next/link'



const ProductCard = (props: {
    price: number,
    img: StaticImageData,
    category: string,
    title: string
    id: number
}) => {
  
  return (
    <div className='my-10'>
    <Link href={`/products/${props.id}`} className=''>
    <div className=''>
        <Image src={props.img} alt='card-image' height={300}width={300} className='px-4'/>
      <h3 className='text-lg font-semibold px-4'>{props.title}</h3>
      <p className='text-md font-semibold px-4'>Price : {props.price}</p>
      <p className='text-md font-semibold px-4'>Category: {props.category} </p>
    </div>
    </Link>
    </div>
  )
  
}

export default ProductCard
