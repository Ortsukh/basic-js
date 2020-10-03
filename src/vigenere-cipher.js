const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(Direct = true) {
    this.Direct = Direct
  }

  encrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error("Error");

    }
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newarr = []
    let index = 0
    let newMessage = message.toUpperCase().split('');
    let r = Math.ceil(message.length / key.length)
    let newKey = key.repeat(r).toUpperCase();
    newMessage.forEach(function (element) {

      let indx = alpha.indexOf(element)
      if (indx == -1) {
        newarr.push(element)
      } else {
        let keyindx = alpha.indexOf(newKey[index])
        newarr.push(alpha[indx + keyindx])
        index++
      }

    });
    if (this.Direct) { return newarr.join('') }
    else return newarr.reverse().join('')
  }
  decrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error("Error");

    }
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newarr = []
    let index = 0
    let newMessage = message.split('');
    let r = Math.ceil(message.length / key.length)
    let newKey = key.repeat(r).toUpperCase();
    newMessage.forEach(function (element) {

      let indx = alpha.lastIndexOf(element)
      if (indx == -1) {
        newarr.push(element)
      } else {
        let keyindx = alpha.indexOf(newKey[index])
        newarr.push(alpha[indx - keyindx])
        index++
      }

    });
    if (this.Direct) { return newarr.join('') }
    else return newarr.reverse().join('')

  }
}

module.exports = VigenereCipheringMachine;
