import { Product } from "./types";
import p1 from '@/app/assets/products/p1.png'
import p2 from '@/app/assets/products/p2.png'
import p3 from '@/app/assets/products/p3.png'
import p4 from '@/app/assets/products/p4.png'
import p5 from '@/app/assets/products/p5.png'
import p6 from '@/app/assets/products/p6.png'
import p7 from '@/app/assets/products/p7.png'
import p8 from '@/app/assets/products/p8.png'
import p9 from '@/app/assets/products/p9.png'
import p10 from '@/app/assets/products/p10.png'
import p11 from '@/app/assets/products/p11.png'
import p12 from '@/app/assets/products/p12.png'
import cam1 from "@/app/assets/dine/carmeryn/cam1.png"
import cam2 from "@/app/assets/dine/carmeryn/cam2.png"
import cam3 from "@/app/assets/dine/carmeryn/cam3.png"






export const Products : Product[] = [
    {
       id: 1,
       name : "Brushed Raglan Sweatshirt",
       titletag : "Dress",
       price : 195,
       category : "female",
       image :  p1
       
    },

    {
        id: 2,
        name : "Cameryn Sash Tie Dress",
        titletag : "Dress",
        price : 545,
        category : "female",
        image :  p2,
       
     },

     {
        id: 3,
        name : "Flex Sweatshirt",
        titletag : "Sweater",
        price : 175,
        category : "female",
        image :  p3
     },

     {
        id: 4,
        name : "Flex Sweatpants",
        titletag : "pants",
        price : 100,
        category : "female",
        image :  p4
     },

     {
        id: 5,
        name : "Pink Fleece Sweatpants",
        titletag : "pants",
        price : 100,
        category : "Male",
        image :  p5
     },

     {
        id: 6,
        name : "Lite Sweatpants",
        titletag : "pants",
        price : 150,
        category : "female",
        image :  p6
     }, 

     {
        id: 7,
        name : "Imperial Alpaca Hoodie",
        titletag : "jackets",
        price : 525,
        category : "female",
        image :  p7
     },

     {
      id: 8,
      name : "Flex Push Button Bomber",
      titletag : "jackets",
      price : 225,
      category : "male",
      image :  p8
   },
   {
      id: 9,
      name : "Muscle Tank",
      titletag : "t-shirt",
      price : 525,
      category : "female",
      image :  p9
   },
   {
      id: 10,
      name : "Brushed Bomber",
      titletag : "jackets",
      price : 225,
      category : "female",
      image :  p10
   },
   {
      id: 11,
      name : "Raglan Sweatshirtr",
      titletag : "sweater",
      price : 225,
      category : "male",
      image :  p11
   },
   {
      id: 12,
      name : "Flex Push jackets",
      titletag : "jackets",
      price : 225,
      category : "male",
      image :  p12
   }
]