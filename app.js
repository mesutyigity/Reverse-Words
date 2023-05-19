// let sentence =
//   "People should not be afraid of their governments; the government should be afraid of their people.";

// console.log(sentence.split(" ").reverse().join(" "));

// let sentence = prompt("Give a sentence to reverse").split(" ");
// function reversedSentence(a) {
//   let newStr = "";
//   for (let i = a.length - 1; i >= 0; i--) {
//     newStr += a[i];
//   }
//   return newStr;
// }
// console.log(reversedSentence(sentence));

let sentence = prompt("Give a sentence to reverse").split(" ");
function reversedSentence(a) {
  let newStr = "";
  for (let i = a.length - 1; i >= 0; i--) {
    newStr += a[i];
  }
  return newStr;
}
console.log(reversedSentence(sentence));
