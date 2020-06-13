// Circle Calculator.

class Circle {
	constructor(radius) {
		this.radius = radius;
	}
	getDiameter() {
		const diameter = this.radius * 2;
		console.log(`The diameter of the circle is ${diameter}`);
	}
	getCircumference() {
		const circumference = Math.PI * this.radius * 2;
		console.log(
			`The circumference of the circle is ${circumference.toFixed(3)}`
		);
	}

	getArea() {
		const area = Math.PI * (this.radius * this.radius);
		console.log(`The area of the circle is ${area.toFixed(3)}`);
	}
}

const circle = new Circle(10);

circle.getDiameter();
circle.getArea();
circle.getCircumference();

const secondCircle = new Circle(30);
secondCircle.getArea();
secondCircle.getCircumference();
secondCircle.getDiameter();