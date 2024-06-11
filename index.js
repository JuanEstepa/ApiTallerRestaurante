const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { swaggerDocs: V1SwaggerDocs } = require("./swagger");

//Connect to database
require("./drivers/connect-db");

const app = express();
app.set("PORT", process.env.PORT || 3000);

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", require("./routes/dishRoutes"));

//start server
app.listen(app.get("PORT"), () => {
  console.log(`Server Ready al port ${app.get("PORT")}`);
  V1SwaggerDocs(app, app.get("PORT"));
});
