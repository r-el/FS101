function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return this.name + " makes a sound";
};

function Dog(name) {
  Animal.call(this, name);
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() { return this.name + " barks" };

// // this will be undefined because the arrow function
// Dog.prototype.bark = () => this.name + " barks";

const rocky = new Dog("Rocky");
console.log(rocky.speak()); // Rocky makes a sound
console.log(rocky.bark()); // Rocky barks
