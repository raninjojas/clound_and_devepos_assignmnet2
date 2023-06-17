const processNumbersFunction = require("./processNumbers.js");
const myobj = {
    numbers: [1, 2, 3, 4, 9],
}
const response = processNumbersFunction(myobj);
const text = JSON.stringify(response);
console.log(response);
