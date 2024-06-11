// Importar Mongoose, un ODM (Object Data Modeling) para MongoDB y Node.js
const mongoose = require("mongoose");

// Definir la URI de conexión a la base de datos MongoDB Atlas
const URI =
  "mongodb+srv://Juaneto:Juan1234@desarrolloweb.ahel2eu.mongodb.net/ApiResta?retryWrites=true&w=majority&appName=DesarrolloWeb";

// Configurar Mongoose para usar "strictQuery", una opción que afecta cómo se manejan las consultas
mongoose.set("strictQuery");

// Conectar a la base de datos MongoDB utilizando la URI proporcionada
mongoose
  .connect(URI)
  .then(() => console.log("Connect Success <3"))  // Mensaje en consola cuando la conexión es exitosa
  .catch((err) => console.log(err));  // Mensaje en consola si hay un error en la conexión

// Exportar la instancia de Mongoose para que pueda ser utilizada en otros módulos
module.exports = mongoose;
