const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

//Get all meals and api/meals with query parameters
router.get("/", async (request, response) => {
	try {
		const {
			maxPrice,
			availableReservations,
			title,
			createdAfter,
			limit,
		} = request.query;
		const allMeals = await knex("meal").select("*");
		//Maxprice
		if (maxPrice) {
			try {
				const mealsLessThanMaxPrice = await knex("meal")
					.where("price", "<", maxPrice)
					.then((data) => {
						response.json(data);
					});
			} catch (error) {
				throw error;
			}
		} else if (availableReservations === "true") {
			//available reservations for meals
			try {
				const mealsFromDb = await knex("meal")
					.select("*")
					.sum({ available_reservations: "reservation.number_of_guests" })
					.join("reservation", { "meal.id": "reservation.meal_id" })
					.groupBy("meal.title")
					.having("available_reservations", ">", "max_reservation")
					.then((data) => {
						if (data.length === 0) {
							response.send("sorry no reservations available");
						} else response.json(data);
					});
			} catch (error) {
				throw error;
			}
		} else if (title) {
			//title
			try {
				const mealsMatchingTitlte = await knex("meal")
					.where("title", "like", `%${title}%`)
					.then((data) => {
						response.json(data);
					});
			} catch (error) {
				throw error;
			}
		} else if (createdAfter) {
			//createdAfter
			try {
				const CreatedAfterData = await knex("meal")
					.where("created_date", ">", createdAfter)
					.then((mealsCreatedAfterDate) => {
						response.json(mealsCreatedAfterDate);
					});
			} catch (error) {
				throw error;
			}
		} else if (limit) {
			//limit
			try {
				const mealsData = await knex("meal")
					.limit(limit)
					.then((mealsOutPutLimit) => {
						response.json(mealsOutPutLimit);
					});
			} catch (error) {
				throw error;
			}
		} else if (Object.keys(request.query).length === 0) {
			response.json(allMeals);
		} else {
			//Handle wrong or unexpecetd input query
			response.send("sorry wrong format");
		}
	} catch (error) {
		throw error;
	}
});

//Get meals with specific id
router.get("/:id", async (request, response) => {
	try {
		const titles = await knex("meal")
			.select("*")
			.where({ id: request.params.id });
		if (titles.length === 0) {
			response.send("sorry meal not found");
		} else {
			response.json(titles);
		}
	} catch (error) {
		throw error;
	}
});

//Add meals to DB
router.post("/", async (request, response) => {
	try {
		const newMeal = {
			id: request.query.id,
			title: request.query.title,
			description: request.query.description,
			location: request.query.location,
			when: request.query.when,
			max_reservations: request.query.max_reservations,
			price: request.query.price,
			created_date: request.query.created_date,
		};
		await knex("meal").insert(newMeal);
		response.send("meal added, thank you");
	} catch (error) {
		`Something went wrong : ${error}`;
	}
});

//Update a meal by id
router.put("/:id", async (request, response) => {
	const mealToBeUpdated = await knex("meal")
		.where({ id: request.params.id })
		.update({ title: request.query.name });
	response.send("meal updated succesfully");
});

//Delete a meal by id
router.delete("/:id", async (request, response) => {
	try {
		const mealToBeDeleted = await knex("meal")
			.where({ id: request.params.id })
			.delete();
		response.send("meal deleted succesfully from database");
	} catch (error) {
		throw error;
	}
});

module.exports = router;
