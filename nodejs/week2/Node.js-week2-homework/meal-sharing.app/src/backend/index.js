const express = require("express");
const app = express();
const port = process.env.PORT || 3001;



const meals = require("./routes/meals.js");
const reservations = require("./routes/reservations.js");
const reviews = require('./routes/reviews.js');



app.get("/", (request, response) => response.send("Hello world"));

app.get("/meals", meals);
app.get("/meals/:id", meals);
app.get("/reservations", reservations);
app.get("/reservations/:id",reservations);
app.get("/reviews", reviews);
app.get("/reviews/:id", reviews);


app.listen(port, () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    console.log(`meal app is listening on port ${port} at ${hours}:${minutes}:${seconds}`)
});
