const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/reservation", (request, response) => {
	const randomReservation = reservations[Math.floor(reservations.length * Math.random())]
	response.json(randomReservation);
});

module.exports = router;
