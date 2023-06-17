function processNumbers(myobj) {
    const numbers = myobj.numbers;
    const maxNum = Math.max(...numbers);
    let sumNumbers= 0;
    numbers.forEach((number) => {
        sumNumbers += number;
    });
    const result = {
        totalSumnumbers: sumNumbers,
        maxNumber: maxNum,
    }

    return result;
  }
  module.exports = processNumbers;
