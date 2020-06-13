const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

meals.forEach((meal) => {
	meal.review = reviews.filter((foodreview) => foodreview.mealdId === meal.id);
});

router.get("/meal", (request, response) => {
	response.json(meals[Math.floor(meals.length * Math.random())]);
});

module.exports = router;
