const processNumbersFunction = require("../src/processNumbers.js");

describe("GIVEN we coded the processNumbers function", () => {
  describe("WHEN invoking the function with numbers = [1, 2, 3, 4, 9]", () => {
    it("THEN it should return an object with sum=19 and max=9 ", () => {
        const myobj = {
            numbers: [1, 2, 3, 4, 9],
        }
      const result = processNumbersFunction(myobj);
      expect(result.maxNumber).toBe(9);
      expect(result.totalSumnumbers).toBe(19);
    });
  });
});
