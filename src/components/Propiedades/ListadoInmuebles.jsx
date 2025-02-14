import React, { useState, useEffect } from "react";
import usePropiedades from "../../hooks/usePropiedades";

function ListadoInmuebles({ filtros }) {
  const propiedades = usePropiedades(); // Hook que retorna las propiedades
  const [propiedadesFiltradas, setPropiedadesFiltradas] = useState([]);

  useEffect(() => {
    if (!propiedades || propiedades.length === 0) return;

    // Filtrar propiedades según los filtros aplicados
    const filtradas = propiedades.filter((propiedad) => {
      return (
        (filtros.tipo ? propiedad.tipo === filtros.tipo : true) &&
        (filtros.categoria ? propiedad.categoria === filtros.categoria : true) &&
        (filtros.precio ? propiedad.precio <= Number(filtros.precio) : true)
      );
    });

    setPropiedadesFiltradas(filtradas);
  }, [propiedades, filtros]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 ml-64">
      {propiedadesFiltradas.length > 0 ? (
        propiedadesFiltradas.map((propiedad) => (
          <div
            key={propiedad.id}
            className="bg-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={propiedad.imagen}
              alt={propiedad.nombre}
              className="w-full h-56 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{propiedad.nombre}</h3>
              <p className="text-gray-500 mt-2">{propiedad.direccion}</p>
              <p className="font-semibold text-blue-500 mt-2">{propiedad.precio}</p>
              <div className="mt-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
                  Ver detalles
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No se encontraron inmuebles con esos filtros.
        </p>
      )}
    </div>
  );
}

export default ListadoInmuebles;
