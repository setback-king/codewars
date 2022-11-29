// Description
// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Let's see some cases (input -> output):

// 1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a, b] the function should output an empty list.

// 90, 100 --> []

// My Solution

function sumDigPow(a, b) {
  // Your code here
  let start = a;
  let difference = b - a;
  let numArray = [];
  for (let i = 0; i <= difference; i++) {
    numArray.push(start);
    start += 1;
  }

  let newArray = [];
  for (let i = 0; i < numArray.length; i++) {
    let total = 0;
    let newNumber = numArray[i].toString().split("");

    for (let i = 0; i < newNumber.length; i++) {
      total += Number(newNumber[i]) ** (i + 1);
    }

    if (total === numArray[i]) {
      newArray.push(Number(newNumber.join("")));
    }
  }
  return newArray;
}
