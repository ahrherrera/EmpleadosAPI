# EmpleadosAPI
Backend de Empleados Escrito con NodeJS Express y MySQL

# Instrucciones de despliegue

1. Dentro del proyecto `/` hay un archivo SQL `DumpEmpleados.sql` que contiene el script para crear la base de datos, sus tablas y rutinas. Es necesario ejecutar ese archivo en su servidor MySQL

2. Ejecutar `npm install` para instalar las dependiencias requeridas

# Configurar la conexión

En el archivo `\controllers\mysql\mysqlconnector.js` se encontrara los parametros de configuracion de la base de datos donde el backend va a apuntar.

**Nota: Asegurarse que el usuario de la base de datos exista y tenga permisos para realizar operaciones de R/W en las tablas.

# Ejecutar

Para ejecutar el servidor de desarrollo del backend API solo basta con ejecutar `npm start` y se ejecutara en `http://localhost:1330`.
En la app de Angular ya esta definida esa URL para el Backend.
