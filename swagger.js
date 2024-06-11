const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Metadata info about our API
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Taller Restaurante",
      version: "1.0.0",
    },
  },
  apis: ["./routes/dishRoutes.js"], // Asegúrate de que la ruta sea correcta
};

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

// Function to setup our docs
const swaggerDocs = (app, port) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(`Version 1 Docs are available at http://localhost:${port}/docs`);
};

module.exports = { swaggerDocs };
