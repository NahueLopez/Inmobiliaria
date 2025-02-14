import React from 'react';

function CardUltimoIngreso({ propiedad }) {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl relative group">
      <img
        src={propiedad.imagen}
        alt={propiedad.nombre}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{propiedad.nombre}</h3>
        <p className="text-sm text-gray-600 mb-4">{propiedad.direccion}</p>
        
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-bold text-gray-900">{`${propiedad.precio}`}</p>
          <button className="text-white bg-yellow-300 shadow-xl hover:cursor-pointer hover:bg-yellow-500 px-4 py-2 rounded-lg text-sm transition duration-200
            opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
            Ver más
          </button>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <p>Superficie: {propiedad.superficie} m²</p>
          <p>{propiedad.banio} Baños</p>
        </div>
      </div>
    </div>
  );
}

export default CardUltimoIngreso;
