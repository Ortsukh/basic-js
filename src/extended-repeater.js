const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (!options.hasOwnProperty("separator")) {
    options.separator = "+";
  }
  if (!options.hasOwnProperty("additionSeparator")) {
    options.additionSeparator = "|";
  }
  if (options.additionRepeatTimes == undefined) {
    options.additionRepeatTimes = 1;
  }
  if (!options.hasOwnProperty("addition")) {
    options.addition = "";
  }
  if (options.repeatTimes == undefined) {
    options.repeatTimes = 1;
  }
  let string = "";
  if (options.repeatTimes > 0) {
    if (options.additionRepeatTimes > 1) {
      let other = (options.addition + options.additionSeparator).repeat(
        options.additionRepeatTimes
      );
      string = (
        str +
        other.slice(0, -options.additionSeparator.length) +
        options.separator
      ).repeat(options.repeatTimes);
    } else if (options.additionRepeatTimes == 1) {
      string = (str + options.addition + options.separator).repeat(
        options.repeatTimes
      );
    } else {
      string = (str + options.separator).repeat(options.repeatTimes);
    }
    return string.slice(0, string.length - options.separator.length);
  } else string = str;
  return string;
  // remove line with error and write your code here
};
