//////////////////////Shape Class///////////////////////////
function Shape() {
  if (this.constructor === Shape) {
    throw new Error("This class is abstract class");
  }
}

//////////////////////Rectangle Class///////////////////////////

function Rectangle(x, y) {
  Object.defineProperty(this, "x", {
    get: () => x,
    set: (value) => (x = value),
    enumerable: false,
    configurable: false,
  });
  Object.defineProperty(this, "y", {
    get: () => y,
    set: (value) => (y = value),
    enumerable: false,
    configurable: false,
  });
  Shape.call(this);
}
Rectangle.prototype.valueOf = function () {
  return this.x * this.y;
};
Rectangle.prototype.toString = function () {
  let area = this.x * this.y;
  let perimeter = (this.x + this.y) * 2;
  return (
    "Area of rectangle is : " +
    area +
    ", perimeter of rectangle is : " +
    perimeter
  );
};

//////////////////////Square Class///////////////////////////

function Square(x) {
  Rectangle.call(this, x, x);
  Square.squareCounter++;
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.toString = function () {
  let area = this.x * this.x;
  let perimeter = this.x * 4;
  return (
    "Area of square is : " + area + ", perimeter of square  is : " + perimeter
  );
};
Square.squareCounter = 0;

//////////////////////Test////////////////////////////////
// Test: Abstract class Shape should not be instantiated
try {
  let s = new Shape();
} catch (err) {
  console.log("shape Test Passed:", err.message);
}

//Rectangle test
var rec1 = new Rectangle(3, 2);
var rec2 = new Rectangle(5, 5);
console.log(rec1.toString());
console.log(rec2.toString());

///Square test
var square1 = new Square(8);
console.log(square1.toString());
console.log("Square count: ", Square.squareCounter);
//Test valueOf method
console.log(rec1 + rec2);
