import React, { useState, useEffect } from 'react';
import { fetchData } from '../js/fetchDataUrl';
import axios from 'axios';
import { API_ENDPOINTS } from "../config/api";

const ComboBox = ({ initialText, mode, onSelectChange, opcionActual, cantidadPlatos, idPlato, idOrden }) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(opcionActual ? opcionActual : 0);
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    if (mode === 'ingredientes') {
      ObtenerIngredientes();
    } else if (mode === 'mesas') {
      fetchData('settings')
        .then(data => {
          setSettings(data);
        })
        .catch(error => {
          console.error('Error fetching settings:', error);
        });
    } else if ( mode === 'categorias') {
      ObtenerCategorias();
    } else if ( mode === 'cargos') {
      ObtenerCargos();
    }
    setSelectedOption(opcionActual);
  }, [mode, opcionActual]);

  useEffect(() => {
    if (mode === 'mesas' && settings.length > 0) {
        const tableOptions = Array.from(
            { length: settings[0].NUM_MESAS_SE },
            (_, index) => index + 1
        );
      setOptions(tableOptions);
    } else if (mode === 'domicilio' && cantidadPlatos !== 0) {
        const tableOptions = Array.from(
            { length: cantidadPlatos},
            (_, index) => index + 1
            );
      setOptions(tableOptions);
    }
  }, [mode, settings, cantidadPlatos]);

  const ObtenerIngredientes = async () => {
    try{
      axios
      .get(API_ENDPOINTS.INGREDIENTES)
      .then((response) => {
        setOptions(response.data);
      })
    }catch (error){
      console.error("Error al obtener los Ingredientes:", error);
    }
  }

  const ObtenerCargos = async () => {
    try{
      axios
      .get(API_ENDPOINTS.EMPLEADOS)
      .then((response) => {
        const uniqueCargos = [...new Set(response.data.map(empleado => empleado.CARGO_EMP))];
        setOptions(uniqueCargos);
      })
      .catch((error) => {
        console.error("Error al obtener los platos:", error);
      })
    }catch (error){
      console.error("Error al obtener los Ingredientes:", error);
    }
  }

  const ObtenerCategorias = async () => {
    try{
      axios
      .get(API_ENDPOINTS.PLATOS)
      .then((response) => {
        const uniqueCategories = [...new Set(response.data.map(plato => plato.CATEGORIA_PL))];
        setOptions(uniqueCategories);
      })
      .catch((error) => {
        console.error("Error al obtener los platos:", error);
      })
    }catch (error){
      console.error("Error al obtener los Ingredientes:", error);
    }
  }

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    onSelectChange(event.target.value, idPlato, idOrden);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="0">{initialText}</option>
        {options.map((option, index) => (
            <option key={index} value={option.id || option.NOMBRE_I}>
            {mode === 'ingredientes' ? option.NOMBRE_I : option}
            </option>
        ))}
        </select>
    </div>
  );
};

export default ComboBox;
