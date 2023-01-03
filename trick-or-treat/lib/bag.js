class Bag {
    constructor() {
        this.empty = true;
        this.count = 0;
        this.candies = [];
    };

    fill(candy) {
        this.candies.push(candy);
        this.count ++;
    };

    contains(type) {
        for (var i = 0; i < this.candies.length; i++) {
            if (type === this.candies[i].type) {
                return true;
            }
        }
        
        return false;
    };
};

module.exports = Bag;