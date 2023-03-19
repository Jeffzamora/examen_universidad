// Importamos el módulo express para poder crear una aplicación web.
const express = require("express");
// Importamos el módulo mongoose para conectarse a la base de datos MongoDB.
const mongoose = require("mongoose");
// Importamos el archivo que contiene las rutas de la aplicación.
const empleadoRoutes = require("./routes/empleado");
// Creamos una nueva instancia de la aplicación de Express.
const app = express();
// Definimos el número de puerto en el que se escucharán las solicitudes.
const port = 4020;
// Definimos la cadena de conexión a la base de datos MongoDB.
const MONGO_URI = "mongodb+srv://jeffzamorachiqui97:Chiqui97.@bdempleado.k0jfmf7.mongodb.net/db_empleado?retryWrites=true&w=majority"

// Establecemos un middleware para que la aplicación analice las solicitudes entrantes en formato JSON.
app.use(express.json());

// Establecemos la ruta base para todas las rutas de la API y montamos las rutas de empleado en esta ruta base.
app.use("/api", empleadoRoutes);

// Definimos una ruta principal que devuelve un mensaje de bienvenida en formato HTML.
app.get("/", (req, res) => {
  res.send("<h1>Sistema de empleado</h1>");
});

// Nos conectamos a la base de datos de MongoDB usando la cadena de conexión definida anteriormente. Si la conexión tiene éxito, se muestra un mensaje en la consola.
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Conectado a MongoDB"))
  .catch((error) => console.error(error));

// Hacemos que la aplicación escuche las solicitudes entrantes en el puerto especificado y mostramos un mensaje en la consola para confirmar que la aplicación está en ejecución.
app.listen(port, () => {
    console.log("Applicacion corriendo en puerto ", port);
});

// Este código no es necesario para el funcionamiento de la aplicación. Lo que hace es escuchar la señal 'SIGHUP' y mostrar un mensaje en la consola cuando se recibe esa señal. Luego, se envía la señal 'SIGHUP' al proceso actual para finalizarlo.
process.on('SIGHUP', () => {
    console.log('SIGHUP');
});
process.kill(process.pid, 'SIGHUP')
