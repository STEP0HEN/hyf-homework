const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/reservation", (request, response) => {
	response.json(reservations[Math.floor(reservations.length * Math.random())]);
});

module.exports = router;
