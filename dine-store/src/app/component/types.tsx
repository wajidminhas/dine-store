import { StaticImageData } from "next/image"



export type Product = { 
    id: number,
    titletag: string,
    price: number,
    image: StaticImageData,
    category: string,
    name: string,
    
}