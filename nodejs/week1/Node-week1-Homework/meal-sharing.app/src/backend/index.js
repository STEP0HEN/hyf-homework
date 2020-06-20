const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const meals = require("./routes/meals.js");
const cheapMeals = require("./routes/cheap-meals.js");
const largeMeals = require("./routes/large-meals.js");
const randomMeal = require("./routes/meal.js");
const reservations = require("./routes/reservations.js");
const randomReservation = require("./routes/reservation.js");

app.get("/meals", meals);
app.get("/cheap-meals", cheapMeals);
app.get("/large-meals", largeMeals);
app.get("/meal", randomMeal);
app.get("/reservations", reservations);
app.get("/reservation", randomReservation);

app.get("/", (request, response) => response.send("Hello world"));

app.listen(port, () => console.log(`meal app is listening on port ${port}`));
