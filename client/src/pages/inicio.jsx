import { Header } from "../components/header.jsx";
import  Orden  from "../components/Orden.jsx";
import React, { useEffect } from 'react';

import "../styles/Inicio.css";

const Inicio = () => {

  useEffect(() => {
    document.title = 'Ordenar Platillo - Kandela';
  }, []);

  return (
    <>
      <Header titulo={"Menú Principal de Platillos"} Buscar={true} />
      <div className="grid-container">
        <Orden />
      </div>
    </>
  );
};
export default Inicio;
