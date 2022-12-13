class Griffin {
    constructor(name, wingStatus = true) {
        this.name = name;
        this.hasWings = wingStatus;
        this.isRunning = false;
        this.isFlying = false;
        this.miles = 0;
    };

    run() {
        if (this.isFlying === true) {
            return 'On what ground?!';
        } else {
            this.isRunning = true;
            this.miles += 10;
        };
    };

    fly() {
        if (this.hasWings === false) {
            this.isFlying = false;
        } else {
            this.isFlying = true;
            this.miles += 15;
        };

        if (this.isRunning) {
            this.isRunning = false;
        };
    };

    guardWealth(wealthWanter) {
        if (wealthWanter !== 'King' && wealthWanter !== 'Queen') {
            return `Don't even think about it, ${wealthWanter}!`;
        } else {
            return `Go ahead, my ${wealthWanter}.`;
        };
    };
};


module.exports = Griffin;