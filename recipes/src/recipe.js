class Recipe {
    constructor(recipeObj) {
        this.name = recipeObj.name;
        this.ingredients = recipeObj.ingredients;
        this.attempted = false;
        this.rating = null;
    };

    rateRecipe(rating) {
        this.attempted = true;
        this.rating = rating;
    };

    changeIngredientAmount(ingredient, newAmount) {
        for (var i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i].name === ingredient) {
                this.ingredients[i].changeAmount(newAmount);
            };
        };
    };

    generateGroceryList() {
        var list = [];
        for (var i = 0; i < this.ingredients.length; i++) {
            var item = `${this.ingredients[i].amount} ${this.ingredients[i].name}`;

            list.push(item);
        };
        list = list.join(', ');
        return `You need: ${list},`;
    };
};

module.exports = Recipe;
