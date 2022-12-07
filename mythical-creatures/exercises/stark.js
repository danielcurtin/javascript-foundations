var Direwolf = require('./direwolf.js');

class Stark {
    constructor(starkOb) {
        this.name = starkOb.name;
        this.location = starkOb.area || "Winterfell";
        this.safe = false;
    };

    sayHouseWords() {
        return this.safe ? "The North Remembers" : "Winter is Coming";
    };

    callDirewolf(name) {
        var direWolf = new Direwolf(name, this.location);
        direWolf.protect(this);
        return direWolf;
    };
};

module.exports = Stark;