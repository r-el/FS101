// main.js - Demo runner for all exercises

const extractNumbers = require('./01-extract-numbers');
const sumNumbersSafe = require('./02-sum-numbers-safe');
const filterLargeSums = require('./03-filter-large-sums');
const summaryStats = require('./04-summary-stats');
const safeCalculator = require('./05-safe-calculator');

console.log('Exercise 1: extractNumbers');
console.log(extractNumbers([1, 'hi', 5])); // [1, 5]
try {
    extractNumbers('bad');
} catch (e) {
    console.log('Error:', e.message);
}

console.log('\nExercise 2: sumNumbersSafe');
console.log(sumNumbersSafe([2, 4, 'bad'])); // 6
console.log(sumNumbersSafe('fail')); // 0, logs warning

console.log('\nExercise 3: filterLargeSums');
console.log(filterLargeSums([[1,2,3], [10,'bad',5], 'fail'], 10)); // [[10,'bad',5]]

console.log('\nExercise 4: summaryStats');
console.log(summaryStats([[1,2,3], [5,5,5], [100], 'bad'])); // [{ sum: 15, average: 5 }, { sum: 100, average: 100 }]

console.log('\nExercise 5: safeCalculator');
console.log(safeCalculator(2, 3, 'add')); // 5
try {
    safeCalculator(2, '3', 'add');
} catch (e) {
    console.log('Error:', e.message);
}
