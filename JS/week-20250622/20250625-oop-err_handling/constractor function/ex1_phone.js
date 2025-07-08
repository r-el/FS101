function Phone(brand, model) {
  this.brand = brand;
  this.model = model;

  // Copy for each object
  this.details = () => ` Phone: ${brand} ${model}`;
}

// Only once
// Phone.prototype.details = function(){ return `Phone: ${brand} ${model}`}

console.log(new Phone("Samsung", "S22").details());
