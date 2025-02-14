import React, { useState } from "react";
import Filtro from "../components/Propiedades/Filtro";
import ListadoInmuebles from "../components/Propiedades/ListadoInmuebles";

function Propiedades() {
  const [filtros, setFiltros] = useState({ tipo: "", categoria: "", precio: "" });

  return (
    <div className="flex min-h-screen">
      {/* 📌 Filtro a la izquierda */}
      <div className="w-64 p-4 bg-gray-100 shadow-md">
        <Filtro onFiltrar={setFiltros} />
      </div>

      {/* 📌 Listado de propiedades a la derecha */}
      <div className="flex-1 p-6">
        <ListadoInmuebles filtros={filtros} />
      </div>
    </div>
  );
}

export default Propiedades;
