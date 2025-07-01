// Exercise 3: Random Success or Failure (with .then and .catch)

const randomOperation = () =>
  new Promise((res, rej) => (Math.random() < 0.5 ? res("Success!") : rej("Failure!")));

// Example usage:
randomOperation()
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
