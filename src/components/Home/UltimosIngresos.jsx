import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import usePropiedades from "../../hooks/usePropiedades";
import CardUltimoIngreso from "./CardUltimoIngreso";

function UltimosIngresos() {
  const propiedades = usePropiedades();
  const [indexPrincipal, setIndexPrincipal] = useState(0);
  const [cardsVisibles, setCardsVisibles] = useState(4); // Cantidad inicial en pantallas grandes

  // Función para actualizar la cantidad de cards visibles según el tamaño de pantalla
  useEffect(() => {
    const actualizarTamano = () => {
      if (window.innerWidth < 640) {
        setCardsVisibles(1); // Móvil
      } else if (window.innerWidth < 1024) {
        setCardsVisibles(3); // Tamaño mediano
      } else {
        setCardsVisibles(4); // Tamaño grande
      }
    };

    actualizarTamano(); // Llamar al inicio
    window.addEventListener("resize", actualizarTamano); // Escuchar cambios de tamaño

    return () => window.removeEventListener("resize", actualizarTamano); // Cleanup
  }, []);

  const maxIndex = propiedades.length - cardsVisibles;

  const siguiente = () => {
    if (indexPrincipal < maxIndex) {
      setIndexPrincipal((prevIndex) => prevIndex + 1);
    }
  };

  const anterior = () => {
    if (indexPrincipal > 0) {
      setIndexPrincipal((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="flex flex-col items-center w-full justify-center mx-auto h-screen">
      <p className="text-2xl text-start mb-6">Propiedades Destacadas</p>

      <div className="flex items-center gap-4 w-full max-w-[1200px] px-4">
        <button
          onClick={anterior}
          className="text-2xl p-2 bg-gray-200 rounded-full hover:cursor-pointer hover:bg-gray-300 transition disabled:opacity-50"
          disabled={indexPrincipal === 0}
        >
          <FaChevronLeft />
        </button>

        <div className="relative w-[90%] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(indexPrincipal * 100) / cardsVisibles}%)`,
            }}
          >
            {propiedades.map((propiedad) => (
              <div 
                key={propiedad.id} 
                className="w-full sm:w-1/3 lg:w-1/4 p-2 flex-shrink-0 cursor-pointer"
              >
                <CardUltimoIngreso propiedad={propiedad} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={siguiente}
          className="text-2xl p-2 bg-gray-200 rounded-full hover:cursor-pointer hover:bg-gray-300 transition disabled:opacity-50"
          disabled={indexPrincipal === maxIndex}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default UltimosIngresos;
