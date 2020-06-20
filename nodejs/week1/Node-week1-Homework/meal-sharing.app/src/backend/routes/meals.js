const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");



router.get("/meals", (request, response) => {
    meals.forEach((meal) => {
        meal.reviews = reviews.filter((review) => meal.id === review.mealId);
                return meal;
        });
	response.send(meals);
});

module.exports = router;
