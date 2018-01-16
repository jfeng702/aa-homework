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

// console.log(isPrime(4))
//
// function sumOfNPrimes (n) {
//   let sum = 0;
//   let countPrimes = 0;
//   let i = 2;
//
//   while (countPrimes < n) {
//     if (isPrime(i)) {
//       sum += i;
//       countPrimes++;
//     }
//     i++;
//   }
//   return sum;
// }


function isPrime(number) {
  for (let i = 2; i < number; i ++) {
    if ( number % i === 0) {
      return false;
    }
  }
  return true;
}

  function sumOfNPrimes(n) {
    let sum = 0;
    let i = 2;
    let arr = [];
    while (arr.length < n) {
      if (isPrime(i)) {
        arr.push(i);
        sum += i;
      }

      i ++;
    }
    return sum;
  }
//
// console.log(sumOfNPrimes(3))



function titleize(names, cb) {
  let titleized = names.map (name => `Mx. ${name} Jingleheimer Schmidt`);
  cb(titleized);
}
//
// titleize(["Mary", "Brian", "Leo", "James", "Joey"], (names) => {
//   names.forEach(name => console.log(name));
// });

function plusFive(nums, cb) {
  let fived = nums.map (num => num + 5);
  cb(fived);
}

plusFive([1,2,3,4], (nums) => {
  nums.forEach(num => console.log(num));
});


let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];


function Elephant(name,height,tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;


  Elephant.prototype.trumpet = function() {
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
  };

  Elephant.prototype.grow = function() {
    this.height += 12;
  };

  Elephant.prototype.addTrick = function(trick) {
    this.tricks.push(trick);
  };


  Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
};
}

herd.forEach(function(elephant) {
  Elephant.paradeHelper(elephant);
});

function dinerBreakfast() {
  let order = "i'd like cheesy eggs.";
  console.log(order);

  return function (food) {}
}
