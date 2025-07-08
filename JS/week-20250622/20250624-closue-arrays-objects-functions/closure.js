//ex1
function createCounter() {
  let count = 0;
  return () => ++count;
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

//ex2
let secretHolder = (secret) => ({
  getSecret: () => secret,
  setSecret: (newSecret) => {
    secret = newSecret;
  },
});

const mySecret = secretHolder("abc");
console.log(mySecret.getSecret()); // abc
mySecret.setSecret(123);
console.log(mySecret.getSecret()); // 123

//ex3
// let buildFunctions = () => Array.from({ length: 3 }, (_, i) => () => console.log(i))
function buildFunctions() {
  const arr = [];
  for (let i = 0; i < 3; i++) arr.push(() => console.log(i));
  return arr;
}

const funcs = buildFunctions();
funcs[0](); // should print 0
funcs[1](); // should print 1
funcs[2](); // should print 2
