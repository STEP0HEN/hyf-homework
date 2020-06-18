const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json");

router.get("/reviews", (request, response) => {
	response.send(reviews);
});

router.get("/reviews/:id", (request, response) => {
	const reviewId = Number(request.params.id);
	const reviewsWithInputId = reviews.filter((review) => review.id === reviewId);
	response.send(reviewsWithInputId);
});

module.exports = router;
