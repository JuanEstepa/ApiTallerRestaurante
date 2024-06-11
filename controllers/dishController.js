const Dish = require("../models/dishModel");

module.exports = {
  start: async (req, res) => {
    try {
      return res
        .status(200)
        .json({
          msg: "Conectado correctamente, /docs para ver los end points",
        });
    } catch (err) {
      return res.status(500).json({ err: err });
    }
  },
  findAll: async (req, res) => {
    try {
      const result = await Dish.find({});

      return res.status(200).json({ data: result });
    } catch (err) {
      return res.status(500).json({ err: err });
    }
  },
  save: async (req, res) => {
    try {
      const dish = new Dish(req.body);
      await dish.save();

      return res.status(201).json({ data: dish });
    } catch (err) {
      return res.status(500).json({ err: err });
    }
  },
  findById: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Dish.findById(id);

      return res.status(200).json({ data: result });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },
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
};
