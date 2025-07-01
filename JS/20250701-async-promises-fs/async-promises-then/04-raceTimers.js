// Exercise 4: Timer Race - Which is Faster? (with .then)

function raceTimers() {
  const timerA = new Promise((res) => setTimeout(res, 2000, "Timer A finished!"));
  const timerB = new Promise((res) => setTimeout(res, 3000, "Timer B finished!"));

  // Promise.race returns the result of the first finished promise.
  return Promise.race([timerA, timerB]);
}

// Example usage:
raceTimers().then((msg) => console.log(msg));
