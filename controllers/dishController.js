const Dish = require("../models/dishModel");

module.exports = {
   /**
   * Start endpoint
   * @route GET /start
   * @desc Sends a connection confirmation message.
   * @access Public
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Object} 200 - Connected successfully message.
   * @returns {Object} 500 - Error message.
   */
  start: async (req, res) => {
    try {
      return res
        .status(200)
        .send("Conectado correctamente, /docs para ver los end points");
    } catch (err) {
      return res.status(500).json({ err: err });
    }
  },

  /**
   * Find all dishes
   * @route GET /dishes
   * @desc Retrieves all dishes from the database.
   * @access Public
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Object} 200 - Array of dish objects.
   * @returns {Object} 500 - Error message.
   */
  findAll: async (req, res) => {
    try {
      const result = await Dish.find({});

      return res.status(200).json({ data: result });
    } catch (err) {
      return res.status(500).json({ err: err });
    }
  },
  /**
   * Save a new dish
   * @route POST /dishes
   * @desc Saves a new dish to the database.
   * @access Public
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Object} 201 - The created dish object.
   * @returns {Object} 500 - Error message.
   */
  save: async (req, res) => {
    try {
      const dish = new Dish(req.body);
      await dish.save();

      return res.status(201).json({ data: dish });
    } catch (err) {
      return res.status(500).json({ err: err });
    }
  },
   /**
   * Find dish by ID
   * @route GET /dishes/:id
   * @desc Retrieves a dish by its ID from the database.
   * @access Public
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Object} 200 - The dish object.
   * @returns {Object} 500 - Error message.
   */
  findById: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Dish.findById(id);

      return res.status(200).json({ data: result });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },
   /**
   * Delete dish by ID
   * @route DELETE /dishes/:id
   * @desc Deletes a dish by its ID from the database.
   * @access Public
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Object} 200 - Success message.
   * @returns {Object} 404 - Object ID not found message.
   * @returns {Object} 500 - Error message.
   */
  erase: async (req, res) => {
    const { id } = req.params;
    try {
      const query = await Dish.findById(id);

      if (query) {
        const result = await Dish.findByIdAndDelete(id);
        console.log("eliminado");
        return res.status(200).json({ msg: "Eliminado con exito" });
      } else {
        return res.status(404).json({ msg: "El ObjectId no Existe" });
      }
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
   /**
   * Update dish by ID
   * @route PUT /dishes/:id
   * @desc Updates a dish by its ID in the database.
   * @access Public
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Object} 200 - The updated dish object.
   * @returns {Object} 404 - Object ID not found message.
   * @returns {Object} 500 - Error message.
   */
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, price, type, description, image } = req.body;

      const query = await Dish.findById(id);

      if (query) {
        const filter = { _id: id };
        const update = {
          name: name,
          price: price,
          type: type,
          description: description,
          image: image,
        };

        const result = await Dish.findByIdAndUpdate(filter, update);

        return res.status(200).json({ data: result });
      } else {
        return res.status(404).json({ msg: "El ObjectId no Existe" });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
