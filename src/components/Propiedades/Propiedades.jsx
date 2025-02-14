import React, { useState } from "react";
import Filtro from "./Filtro";
import ListadoInmuebles from "./ListadoInmuebles";

function Propiedades() {
  const [filtros, setFiltros] = useState({ tipo: "", categoria: "", precio: "" });

  return (
    <div className="flex items-center justify-center mx-auto mt-20">
      <Filtro onFiltrar={setFiltros} />
      <ListadoInmuebles filtros={filtros} />
    </div>
  );
}

export default Propiedades;
