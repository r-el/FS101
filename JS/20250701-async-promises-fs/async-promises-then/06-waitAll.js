// Exercise 6: Wait for 3 Promises Together (with .then)

function waitAll() {
  const p1 = new Promise((res) => setTimeout(res, 1000, "First"));
  const p2 = new Promise((res) => setTimeout(res, 2000, "Second"));
  const p3 = new Promise((res) => setTimeout(res, 3000, "Third"));
  return Promise.all([p1, p2, p3]);
}

// Example usage:
waitAll().then((results) => console.log(results));
