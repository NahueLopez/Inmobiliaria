import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className='flex bottom-0 w-full justify-between p-4 text-center items-center bg-black rounded-t-3xl'>
      <div className='flex'>
        <img src={logo} className="w-[90px] h-[60px]"/>
      </div>

      <div className='flex gap-x-6'>
        <Link to="/" className='text-white hover:text-yellow-300'>Inicio</Link>
        <Link to="propiedades" className='text-white hover:text-yellow-300'>Propiedades</Link>
        <Link to="sobrenosotros" className='text-white hover:text-yellow-300'>SobreNosotros</Link>
        <Link to="contacto" className='text-white hover:text-yellow-300'>Contacto</Link>
      </div>
    </footer>
  )
}

export default Footer