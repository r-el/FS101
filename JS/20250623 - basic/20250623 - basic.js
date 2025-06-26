//ex1
let a = "some string"
let b = "other string"

a += b
b = a.substring(0, a.length - b.length)
a = a.substring(b.length)

console.log(a)
console.log(b)

//ex2
let matrix = [
[1,'x','X',5,'X'],
['X', 'y', 'Y', 'z', '&'],
['A', 'א', '^', true, 5.6],
['*', 'R', 'E', 'L', 'X'],
['x', 3, 'B', 'X', false]
]

for(let i = 0; i< matrix.length; i++)
  for(let j = 0; j < matrix[i].length; j++)
    if((matrix[i][j]) === 'X')
      console.log(`(${i + 1}, ${j + 1})`)
      
//ex3
let family = { parents: {}, children: [ {name: 'Avraham'}, {name: 'Lea'}, {name: 'Rachel'} ] }
console.log(family.children[2].name)

//ex4
let arr = [1,2,3,4,5]
  
for(let i = 0; i < Math.floor(arr.length / 2); i++)
  [ arr[i], arr[arr.length - (i + 1)] ] = [ arr[arr.length - (i + 1)], arr[i] ]
  
console.log(arr)

//ex5
let mixedArr = [1, 2, 3, 4, 'A', 'B', 'C', {}, {}, true, false, null, null, null]

const types = ['number', 'string', 'object', 'boolean', 'null']
const counts = Object.fromEntries(types.map(t => [t, 0]))

mixedArr.forEach(val => {
  if(val === null) counts.null++
  else counts[typeof val]++
})


