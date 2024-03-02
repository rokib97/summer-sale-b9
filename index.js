function concatenateArrayToString(arr) {
  let result = "";
  for (const element of arr) {
    result += element;
  }
  return result;
}

const array = ["Hello", " ", "World", "!"];
const concatenatedString = concatenateArrayToString(array);
console.log(concatenatedString);
