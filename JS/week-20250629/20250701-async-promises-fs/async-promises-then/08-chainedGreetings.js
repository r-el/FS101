// Exercise 8: Say 3 Things, One by One

const sayAfterDelay = (msg, delay) =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, delay)
  );

const chainedGreetings = () =>
  sayAfterDelay("Hi!", 1000)
    .then(() => sayAfterDelay("How are you?", 2000))
    .then(() => sayAfterDelay("Goodbye!", 1000));

// Example usage:
chainedGreetings();
