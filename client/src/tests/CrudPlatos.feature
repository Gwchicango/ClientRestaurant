# Language: es
Característica: CRUD de Platos
  Como administrador del sistema
  Quiero poder gestionar los platos del menú
  Para mantener actualizada la oferta del restaurante

  Escenario: Listar platos disponibles
    Dado que estoy en la página de gestión de platos
    Cuando solicito ver los platos disponibles
    Entonces debo ver una lista de platos con sus nombres, precios e imágenes
    Y cada plato debe mostrar sus opciones de edición y cambio de estado

  Escenario: Crear un nuevo plato válido
    Dado que estoy en el formulario de creación de platos
    Cuando ingreso los datos requeridos:
      | Nombre       | Plato de prueba |
      | Precio       | 15000          |
      | Categoría    | Principal      |
      | Estado       | Habilitado     |
      | Ingrediente  | Carne          |
      | Foto         | imagen.jpg     |
    Y guardo el nuevo plato
    Entonces el plato debe ser creado exitosamente
    Y debe aparecer en la lista de platos disponibles

  Escenario: Intentar crear plato con datos incompletos
    Dado que estoy en el formulario de creación de platos
    Cuando intento guardar un plato sin ingresar:
      | Nombre       |                |
      | Precio       |                |
      | Categoría    |                |
    Entonces debo ver mensajes de error indicando los campos requeridos
    Y el plato no debe ser creado

  Escenario: Editar un plato existente
    Dado que existe un plato con ID 123
    Cuando edito sus datos:
      | Campo        | Valor nuevo    |
      | Nombre       | Plato editado  |
      | Precio       | 20000          |
    Y guardo los cambios
    Entonces los datos del plato deben actualizarse correctamente
    Y los cambios deben reflejarse en la lista de platos

  Escenario: Cambiar estado de un plato
    Dado que existe un plato habilitado con ID 123
    Cuando cambio su estado a "Deshabilitado"
    Entonces el plato debe moverse a la sección de platos deshabilitados
    Y su imagen debe mostrarse en escala de grises

  Escenario: Filtrar platos por categoría
    Dado que hay platos de diferentes categorías
    Cuando selecciono filtrar por la categoría "Postres"
    Entonces solo debo ver platos de la categoría seleccionada
    Y el contador debe mostrar la cantidad correcta de platos

  Escenario: Filtrar platos por rango de precios
    Dado que hay platos con diferentes precios
    Cuando establezco un rango de precio entre 10000 y 20000
    Entonces solo debo ver platos cuyo precio esté dentro del rango
    Y el contador debe mostrar la cantidad correcta de platos
