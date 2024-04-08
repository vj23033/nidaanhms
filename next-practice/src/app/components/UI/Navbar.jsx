"use client"
import React, {useState} from 'react'
import Button from './Button'
import { Menu, X } from "lucide-react";


const Navbar = () => {

    const navItems = [
        { name: "Home" },
        { name: "Top Features" },
        { name: "Our Hospital" },
        { name: "Pricing" },
        { name: "About us" },
      ];

      const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

      const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
      };


   
  return (
    <>  
 <nav className=" top-0 z-50 py-3 cursor-pointer border-b border-[#E4E4E7]">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            {/* <img className="h-10 w-10 mr-2" src={logo} alt="Logo" /> */}
            <span className="text-xl font-bold tracking-tight">Logoipsum</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
               <p className={`text-[#36485C] font-bold border-b-2 border-transparent ${navItems === item.name ? 'border-black' : 'hover:border-black hover:text-black'}`} key={index}>
               {item.name}
               </p>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3">
                Contact Us
            </a>
            <Button bg={"purple"} text={"white"}>Get Started</Button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
               contact
              </a>
              <Button bg={"purple"} text={"white"}>Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>

</>

  )
}

export default Navbar