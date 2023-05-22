class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }
  
  getRadius() {
    return this.radius;
  }
  
  setRadius(radius) {
    this.radius = radius;
  }
  
  getColor() {
    return this.color;
  }
  
  setColor(color) {
    this.color = color;
  }
  
  toString() {
    return `radius = ${this.radius} and color = ${this.color}`;
  }
  
  getArea() {
    return this.radius * this.radius * (22/7);
  }
  
  getCircumference() {
    return 2 * (22/7) * this.radius;
  }
}


const circle1 = new Circle(1.0);
console.log(circle1.toString());
console.log("Area:", circle1.getArea());
console.log("Circumference:", circle1.getCircumference());

const circle2 = new Circle(7,"orange");
console.log(circle2.toString());
console.log("Area:", circle2.getArea());
console.log("Circumference:", circle2.getCircumference());

const circle3 = new Circle(5, "blue");
console.log(circle3.toString());
console.log("Area:", circle3.getArea());
console.log("Circumference:", circle3.getCircumference());


// Output Link: https://jsfiddle.net/9a0n4x8s/7/
