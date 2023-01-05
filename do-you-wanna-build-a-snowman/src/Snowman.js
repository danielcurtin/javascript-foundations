class Snowman {
    constructor(detailsObj) {
        this.carrots = detailsObj.carrots;
        this.coal = detailsObj.coal;
        this.buttons = detailsObj.buttons;
        this.snowballs = detailsObj.snowballs;
        this.magicHat = false;
    };

    canWearMagicHat() {
        if (this.coal > 1 && this.buttons > 4 && this.carrots > 0 && this.snowballs > 1) {
            this.magicHat = true;
            return true;
        };
        return false;
    };
};

module.exports = Snowman;