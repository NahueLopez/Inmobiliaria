import React, { useState } from "react";

function Filtro({ onFiltrar }) {
  const [filtros, setFiltros] = useState({
    tipo: "",
    categoria: "",
    precio: "",
  });

  const handleChange = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const aplicarFiltro = () => {
    onFiltrar(filtros);
  };

  return (
    <div className="w-64 bg-gray-100 p-4 shadow-md rounded-lg fixed left-0 top-20">
      <h2 className="text-lg font-semibold mb-4">Filtrar</h2>

      {/* Tipo */}
      <label className="block text-sm font-medium">Tipo</label>
      <select
        name="tipo"
        value={filtros.tipo}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
      >
        <option value="">Todos</option>
        <option value="casa">Casa</option>
        <option value="departamento">Departamento</option>
        <option value="terreno">Terreno</option>
      </select>

      {/* Categoría */}
      <label className="block text-sm font-medium">Categoría</label>
      <select
        name="categoria"
        value={filtros.categoria}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
      >
        <option value="">Todas</option>
        <option value="venta">Venta</option>
        <option value="alquiler">Alquiler</option>
      </select>

      {/* Precio */}
      <label className="block text-sm font-medium">Precio</label>
      <input
        type="number"
        name="precio"
        value={filtros.precio}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
        placeholder="Máximo $"
      />

      <button
        onClick={aplicarFiltro}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Aplicar Filtros
      </button>
    </div>
  );
}

export default Filtro;
