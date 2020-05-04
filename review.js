// Objectives:
// Student can write a function using arrow syntax
// Student can write a for in loop and access information correctly
// Student can work with nested data
// Student can delete object properties
// Student can copy an object or an array
// **Student can use .map() .filter() and .reduce()**
// ---------------------------------------------------------
// Number 1
// Consider this array of objects:
const justiceLeague = [
  { name: "Bruce", age: 37, alias: "Batman" },
  { name: "Clark", age: 50, alias: "Superman" },
  { name: "Diana", age: 470, alias: "Wonderwoman" },
  { name: "Dick", age: 15, alias: "Robin" },
  { name: "Hal", age: 42, alias: "Green Lantern" },
]

// Create a new array of just the names using a for loop

let justiceLeagueNames = []
for (let i = 0; i < justiceLeague.length; i++) {
  justiceLeagueNames.push(justiceLeague[i].name)
}

console.log(justiceLeagueNames)

// do the same thing but this time use .map

let jLNames = justiceLeague.map(hero => hero.name)

console.log(jLNames)

// -----------------------------------------------------------
// Number 2
// Find out which members of the justice league can legally drink alcohol and store them to a new array

// Solve first witha for loop
//   let legal = []
//   for (let i = 0; i < justiceLeague.length; i++) {
//       if (justiceLeague[i].age >= 21) {
//           legal.push(justiceLeague[i].name)
//       }
//   }
//   console.log(legal)

// Now solve with reduce

let legal = justiceLeague.reduce(
  (output, hero) => (hero.age >= 21 ? [...output, hero] : output),
  []
)

console.log(legal)

// -----------------------------------------------------------
// Number 3
// Write a function that iterates through the array and return a string welcoming everyone in the array to Devmountain
// welcome(justiceLeague) => "Welcome Bruce, Clark, Diana, Dick, and Hal to Devmountain!"

// solve with for loop

function welcome(array) {
  let output = ""
  for (let i = 0; i < justiceLeague.length; i++) {
    if (i === 0) {
      output += "Welcome " + justiceLeague[i].name + ", "
    } else if (i < justiceLeague.length - 1) {
      output += justiceLeague[i].name + ", "
    } else {
      output += "and " + justiceLeague[i].name + " to Devmountain!"
    }
  }
  return output
}

// now solve with reduce

const welcomeMessage = arr => arr.reduce((output, elem, index) => index < arr.length - 1 ? output += elem.name + ', ' : output += 'and ' + elem.name + ' to DevMountain!', 'Welcome ' )


console.log(welcomeMessage(justiceLeague))

// ------------------------------------------------------------

// Bonus

// Using .indexOf() and .splice(), change the justiceLeague array so that Bruce's alias returns 'classified'