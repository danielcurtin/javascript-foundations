class SkatePark {
    constructor(obj) {
        this.name = obj.name;
        this.yearFounded = obj.year;
        this.style = obj.type;
        this.features = obj.features;
        this.isPrivate = obj.isPrivate || false;
        this.cost = obj.price || 0;
        this.occupants = [];
    };

    admit(skater) {
        if (this.occupants.length === 3) {
            return "Sorry, we are at max capacity. Thank you for understanding.";
        } else if (!this.isPrivate) {
            this.occupants.push(skater);
            return `Welcome to the free ${this.name} Skatepark!`;
        } else if (skater.money >= this.cost) {
            skater.money -= this.cost;
            this.occupants.push(skater);
            return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`;
        } else {
            return "Sorry, you don't have enough money.";
        };
    };
};

module.exports = SkatePark;