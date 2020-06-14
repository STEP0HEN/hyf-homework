
// creating circles with Canvas
const canvas = document.querySelector("#my-canvas")
const ctx = canvas.getContext('2d');
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;


class Circle{
    constructor(x,y,r,startAngle,endAngle, fillColor){
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    };
    
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r,this.startAngle, this.endAngle)
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.stroke();
    };
};

const circle1 = new Circle(150,90, 50, 0,2* Math.PI, 'black')
console.log(circle1);
circle1.draw();

const circle2 = new Circle(70, 70, 30, 0, 2 * Math.PI, 'turquoise');
circle2.draw();

console.log(circle2)
const circle3 = new Circle(800,100, 40, 0,2* Math.PI, 'grey');
circle3.draw();



//Now Let's make arts

const randomIndex = (num) => {
    return Math.floor(Math.random() * num)
};

const randomCircles = () => {
    const red = randomIndex(256);
    const green = randomIndex(256)
    const blue = randomIndex(256)
    x = randomIndex(canvas.width);
    y = randomIndex(canvas.height);
    r = randomIndex(50);
    startAngle = 0;
    endAngle = 2* Math.PI;
    fillColor = `rgb(${red},${green},${blue})`
    const randomCircle = new Circle (x,y,r,startAngle,endAngle,fillColor);
    randomCircle.draw()
};

randomCircles();

//Drawing random Circles every 100ms
setInterval(randomCircles,100)


//Drawing random circles on mousemove

document.addEventListener("mousemove",randomCircles);