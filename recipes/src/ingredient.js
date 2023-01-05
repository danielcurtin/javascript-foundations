class Ingredient {
  constructor(ingredObj) {
    this.name = ingredObj.name;
    this.amount = ingredObj.amount;
  };

  changeAmount(newAmount) {
    this.amount = newAmount;
  };
};

module.exports = Ingredient;
