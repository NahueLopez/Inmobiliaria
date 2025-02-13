import React from 'react'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

import logo from" ../assets/logo.png"

function NavBar() {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setScroll(true);
          } else {
            setScroll(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

  return (
    <nav className={
        `flex top-0 fixed w-full justify-between p-4 text-center items-center rounded-b-3xl
        ${scroll ? "bg-white text-black z-50 shadow-2xl" : "bg-transparent text-white"}`
        }>
        <div className='flex'>
            <img src={logo} className="w-[90px] h-[60px]"/>
        </div>
        
        <div className='flex gap-x-6'>
            <Link to="/" className=' hover:text-yellow-300'>Inicio</Link>
            <Link to="propiedades" className=' hover:text-yellow-300'>Propiedades</Link>
            <Link to="sobrenosotros" className=' hover:text-yellow-300'>SobreNosotros</Link>
            <Link to="contacto" className=' hover:text-yellow-300'>Contacto</Link>
        </div>

    </nav>
  )
}

export default NavBar