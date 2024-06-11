// Importar Mongoose, un ODM (Object Data Modeling) para MongoDB y Node.js
const mongoose = require("mongoose");

// Extraer el Schema constructor de Mongoose
const { Schema } = mongoose;

// Definir un esquema para el modelo Dish
const dishSchema = new Schema({
  name: {
    type: String,  // El tipo de dato es String
    required: true,  // Este campo es obligatorio
  },
  price: {
    type: Number,  // El tipo de dato es Number
    required: true,  // Este campo es obligatorio
  },
  type: {
    type: String,  // El tipo de dato es String
    required: true,  // Este campo es obligatorio
  },
  description: {
    type: String,  // El tipo de dato es String
    required: true,  // Este campo es obligatorio
  },
  image: {
    type: String,  // El tipo de dato es String
    required: true,  // Este campo es obligatorio
  },
});

// Exportar el modelo 'dish', basado en el esquema 'dishSchema'
// Esto permite que el modelo sea utilizado en otras partes de la aplicación
module.exports = mongoose.model("dish", dishSchema);

