var Recipe = require('../src/recipe.js');

class Chef {
  constructor(name, recipes) {
    this.name = name;
    this.recipeBox = recipes;
  };

  tryRecipe(recipeName, rating) {
    this.recipeBox[this.checkRecipeName(recipeName)].rateRecipe(rating);
  };
  
  addRecipe(recipeName, ingredients) {
    this.recipeBox.push(new Recipe({ name: recipeName, ingredients: ingredients}));
  };

  changeRecipe(recipeName, ingredient, newAmount) {
    this.recipeBox[this.checkRecipeName(recipeName)].changeIngredientAmount(ingredient, newAmount);
  };

  checkRecipeName(recipeName) {
    for (var i = 0; i < this.recipeBox.length; i++) {
        if (recipeName === this.recipeBox[i].name) {
            return i;
        };
    };
  };
};


module.exports = Chef;
