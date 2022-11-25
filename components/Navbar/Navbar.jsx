import React from 'react'
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import NavLogo from '../../assets/navbar-logo.svg';
import Image from 'next/image';

function Navbar() {

  const background = {
    background:'#159EEC',
    display:'flex',
    color:'white',
    borderRadius:'20px',
    width:'70px',
    height:'30px'
  }
    const router = useRouter();
    const t = useTranslation()
    const handleLocaleChange = (event) => {
    const value = event.target.value ;
    router.push(router.route, router.asPath, {
      locale: value,
    });
  };  
  return (

        <nav className=" navbar w-full fixed top-0 bg-white z-10 dark:bg-slate-900">
        <div className="container mx-auto py-5 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
              <Image  src={NavLogo}   width='151' height='28' alt='navbar logo'  />
          </div>
          <div className='flex items-center sm:ml-auto sm:mr-4  ml-auto'>
          <ul
            className="flex space-x-10 items-center text-gray-600 dark:text-gray-100 mt-0.5 font-400  font-normal text-sm capitalize"
          >
            <li className="hover:text-gray-500 lg:flex hidden">
              <a href="#">Direction</a>
            </li>
            <li className="hover:text-gray-500 lg:flex hidden">
              <a href="#about">Command</a>
            </li>
            <li className="hover:text-gray-500 lg:flex hidden">
              <a href="#services">Services</a>
            </li>
            <li className="hover:text-gray-500 lg:flex hidden">
              <a href="#works">Tools</a>
            </li>
            <li class="hover:text-gray-500 lg:flex hidden">
              <a href="#contact">Clients</a>
            </li>
            <li class="hover:text-gray-500 lg:flex hidden">
              <a href="#contact">Portfolio</a>
            </li>  
       <li>
       <select onChange={handleLocaleChange}  className='text-gray-600    ' value={router.locale}>
              <option value="en">Eng</option>
              <option value="uz">UZB</option>
              <option value="ru">RUSS</option>
            </select>
       </li>
            <li   className="hover:text-gray-500  mr-5 items-center justify-center lg:flex hidden " >
              <a  style={background} className='flex items-center justify-center' href="tel:998930026613">Contact</a>
            </li>
          </ul>

          </div>
          <div id="hamburger" className="space-y-1 lg:hidden cursor-pointer z-20">
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </div>
          <ul
            id="menu"
            className="hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center"
          >
            <li>
              <a id="hLink" href="#">homepage</a>
            </li>
            <li>
              <a id="hLink" href="#about">about me</a>
            </li>
            <li>
              <a id="hLink" href="#services">services</a>
            </li>
            <li>
              <a id="hLink" href="#works">works</a>
            </li>
            <li>
              <a id="hLink" href="#contact">contact</a>
            </li>
          </ul>
        </div>
      


    </nav>
  )
}

export default Navbar