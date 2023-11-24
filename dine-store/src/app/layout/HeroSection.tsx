

import {ShoppingCart} from "lucide-react"
import Image from "next/image"
import header from '@/app/assets/layoutPage-images/header.webp'
import Featured1 from "@/app/assets/layoutPage-images/Featured1.webp"
import Featured2 from "@/app/assets/layoutPage-images/Featured2.webp"
import Featured3 from "@/app/assets/layoutPage-images/Featured3.webp"
import Featured4 from "@/app/assets/layoutPage-images/Featured4.webp"


const HeroSection = () => {
  return (
    
   <section className="flex mt-8 lg:flex-row md:flex-row items-center flex-col w-[90%] mx-auto ">
    {/* Left-div  */}
    <div className=" lg:w-[40%] w-[90%] lg:pt-24 ">
    <button  className="bg-green-200 rounded-xl border border-gray-100 py-3 px-6 text-blue-800 hover:bg-green-300 hover:text-blue-950">Sale 70%</button>
    <h1 className="scroll-m-20 text-5xl font-bold tracking-tight lg:text-6xl mt-6 text-black">
    An Industrial Take on Streetwear
    </h1>
    <p className="scroll-m-20 text-xl font-semibold mt-6">
    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
    </p>
    {/* <Button></Button> */}
    

    <button  className="bg-black text-white mt-7  px-16 items-center  rounded-xl hover:border-black hover:outline hover:outline-2 hover:bg-transparent hover:text-black gap-x-2"> <ShoppingCart></ShoppingCart> Shop Now </button>
    
    
    <div className="flex lg:justify-evenly justify-between mx-auto lg:w-full w-[90%] lg:flex-row md:flex-row flex-col-3 flex-wrap  lg:mt-20 mt-5 ">
      <div className="flex lg:justify-evenly  gap-x-5">

    <Image src={Featured1} alt="Featured-1" height={100} width={100}></Image>
    <Image src={Featured2} alt="Featured-2" height={100} width={100}></Image>
      </div>
      <div className="flex lg:justify-evenly  gap-x-5">
    <Image src={Featured3} alt="Featured-3" height={100} width={100}></Image>
    <Image src={Featured4} alt="Featured-4" height={100} width={100}></Image>
    </div>
    </div>
    </div>
        {/* Right-div  */}
    <div  className="lg:w-[50%] lg:h-[50%] w-[90%] h-[90%] rounded-full bg-orange-200 relative ">
    <div className="">
            <Image src={header} alt="hero-image" className=""></Image>
        </div>
        </div>
   </section>
)
}

    
       

export default HeroSection
