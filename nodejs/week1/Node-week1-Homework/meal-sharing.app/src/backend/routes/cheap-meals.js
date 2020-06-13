const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

const cheapMeals = meals.filter((meal) => meal.price < 80);

router.get("/cheap-meals", (request, response) => {
	response.json(cheapMeals);
});

module.exports = router;
