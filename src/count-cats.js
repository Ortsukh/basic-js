const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let x = 0;
  matrix.forEach((element) => {
    while (element.indexOf("^^") !== -1) {
      x++;
      element.splice(element.indexOf("^^"), 1);
    }
  });
  return x;
  // remove line with error and write your code here
};
