function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

// Must be a regular function, not an arrow function
// Arrow functions do not have their own 'this' context
Rectangle.prototype.area = function () {
  return this.width * this.height; // Must be with this keyword
};

console.log(new Rectangle(5, 4).area());
