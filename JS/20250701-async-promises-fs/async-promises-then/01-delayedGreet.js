// Exercise 1: Say Hello After a Delay (with .then)

const delayedGreet = (name, delay) =>
  new Promise((res) => setTimeout(() => res(`Hello, ${name}!`), delay));

// Example usage:
delayedGreet("Ariel", 2000).then((gMsg) => console.log(gMsg));
