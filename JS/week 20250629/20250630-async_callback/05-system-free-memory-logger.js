import { freemem, totalmem } from "os";

const ONE_SECOND = 1000;
const PERCENTAGE = 100;

/** * Logs the percentage of free memory at specified intervals.
 * @param {number} times - Number of times to log the free memory.
 * @param {number} interval - Interval in milliseconds between logs.
 */
function logFreeMemory(times, interval) {
  let count = 0;

  const intervalId = setInterval(() => {
    let freeMemoryPercent = Math.round((freemem() * PERCENTAGE) / totalmem());
    console.log(`Free Memory: ${freeMemoryPercent}%`);

    if (++count >= times) clearInterval(intervalId);
  }, interval);
}

// Log free memory percentage 5 times every second
logFreeMemory(5, ONE_SECOND);
