const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (
      !position ||
      typeof +position !== "number" ||
      position < 0 ||
      position > this.chain.length

    ) {
      this.chain = [];
      throw new Error("Error");
    }

    this.chain.splice(+position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    console.log(this.chain);
    let res = this.chain.map(function (e, i) {
      if (i == 0) {
        return (e = `( ${e} )`);
      } else {
        return (e = `~~( ${e} )`);
      }
    });
    this.chain = [];
    return res.join("");
  },
};

module.exports = chainMaker;
