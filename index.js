let words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet',
  'consectetur', 'adipiscing', 'elit.', 'Nullam', 'lectus', 'quam'
]

let result = words.reduce((acc, current, index) => {

  let word = current;

  if (index % 2 === 0) {

    word = current.toUpperCase()

  }

  acc.push(word);

  return acc;

}, []).join(' ')

console.log(result)

let newwords = ['Madrid', 'Rome', 'Berlin', 'Barcelona', 'Milan', 'Batumi'];


let newresult = newwords.filter(function (word) {

  if (word.toLocaleLowerCase().includes('m')) {

    return true

  }

  return false
})
console.log(newresult)

let newwordss = newresult.forEach((n) => console.log(n))

let newworld = ['Madrid', 'Rome', 'Berlin', 'Barcelona', 'Milan', 'Batumi'];


let newkey = newworld.filter((newworld) => newworld.toLocaleLowerCase().includes('m'))

console.log(newkey)

let massive = newkey.forEach((x, i) => console.log(x, i))

let items = [12, 'Google', 32, null, undefined, 'yahoo', 0, 'bing'];
let newitems = items.map(item => {
  if (typeof item === 'number') {
    return item * item;
  } else if (typeof item === 'string') {
    return item.toUpperCase()
  }
  return item;
})
console.log(newitems)

let users = [
  {name: 'giorgi', age: 16},
  {name: 'levani', age: 90},
  {name: 'nino', age: 30},
  {name: 'otari', age: 11},
  {name: 'mari', age: 28}
]

let newresultat = users.filter(item => item.age > 18).map(item => item.name);

console.log(newresultat)