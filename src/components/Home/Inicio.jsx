import React from 'react'
import { Link } from "react-router-dom"
import { TbHomeSearch } from "react-icons/tb";
import banner from "../../assets/banner.webp"

function Inicio() {
  return (
    <div className="h-screen bg-black flex justify-between items-center px-20">
      {/* Contenedor del texto con luz */}
      <div className="relative w-1/2">
        {/* Luz amarilla */}
        <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-80 h-80 bg-yellow-400 opacity-40 blur-3xl rounded-full"></div>
    
        {/* Texto */}
        <div className="relative z-10 text-white text-left">
          <p className="text-5xl">Tenemos la propiedad</p>
          <p className="text-6xl font-bold">de tus sueños.</p>

          <Link
            to="propiedades"
            className="flex items-center text-yellow-300 hover:text-white hover:bg-yellow-300 border-yellow-300 m-2 p-2 rounded-lg border-2 w-40"
            >
            <TbHomeSearch className="mr-2" /> 
            Ver Propiedades
          </Link>
        </div>     
      </div>
    
      {/* Imagen a la derecha */}
      <div className="w-1/2 flex justify-end">
        <img src={banner} className="w-auto h-auto rounded-tr-4xl rounded-bl-4xl" />
      </div>

    </div>
  )
}

export default Inicio