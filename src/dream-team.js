const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let name = "";
  if (!Array.isArray(members)) {
    return false;
  }
  members.forEach((element) => {
    if (typeof element == "string") {
      name = name + (element.trim().slice(0, 1) + " ").toLocaleUpperCase();
    }
  });
  if (name == "") {
    return false;
  }
  return name.split(" ").sort().join("");

  // remove line with error and write your code here
};
