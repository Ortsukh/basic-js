const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  if (typeof disksNumber !== "number" || typeof turnsSpeed !== "number") {
    return false;
  }
  const a = {};
  a.turns = 2 ** disksNumber - 1;
  a.seconds = Math.floor((2 ** disksNumber - 1) * (3600 / turnsSpeed));
  return a;
  // remove line with error and write your code here
};
