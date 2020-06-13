const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

const largeMeals = meals.filter((meal) => meal.price > 80);

largeMeals.forEach((food) => {
	food.review = reviews.filter((dish) => dish.mealId === food.id);
});

router.get("/large-meals", (request, response) => {
	response.json(largeMeals);
});

module.exports = router;
