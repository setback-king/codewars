// Description 

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// My Solution

function generateHashtag(string) {
    if (string.trim() === '') return false;
  
    const stringWithCamelCase = string
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  
    const stringWithHashtag = `#${stringWithCamelCase.trim()}`;
  
    return stringWithHashtag.length > 140 ? false : stringWithHashtag;
  }