

class Ogre {
    constructor(ogreOb) {
        this.name = ogreOb.name;
        this.home = ogreOb.abode || "Swamp";
        this.swings = 0;
    };

    encounter(humanOb) {
        humanOb.encounterCounter += 1;
        if (humanOb.encounterCounter === 3) {
            this.swingAt(humanOb);
        } else if (humanOb.encounterCounter === 6) {
            this.swingAt(humanOb);
            humanOb.knockedOut = true;
        };
    };

    swingAt() {
        this.swings += 1;
    };

    apologize(humanOb) {
        humanOb.knockedOut = false;
    };
};

module.exports = Ogre;