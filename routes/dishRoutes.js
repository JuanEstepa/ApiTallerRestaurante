const routes = require("express").Router();
const {
  findAll,
  save,
  findById,
  erase,
  start,
  update,
} = require("../controllers/dishController");

routes.get("/", start);

/**
 * @swagger
 * /dishes:
 *   get:
 *     summary: Retrieve a list of dishes
 *     responses:
 *       200:
 *         description: A list of dishes
 */
routes.get("/dishes", findAll);

/**
 * @swagger
 * /dishes/{id}:
 *   get:
 *     summary: Retrieve a single dish by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The dish ID
 *     responses:
 *       200:
 *         description: A single dish
 *       404:
 *         description: Dish not found
 */
routes.get("/dishes/:id", findById);

/**
 * @swagger
 * /dishes:
 *   post:
 *     summary: Create a new dish
 *     responses:
 *       201:
 *         description: The created dish
 */
routes.post("/dishes", save);

/**
 * @swagger
 * /dishes/{id}:
 *   delete:
 *     summary: Delete a dish by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The dish ID
 *     responses:
 *       200:
 *         description: Dish deleted
 *       404:
 *         description: Dish not found
 */
routes.delete("/dishes/:id", erase);

/**
 * @swagger
 * /dishes/{id}:
 *   put:
 *     summary: Update a dish by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The dish ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dish'
 *     responses:
 *       200:
 *         description: Updated dish
 *       404:
 *         description: Dish not found
 */
routes.put("/dishes/:id", update);

module.exports = routes;
