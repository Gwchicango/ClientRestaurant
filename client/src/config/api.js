// Configuración central de la API
// Aseguramos que las URLs base no terminen en / para evitar conflictos
const getBaseUrl = () => {
  const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';
  return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
};

const getServerUrl = () => {
  const serverUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000';
  return serverUrl.endsWith('/') ? serverUrl.slice(0, -1) : serverUrl;
};

export const API_CONFIG = {
  BASE_URL: getBaseUrl(),
  SERVER_URL: getServerUrl(),
  PORT: process.env.REACT_APP_PORT || 3000
};

// URLs específicas de la API
export const API_ENDPOINTS = {
  // Clientes
  CLIENTES: `${API_CONFIG.BASE_URL}/clientes`,
  CLIENTE_BY_CEDULA: (cedula) => `${API_CONFIG.BASE_URL}/clientes/${cedula}`,
  
  // Órdenes
  ORDENES: `${API_CONFIG.BASE_URL}/ordenes`,
  ORDEN_BY_ID: (id) => `${API_CONFIG.BASE_URL}/ordenes/${id}`,
  ORDENES_COCINA: `${API_CONFIG.BASE_URL}/ordenescocina`,
  ORDEN_COCINA_BY_ID: (id) => `${API_CONFIG.BASE_URL}/ordenescocina/${id}`,
  ORDEN_FACTURADO: (id) => `${API_CONFIG.BASE_URL}/orden/${id}/facturado`,
  ORDEN_ESTADO: (id) => `${API_CONFIG.BASE_URL}/ordenesEstado/${id}`,
  
  // Pedidos
  PEDIDOS: `${API_CONFIG.BASE_URL}/pedidos`,
  PEDIDOS_BY_ORDEN: (idOrden) => `${API_CONFIG.BASE_URL}/pedidos/${idOrden}`,
  PEDIDOS_NUEVOS: `${API_CONFIG.BASE_URL}/pedidosNuevos`,
  PEDIDO_CANTIDAD: (idPlato, idOrden) => `${API_CONFIG.BASE_URL}/pedidosCantidad/${idPlato}/${idOrden}`,
  PEDIDO_ESTADO: (idPlato, idOrden) => `${API_CONFIG.BASE_URL}/pedidosEstado/${idPlato}/${idOrden}`,
  PEDIDO_DELETE: (idPlato, idOrden) => `${API_CONFIG.BASE_URL}/pedidos/${idPlato}/${idOrden}`,
  PEDIDO_DOMICILIO: (idPlato, idOrden) => `${API_CONFIG.BASE_URL}/domicilio/${idPlato}/${idOrden}`,
  
  // Platos
  PLATOS: `${API_CONFIG.BASE_URL}/platos`,
  PLATO_BY_ID: (id) => `${API_CONFIG.BASE_URL}/platos/${id}`,
  PLATO_ESTADO: (id) => `${API_CONFIG.BASE_URL}/platos/${id}/estado`,
  
  // Ingredientes (sin /api)
  INGREDIENTES: `${API_CONFIG.SERVER_URL}/ingredientes`,
  INGREDIENTE_BY_ID: (id) => `${API_CONFIG.SERVER_URL}/ingredientes/${id}`,
  INGREDIENTE_BY_NOMBRE: (nombre) => `${API_CONFIG.SERVER_URL}/ingredientes/nombre/${nombre}`,
  
  // Recetas (sin /api)
  RECETAS: `${API_CONFIG.SERVER_URL}/recetas`,
  RECETA_BY_ID: (id) => `${API_CONFIG.SERVER_URL}/recetas/${id}`,
  
  // Empleados
  EMPLEADOS: `${API_CONFIG.BASE_URL}/empleado`,
  LOGIN: `${API_CONFIG.BASE_URL}/login`,
  
  // Configuraciones
  SETTINGS: `${API_CONFIG.BASE_URL}/settings`,
  
  // Facturas
  FACTURA: `${API_CONFIG.BASE_URL}/factura`,
  FACTURA_HISTORIAL: `${API_CONFIG.BASE_URL}/factura/historial`,
  
  // Imágenes
  UPLOADS: `${API_CONFIG.SERVER_URL}`
}; 