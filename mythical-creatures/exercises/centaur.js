class Centaur {
    constructor(cenOb) {
        this.name = cenOb.name;
        this.breed = cenOb.type;
        this.cranky = false;
        this.standing = true;
        this.layingDown = false;
        this.actions = 0;
    };

    shootBow() {
        if (this.cranky === false && this.layingDown === false) {
            if (this.actions === 2) {
                this.actions += 1;
                this.cranky = true;
                return "Twang!!!";
            } else {
                this.actions += 1;
                return "Twang!!!";
            };
        } else {
            return "NO!";
        };
    };

    run() {
        if (this.cranky === false && this.layingDown === false) {
            if (this.actions === 2) {
                this.actions += 1;
                this.cranky = true;
                return "Clop clop clop clop!!!";
            } else {
                this.actions +=1;
                return "Clop clop clop clop!!!";
            };
        } else {
            return "NO!";
        };
    };

    sleep() {
        if (this.layingDown === true) {
            this.cranky = false;
            return "ZZZZ";
        } else {
            return "NO!";
        }
    };

    layDown() {
        this.standing = false;
        this.layingDown = true;
    };

    standUp() {
        this.standing = true;
        this.layingDown = false;
    };

    drinkPotion() {
        if (this.standing === true) {
            this.cranky = false;
        } else {
            return "Not while I'm laying down!";
        };
    };
};

module.exports = Centaur;