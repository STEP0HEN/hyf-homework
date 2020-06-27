const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/", (request, response) => {
	response.send(reservations);
});

router.get("/:id", (request, response) => {
	const reservationId = Number(request.params.id);
	const reservationsWithInputId = reservations.filter(
		(reservation) => reservation.id === reservationId
	);
	response.send(reservationsWithInputId);
});

module.exports = router;
