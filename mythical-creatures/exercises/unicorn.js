class Unicorn {
  constructor(name, color = "white") {
    this.name = name;
    this.color = color;
  };
  isWhite() {
    if (this.color !== "white") {
      return false;
    }; 
  };
  says(msg) {
    return `**;* ${msg} *;**`;
  };
};

module.exports = Unicorn;
