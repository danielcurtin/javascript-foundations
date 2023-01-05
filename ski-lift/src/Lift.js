var Skier = require('./Skier');

class Lift {
    constructor(limit) {
        this.inService = true;
        this.limit = limit;
        this.skiers = [];
        this.safetyBar = "up";
    };

    admitSkier(name, ticket) {
        if (this.skiers.length < this.limit && ticket) {
            this.skiers.push(new Skier(name, ticket));
        } else if (!ticket) {
            return `Sorry, ${name}. You need a lift ticket!`;
        } else {
            return `Sorry, ${name}. Please wait for the next lift!`;
        };
    };

    startLift() {
        var space = this.limit - this.skiers.length;
        if (!space) {
            this.safetyBar = "down";
        } else if (space > 1) {
            return `We still need ${space} more skiers!`;
        } else {
            return `We still need ${space} more skier!`;
        };
    };
};

module.exports = Lift;