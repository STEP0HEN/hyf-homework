const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");


router.get("/meal", (request, response) => {
	meals.forEach((meal) => {
		meal.reviews = reviews.filter((foodreview) => foodreview.mealId === meal.id);
		return meal
	});
	response.json(meals[Math.floor(meals.length * Math.random())]);
});

module.exports = router;
