const express = require("express");
const calculator = express();
const port = 3000;
calculator.use(express.json());
calculator.use(express.urlencoded({ extended: true }));

function calculatorFormular(method, arrayOfNumbers) {
	if (method === "add") {
		const total = arrayOfNumbers.reduce((total, num) => total + num);
		return total;
	}

	if (method === "multiply") {
		const product = arrayOfNumbers.reduce((total, num) => total * num);
		return product;
	}

	if (method === "subtract") {
		const difference = arrayOfNumbers.reduce((total, num) => total - num);
		return difference;
	}

	if (method === "divide") {
		const quotient = arrayOfNumbers.reduce((total, num) => total / num);
		return quotient;
	}
}

// Calculator using :method (path) parameter:
calculator.get("/calculator/:method", (request, response) => {
	const method = request.params.method;
	const queryParams = Object.values(request.query);
	const numsMerged = [].concat.apply([], queryParams);
	const calculateQueryParams = numsMerged.map(Number);

	const answer = calculatorFormular(method, calculateQueryParams);
	response.json(answer);
});

//Calculate using request.body

calculator.post("/calculator", (request, response) => {
	const method = request.body.method;
	const firstParam = Object.values(request.body.firstParam);
	const secondParam = Object.values(request.body.secondParam);
	const numsMerged = [].concat.apply([firstParam], secondParam);
	const calculateQueryParams = numsMerged.map(Number);

	const result = calculatorFormular(method, calculateQueryParams);

	response.json(result);
});

calculator.listen(port, () => {
	console.log(`Calculator is listening on port ${port}`);
});
