const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let num = 0;
    if (Array.isArray(arr) && arr.length === 0) {
      return 1;
    }
    arr.forEach((e) => {
      let count = 1;
      if (Array.isArray(e)) {
        count += this.calculateDepth(e);
      }
      num = Math.max(num, count);
    });
    return num;
  }
};
