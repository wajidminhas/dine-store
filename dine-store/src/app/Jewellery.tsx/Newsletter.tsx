




const Newsletter = () => {
  return (
<section className=" body-font ">
  <div className="bg-[#dad6d6] px-5 lg:py-10  lg:my-20 mx-auto  lg:items-center lg:w-[50%] w-[100%] ">
    <div className="flex flex-col text-center   mb-2">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-3 lg:tracking-widest text-gray-900">
      Subscribe Our Newsletter
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-2 ">
      Get the latest information and promo offers directly.
      </p>
    </div>
    
      <div className="  flex lg:flex-row flex-col items-center justify-center  m-2 lg:w-3/4 md:w-2/3 mx-auto">
        <div className=" w-[100%]  lg:m-0 mb-2 ">
          
            
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
         
        </div>
        
        <div className=" w-[50%] ">
          <button className="flex mx-auto text-white items-center justify-center bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
        </div>
       
      </div>
    
  </div>
</section>

  )
}

export default Newsletter
