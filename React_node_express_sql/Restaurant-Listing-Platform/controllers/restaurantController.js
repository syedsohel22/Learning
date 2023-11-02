// controllers/restaurantController.js
const { Restaurant } = require("../models");

module.exports = {
  async createRestaurant(req, res) {
    // Implement logic to create a restaurant and save it to the database
    try {
      // Extract data from the request body
      const { name, address, contact } = req.body;

      // Use Sequelize to create a new restaurant in the database
      const restaurant = await Restaurant.create({
        name,
        address,
        contact,
      });

      // Send the newly created restaurant as a response
      res.status(201).json(restaurant);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Could not create a restaurant." });
    }
  },
  async getAllRestaurants(req, res) {
    // Implement logic to retrieve all restaurants from the database
    try {
      // Use Sequelize to find all restaurants in the database
      const restaurants = await Restaurant.findAll();

      // Send the list of restaurants as a response
      res.json(restaurants);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Could not retrieve restaurants." });
    }
  },
  async getRestaurantById(req, res) {
    // Implement logic to retrieve a restaurant by ID from the database
    try {
      const { id } = req.params;

      // Use Sequelize to find a restaurant by its ID
      const restaurant = await Restaurant.findByPk(id);

      if (!restaurant) {
        // If the restaurant with the specified ID does not exist
        return res.status(404).json({ error: "Restaurant not found." });
      }

      // Send the restaurant as a response
      res.json(restaurant);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Could not retrieve the restaurant." });
    }
  },
  async updateRestaurant(req, res) {
    // Implement logic to update a restaurant in the database
    try {
      const { id } = req.params;
      const { name, address, contact } = req.body;

      // Use Sequelize to find a restaurant by its ID
      const restaurant = await Restaurant.findByPk(id);

      if (!restaurant) {
        return res.status(404).json({ error: "Restaurant not found." });
      }

      // Update the restaurant's properties if new values are provided
      if (name) restaurant.name = name;
      if (address) restaurant.address = address;
      if (contact) restaurant.contact = contact;

      // Save the changes to the database
      await restaurant.save();

      // Send the updated restaurant as a response
      res.json(restaurant);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Could not update the restaurant." });
    }
  },
  async deleteRestaurant(req, res) {
    // Implement logic to delete a restaurant from the database
    try {
      const { id } = req.params;

      // Use Sequelize to find a restaurant by its ID
      const restaurant = await Restaurant.findByPk(id);

      if (!restaurant) {
        return res.status(404).json({ error: "Restaurant not found." });
      }

      // Use Sequelize to delete the restaurant from the database
      await restaurant.destroy();

      // Send a success message as a response
      res.json({ message: "Restaurant deleted successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Could not delete the restaurant." });
    }
  },
};
