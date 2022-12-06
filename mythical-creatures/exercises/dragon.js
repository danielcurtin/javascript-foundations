class Dragon {
    constructor(name, rider) {
        var fed = 0;
        this.name = name;
        this.rider = rider;
        this.greet = function () {
            return `Hi, ${rider}!`;
        };
        this.hungry = true;
        this.eat = function() { 
            if (fed === 2) {
                this.hungry = false;
            } else {
                fed = fed + 1;
            };
        };
    };
};

module.exports = Dragon;