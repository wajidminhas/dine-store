


import logo from "@/app/assets/logo/Logo.webp"
import Link from "next/link"
import Image from "next/image"
import {GiHamburgerMenu} from 'react-icons/gi'


const Navbar = () => {
  return (
    <nav className="">
        <div className="navbar  bg-gray-100">
  <div className="navbar-start lg:sticky">
    <div className="dropdown">
      <label tabIndex={0} className="text-2xl lg:hidden">
        <GiHamburgerMenu></GiHamburgerMenu>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link href={"/"}>Home</Link ></li>
      <li><Link href='/category/male'>Male</Link ></li>

      <li tabIndex={0}>
        <details>
          <Link href='/category/female'>
          <summary >Female</summary>
          </Link>
          <ul className="p-2">
            <li><Link href={'#'}>Tops</Link></li>
            <li><Link href={'#'}>Pants</Link></li>
            <li><Link href={'#'}>Jewellry</Link></li>
            <li><Link href={'#'}>Shoes</Link></li>
          </ul>
        </details>
      </li>
      <li><Link href='/category/kids'>Kids</Link></li>
      <li><Link href={'/products'}>All Products</Link></li>
      </ul>
    </div>
    
      <Image src={logo} alt="" width={150} height={150} className="hidden lg:block pl-4" /> 
    
  </div>
  <div className="navbar-center ">
    <Link href={`/`}>
  <Image src={logo} alt="" width={100} height={100} className=" block lg:hidden" /> 
  </Link>
    <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li ><Link href='/' className="hover:text-orange-400 duration-300">Home</Link></li>
      <li><Link href='/category/male' className="hover:text-orange-400 duration-300">Male</Link></li>
      <li><Link href='/category/female' className="hover:text-orange-400 duration-300">Female</Link></li>

      {/* <li tabIndex={0}>
        <details>
          <summary className="hover:text-orange-400 duration-300">Female</summary>
          <ul className="p-2">
            <li><Link href='female/category/female' className="hover:text-orange-400 duration-300">Tops</Link></li>
            <li><Link href='female/category/female' className="hover:text-orange-400 duration-300">Pants</Link></li>
            <li><Link href='female/category/female' className="hover:text-orange-400 duration-300">Jewellry</Link></li>
            <li><Link href='female/category/female' className="hover:text-orange-400 duration-300">Shoes</Link></li>
          </ul>
        </details>
      </li> */}
      <li><Link href='/category/kids' className="hover:text-orange-400 duration-300">Kids</Link></li>
      <li><Link href='/myproducts' className="hover:text-orange-400 duration-300">All Products</Link></li>
    </ul>

    </div>
  </div>
  <div className="navbar-end">
  <label tabIndex={0} className=" pr-4">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 hover:text-orange-400 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item hover:bg-black hover:text-white font-semibold">8</span>
        </div>
      </label>
     
  </div>
</div>
    </nav>
  )
}

export default Navbar
