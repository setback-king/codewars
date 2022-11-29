// My Solution

function spinWords(string) {
  string = string.split(" ");
  return string
    .map((word, i) => {
      if (word.length >= 5) {
        return word.split("").reverse().join("");
      }
      return word;
    })
    .join(" ");
}
