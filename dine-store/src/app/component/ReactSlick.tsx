'use client'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Products } from '@/app/component/Products';
import Image from "next/image";
import ProductCard from "./ProductCard";
import Link from "next/link";

const ReactSlick = () => {


    var settings = {
        dots: true,
      infinite: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <section className="my-20 mt-[100px] ">
       
<div className="text-center mb-10">
        <h3 className="text-center mt-15 uppercase lg:text-xl text-xl text-blue-800">products </h3>

          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-wider lg:text-3xl capitalize">
            check what we have
          </h1>
          <div className="flex mt-3 justify-center">
            <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex" />
          </div>
        </div>
          
       <div className="lg:w-[70%] w-[90%] h-[50%] mx-auto ">
        
        <Slider {...settings}>

         {
             Products.map((items)=>(
          
                <div className="hover:scale-105 duration-200   border-none " key={items.id}>
                  <Link href={`products/${items.id}`}>
                    <Image src={items.image} alt={items.name} height={500} width={500} className=" min-h-[100%] min-w-[100%]  "/>
                    </Link>
                   <div className=" ">
                    <h2 className=" text-xl font-semibold px-5 ">{items.name} </h2>
                    <p className="text-xl font-semibold scroll-m-20 text-yellow-800 px-5"> ${items.price}</p>
                    </div>
                </div>
       
            ))
         }
         
        </Slider>
      </div>
     
    </section>
  )
}

export default ReactSlick
