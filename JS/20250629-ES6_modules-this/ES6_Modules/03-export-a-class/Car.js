export class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getDetails = () => `${this.make} ${this.model}`;
}
