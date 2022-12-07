class Pirate {
    constructor(name, job) {
        this.name = name;
        this.job = job || "scallywag";
        this.cursed = false;
        this.booty = 0;
    };

    robShip() {
        if (this.booty === 400) {
            this.booty += 100;
            this.cursed = true;
        } else if (this.booty === 500) {
            return "ARG! I've been cursed!";
        } else {
            this.booty +=100;
            return "YAARRR!";
        };
    };

    liftCurse() {
        if (this.cursed === true) {
            this.cursed = false;
            this.booty -= 300;
            return "Your curse has been lifted!";
        } else {
            return "You don't need to lift a curse!";
        }
    }
}

module.exports = Pirate;