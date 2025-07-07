# Configuración de Variables de Entorno

## Archivo .env del Cliente

Crea un archivo `.env` en la carpeta `client/` con la siguiente configuración:

```env
# Configuración del cliente React
# IMPORTANTE: No incluir barras finales (/) en las URLs para evitar conflictos
REACT_APP_API_URL=http://localhost:4000/api
REACT_APP_SERVER_URL=http://localhost:4000
REACT_APP_PORT=3000
```

## Notas Importantes

1. **No incluir barras finales**: Las URLs en las variables de entorno NO deben terminar en `/` para evitar conflictos con las rutas de la API.

2. **Configuración automática**: El archivo `src/config/api.js` maneja automáticamente la limpieza de barras finales y la construcción de URLs completas.

3. **Variables disponibles**:
   - `REACT_APP_API_URL`: URL base para endpoints con prefijo `/api`
   - `REACT_APP_SERVER_URL`: URL base para endpoints sin prefijo `/api` (ingredientes, recetas, uploads)
   - `REACT_APP_PORT`: Puerto del servidor de desarrollo de React

## Ejemplo de Uso

```javascript
import { API_ENDPOINTS } from '../config/api';

// Las URLs se construyen automáticamente
console.log(API_ENDPOINTS.CLIENTES); // http://localhost:4000/api/clientes
console.log(API_ENDPOINTS.INGREDIENTES); // http://localhost:4000/ingredientes
``` 