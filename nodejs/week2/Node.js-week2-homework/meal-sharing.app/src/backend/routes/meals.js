const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");

router.get("/meals", (request, response) => {
	//meals
	if (request.url === "/meals") {
		response.json(meals);
	}
	//Maxprice
	if (request.query.maxPrice) {
		const maxPriceInput = request.query.maxPrice;
		const mealsLessThanMaxPrice = meals.filter(
			(meal) => meal.price < maxPriceInput
		);
		response.json(mealsLessThanMaxPrice);
	}
	//Title
	else if (request.query.title) {
		const titleInput = request.query.title;
		const mealsThatMatchTitlte = meals.filter((meal) => {
			const mealTitle = meal.title.toLocaleLowerCase();
			if (mealTitle.includes(titleInput.toLocaleLowerCase())) {
				return meal;
			}
		});
		response.json(mealsThatMatchTitlte);
	} //Createdafter
	else if (request.query.createdAfter) {
		const createdAfterInput = request.query.createdAfter;
		const createdAfterSpecificDate = meals.filter((meal) => {
			return meal.createdAt > createdAfterInput;
		});
		response.json(createdAfterSpecificDate);
	} //Limit
	else if (request.query.limit) {
		const limitInput = Number(request.query.limit);
		const mealsThatMatchLimit = meals.filter((meal, index) => {
			return index < limitInput;
		});
		response.json(mealsThatMatchLimit);
	} //Handle wrong or unexpecetd input query
	else {
		response.send("sorry wrong format");
	}
});

//meals id
router.get("/meals/:id", (request, response) => {
	const mealId = Number(request.params.id);
	const mealWithInputId = meals.filter((meal) => meal.id === mealId);
	//handle no match and wrong inputs
	if (mealWithInputId.length === 0) {
		response.send("sorry no match");
	} else {
		//return meals that match id
		response.json(mealWithInputId);
	}
});

module.exports = router;
