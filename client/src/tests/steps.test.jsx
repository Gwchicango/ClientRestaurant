import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CrudPlatos from "../components/CrudPlatos";

// Mock IntersectionObserver para jsdom
beforeAll(() => {
  global.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

// Mock de axios con datos de prueba
jest.mock("axios", () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          ID_PL: 1,
          NOMBRE_PL: "Plato Test",
          PRECIO_PL: 10,
          FOTO_PL: "img.jpg",
          CATEGORIA_PL: "Principal",
          ESTADO_PL: 1,
        },
      ],
    })
  ),
  post: jest.fn(() => Promise.resolve({ data: {} })),
}));

test("debo ver una lista de platos con sus nombres, precios e imágenes", async () => {
  render(<CrudPlatos />);
  const platos = await screen.findAllByRole("listitem");
  expect(platos.length).toBeGreaterThan(0);

  platos.forEach((plato) => {
    expect(plato).toHaveTextContent(/.+/); // Nombre
    expect(plato).toHaveTextContent(/\d+/); // Precio (ajusta si tu UI muestra el símbolo $)
    const imagen = plato.querySelector("img");
    expect(imagen).toBeInTheDocument();
  });
});

test("puedo crear un nuevo plato", async () => {
  render(<CrudPlatos />);
  // Espera a que desaparezca el loading buscando el botón principal
  const agregarBtn = await screen.findByRole("button", { name: /agregar nuevo plato/i });
  fireEvent.click(agregarBtn);

  // Ahora busca los campos dentro del modal
  const nombreInput = await screen.findByLabelText(/nombre:/i);
  fireEvent.change(nombreInput, { target: { value: "Plato Test" } });

  const precioInput = await screen.findByLabelText(/precio:/i);
  fireEvent.change(precioInput, { target: { value: "10" } });

  const estadoSelect = await screen.findByLabelText(/estado:/i);
  fireEvent.change(estadoSelect, { target: { value: "1" } });

  const guardarBtn = await screen.findByRole("button", { name: /agregar plato/i });
  fireEvent.click(guardarBtn);

  expect(await screen.findByText("Plato Test")).toBeInTheDocument();
});