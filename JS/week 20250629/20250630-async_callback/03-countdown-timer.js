const ONE_SECOND = 1000;

/**
 * Countdown timer that prints numbers from n to 0 at 1-second intervals.
 * @param {number} n - Starting number for the countdown.
 */
function countdown(n) {
  if (n < 0) {
    console.log("Time's up!");
    return;
  }
  console.log(n);
  setTimeout(() => countdown(n - 1), ONE_SECOND);
}

countdown(5);
