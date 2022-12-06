class Unicorn {
  constructor(name, color = "white") {
    this.name = name;
    this.color = color;
    this.isWhite = function () {
      if (color !== "white") {
        return false;
      }; 
    };
    this.says = function (msg) {
      return `**;* ${msg} *;**`;
    }
  }
}

module.exports = Unicorn;
