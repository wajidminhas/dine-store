
import Image from "next/image"
import p7 from '@/app/assets/products/p7.png'



const Jewellery = () => {
  return (
    <section className="w-[90%] mx-auto lg:mt:20 relative">
      {/* Unique test div  */}
      <div className='lg:w-[30%] lg:absolute right-0 lg:-mt-[10%] mt-10 md:-my-[10%] xl:-my-[10%]  lg:pt-20 pt-0 lg:items-start float-none '>
    {/* <div className="w-[30%] lg:pt-20  "> */}

    <h3 className='text-4xl font-bold '>Unique and Authentic Vintage Designer Jewellery</h3>
    </div>
    {/* </div> */}
    
      {/* JEWELLERY DIV  */}

  <div className=" mx-auto flex py-2 md:flex-row flex-col items-center h-[80vh] lg:bg-gray-50 mt-20 lg:mb-20  mb-[36rem]  ">
    <div className="grid grid-cols-2  mb-20 w-fit lg:m-2 h-[50vh] lg:pl-10  min-w-[15rem] min-h-[20rem] ">
      <div className=" lg:p-3 p-2">
        <h3 className="font-semibold text-xl text-black  ">Using Good Quality Materials</h3>
        <p>Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit.</p>
      </div>
      <div className="lg:p-3 p-2">
        <h3 className="font-semibold text-xl text-black">Using Good Quality Materials</h3>
        <p>Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. </p>
      </div>
      <div className="lg:p-3 p-2">
        <h3 className="font-semibold text-xl text-black">Using Good Quality Materials</h3>
        <p>Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit.</p>
      </div>
      <div className="lg:p-3 p-2">
        <h3 className="font-semibold text-xl text-black">Using Good Quality Materials</h3>
        <p>Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit.</p>
      </div>

      
    </div>
    <div className=" lg:w-full flex  lg:flex-row flex-col lg:px-10 lg:m-10 h-[60vh] my-8  ">
     <div className=" min-w-[10rem] min-h-[20rem]  ">
      <Image 
        className=" min-w-[100%] min-h-[100%] "
        alt="hero"
        src={p7}/>
        </div>
        <div className="lg:w-[40%] w-[80%]  lg:pl-10 lg:py-5 py-20 tex-center text-justify mx-auto lg:text-justify">
        <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care.
             The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
             </div>
    </div>
  </div>

 
</section>

  )
}

export default Jewellery
