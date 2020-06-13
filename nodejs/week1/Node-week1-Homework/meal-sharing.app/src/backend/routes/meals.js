const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

meals.forEach(meal => {
    meal.review = reviews.filter(review => meal.id === review.mealdId);
});


router.get("/meals", (request, response) => {
	response.send(meals);
});

module.exports = router;
