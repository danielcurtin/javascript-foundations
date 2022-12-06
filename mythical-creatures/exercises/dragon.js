class Dragon {
    constructor(name, rider) {
        this.name = name;
        this.rider = rider;
        this.hungry = true;
        this.fedNumTimes = 0;
    };
    greet() {
        return `Hi, ${this.rider}!`;
    };
    eat() { 
        if (this.fedNumTimes === 2) {
            this.hungry = false;
        } else {
            this.fedNumTimes = this.fedNumTimes + 1;
        };
    };
};

module.exports = Dragon;