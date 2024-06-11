const mongoose = require("mongoose");

const URI =
  "mongodb+srv://Juaneto:Juan1234@desarrolloweb.ahel2eu.mongodb.net/ApiResta?retryWrites=true&w=majority&appName=DesarrolloWeb";

mongoose.set("strictQuery");

mongoose
  .connect(URI)
  .then(() => console.log("Connect Success <3"))
  .catch((err) => console.log(err));

module.exports = mongoose;
