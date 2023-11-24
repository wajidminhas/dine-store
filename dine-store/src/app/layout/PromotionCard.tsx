import Image from "next/image";
import event1 from "@/app/assets/promotion/event1.webp";
import event2 from "@/app/assets/promotion/event2.webp";
import event3 from "@/app/assets/promotion/event3.webp";

const PromotionCard = () => {
  return (
    <section className="text-gray-600 body-font mt-[100px] my-20 ">
      {/* <h2 className="text-center mt-15 uppercase lg:text-xl text-xl text-blue-800">promtion </h2>
      <h2 className="text-center font-bold lg:text-3xl text-2xl text-black ">Our Promotions Events</h2> */}

<div className="text-center mb-10">
        <h3 className="text-center mt-15 uppercase lg:text-xl text-xl text-blue-800">promtion </h3>

          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-wider lg:text-3xl">
            our categories
          </h1>
          <div className="flex mt-3 justify-center">
            <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex" />
          </div>
        </div>
      <div className="flex lg:flex-row flex-col  w-[90%] mx-auto gap-4 lg:mt-10 mb-10 ">
        {/* left div  */}
        <div className="flex  flex-col  text-white flex-1 h-[70vh] lg:w-[100vh]  gap-4">
          {/* first-card  */}
          <div className="bg-[#B7B7B7]   flex flex-1  lg:justify-around justify-evenly overflow-hidden ">
            <div className=" mt-5">
              <h1>get up to</h1>
              <h1>60% off</h1>
            </div>
            <div>
              <Image src={event1} alt="promotion images" className=""></Image>
            </div>
          </div>
          {/* second-card  */}
          <div className="bg-black   flex flex-1   overflow-hidden ">
            <div className=" items-center  mt-5 text-white  mx-auto">
              <h1 className="uppercase font-bold text-3xl my-4">GET 30% Off</h1>
              <p className="uppercase my-2 mt-10 text-center">use promo code</p>
              <span className="bg-gray-600 py-2 my-5 lg:mb-10 mb-5 px-6 text-center items-center uppercase tracking-widest rounded-xl">dineweekendsale</span>
            </div>
            
          </div>
        </div>

        {/* Right div  */}
        <div className="flex lg:flex-row flex-col flex-1 text-white   gap-4">
          <div className="bg-[#E7CEA6]  lg:w-[50%] ">
            <div className="mt-2 ml-2 lg:text-start text-center">
              <h1>get up to</h1>
              <h1>60% off</h1>
            </div>
            <div>
              <Image src={event2} alt="promotion images" className="pt-8"></Image>
            </div>
          </div>
          <div className="bg-[#B7B7B7]  lg:w-[50%] ">
            <div className="">
              <h1>get up to</h1>
              <h1>60% off</h1>
            </div>
            <div>
              <Image src={event3} alt="promotion images" className="pt-8"></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionCard;
