// function mysteryScoping1() {
//   var x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// function mysteryScoping2() {
//   const x = 'out of block';
//   if (true) {
//     const x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// function mysteryScoping3() {
//   const x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// function mysteryScoping4() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// function mysteryScoping5() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   let x = 'out of block again';
//   console.log(x);
// }


// function madLib(verb, adj, noun) {
//   console.log(`We shall ${verb.toUpperCase()} ${adj.toUpperCase()} ${noun.toUpperCase()}.`)
// }
// madLib('make', 'best', 'guac');
//
// function ifSubstring(subString, searchString) {
//   return subString.includes(searchString);
// }
//
//
//
// function isSubstring(subphrase, phrase) {
//   return phrase.includes(subphrase);
// }
//
// console.log(isSubstring("time", "time to program"))

// function fizzBuzz(array) {
//   let result = [];
//   for (let i = 1; i < array.length; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       result.push(i);
//     }
//   }
//   console.log(result);
// }
//
// fizzBuzz([1,5,2,6])

function isPrime(number) {
  for (let i = 2; i < number; i ++) {
    if ( number % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(4))

function sumOfNPrimes (n) {
  let sum = 0;
  let countPrimes = 0;
  let i = 2;

  while (countPrimes < n) {
    if (isPrime(i)) {
      sum += i;
      countPrimes++;
    }
    i++;
  }
  return sum;
}

// console.log(sumOfNPrimes(3))
 function titleize (names, callback) {
   let titleized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
   callback(titleized);
 }

 titleize(['Mary', 'Brian', 'Leo'], (names) => {
   names.forEach(name => console.log(name));
 });
