const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");


router.get("/large-meals", (request, response) => {
	const largeMeals = meals.filter((meal) => meal.price > 80)
	.map((meal) => {
		meal.reviews = reviews.filter((review) => review.mealId === meal.id)
		return meal;
	});
	response.json(largeMeals);
});

module.exports = router;
