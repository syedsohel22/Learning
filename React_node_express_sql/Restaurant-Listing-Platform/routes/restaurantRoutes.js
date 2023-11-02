// routes/restaurantRoutes.js
const express = require("express");
const router = express.Router();

// Import your restaurant controller
const restaurantController = require("../controllers/restaurantController");

// Define routes
router.post("/", restaurantController.createRestaurant);
router.get("/", restaurantController.getAllRestaurants);
router.get("/:id", restaurantController.getRestaurantById);
router.put("/:id", restaurantController.updateRestaurant);
router.delete("/:id", restaurantController.deleteRestaurant);

module.exports = router;
