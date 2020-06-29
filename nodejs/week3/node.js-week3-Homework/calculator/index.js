const express = require("express");
const calculator = express();
const port = 3000;
calculator.use(express.json());
calculator.use(express.urlencoded({ extended: true }));

// Calculator using :method (path) parameter:
calculator.get("/calculator/:method", (request, response) => {
	const queryParams = Object.values(request.query);
	const numsMerged = [].concat.apply([], queryParams);
	const calculateQueryParams = numsMerged.map(Number);

	if (request.params.method === "multiply") {
		const product = calculateQueryParams.reduce((total, num) => total * num);
		response.send(`product = ${product}`);
	}

	if (request.params.method === "subtract") {
		const difference = calculateQueryParams.reduce((total, num) => total - num);
		response.send(`${difference}`);
	}

	if (request.params.method === "add") {
		const total = calculateQueryParams.reduce((total, num) => total + num);
		response.send(`total = ${total}`);
	}

	if (request.params.method === "divide") {
		const quotient = calculateQueryParams.reduce((total, num) => total / num);
		response.send(`Answer = ${quotient}`);
	}
});

//Calculate using request.body

calculator.post("/calculator", (request, response) => {
	const method = request.body.method;
	const queryParams = Object.values(request.query);
	const numsMerged = [].concat.apply([], queryParams);
	const calculateQueryParams = numsMerged.map(Number);

	if (method === "add") {
		const total = calculateQueryParams.reduce((total, num) => total + num);
		response.send(`answer = ${total}`);
	}

	if (method === "multiply") {
		const product = calculateQueryParams.reduce((total, num) => total * num);
		response.send(`product = ${product}`);
	}

	if (method === "subtract") {
		const difference = calculateQueryParams.reduce((total, num) => total - num);
		response.send(`difference = ${difference}`);
	}

	if (method === "divide") {
		const quotient = calculateQueryParams.reduce((total, num) => total / num);
		response.send(`answer = ${quotient}`);
	}
});

calculator.listen(port, () => {
	console.log(`Calculator is listening on port ${port}`);
});
