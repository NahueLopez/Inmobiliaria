import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaMapMarkedAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Contacto() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full min-h-screen bg-gradient-to-r from-yellow-300 to-black p-6 gap-8">

      {/* Formulario de contacto */}
      <div className="bg-white shadow-xl rounded-2xl text-center w-full max-w-lg p-6 order-1 lg:order-none">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">¡Envíenos sus dudas!</h2>

        <form className="flex flex-col gap-4">
          <div className="text-left">
            <label className="font-medium text-gray-700">Nombre y Apellido</label>
            <input 
              type="text" 
              placeholder="Ingrese su nombre" 
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="text-left">
            <label className="font-medium text-gray-700">Asunto</label>
            <input 
              type="text" 
              placeholder="Ingrese el asunto" 
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="text-left">
            <label className="font-medium text-gray-700">Mensaje</label>
            <textarea 
              placeholder="Ingrese su mensaje"
              className="w-full p-2 border border-gray-300 rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <button className="w-full bg-yellow-400 text-white font-semibold py-2 rounded-md hover:bg-yellow-500 transition">
            Enviar
          </button>
        </form>
      </div>

      {/* Información de contacto */}
      <div className="bg-white shadow-xl rounded-2xl text-center w-full max-w-lg p-6 flex flex-col justify-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Contacto</h2>

        <div className="flex flex-col gap-3 items-center text-gray-700">
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-green-500 text-lg" />
            <span>+54 223 123 4567</span>
          </div>

          <div className="flex items-center gap-2">
            <IoIosMail className="text-red-500 text-lg" />
            <span>contacto@gmail.com</span>
          </div>

          <div className="flex flex-col items-center w-full text-center">
  <div className="flex items-center gap-2">
    <FaMapMarkedAlt className="text-blue-500 text-lg" />
    <p>Irala 6018</p>
  </div>
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.861143912748!2d-57.5729011!3d-38.027016499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584de8d83ac6d3d%3A0x954a8dc17ebfdef5!2sIrala%206018%2C%20B7600%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1739482419278!5m2!1ses-419!2sar" 
    className="w-full h-24 sm:h-40 border-0 rounded-md mt-2"
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
  </iframe>
</div>

        </div>

        {/* Redes Sociales */}
        <h2 className="text-xl font-semibold mt-6 text-gray-800">Redes Sociales</h2>
        <div className="flex gap-4 justify-center mt-2 text-2xl">
          <FaInstagram className="text-pink-500 cursor-pointer hover:scale-110 transition" />
          <FaFacebookF className="text-blue-600 cursor-pointer hover:scale-110 transition" />
        </div>
      </div>
      
    </div>
  );
}

export default Contacto;
