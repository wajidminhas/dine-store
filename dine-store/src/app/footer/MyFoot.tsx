


import React from 'react'

const MyFoot = () => {
  return (
    <footer>
      <hr className="border-t border-black/100 "></hr>
      <div className='flex lg:justify-around lg:flex-row flex-col mx-auto  lg:py-5 py-2 bg-gray-100  '>
      
        <div className=''>
          <h2 className='lg:text-lg text-xs'>Copyright © 2023 Dine Market</h2>
        </div>
        <div>
          <h2 className='lg:display lg:text-lg text-xs '>Design by. <span className='font-semibold lg:text-lg text-xs text-black'> Opal Studio </span></h2>
        </div>
        <div>
          <h2 className='lg:display lg:text-lg text-xs '>Code by. <span  className='font-semibold lg:text-lg text-xs text-black'>WajidMinhas on github </span></h2>
        </div>
      </div>
    </footer>
  )
}

export default MyFoot
