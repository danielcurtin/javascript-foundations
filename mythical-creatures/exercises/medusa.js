var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
        this.name = name;
        this.statues = [];
    };

    gazeAtVictim(vic) {
        var newStat = new Statue(vic.name);
        if (this.statues.length < 3) {
            this.statues.push(newStat);
        } else if (this.statues.length === 3) {
            var release = this.statues[0];
            this.statues.shift();
            this.statues.push(newStat);
            return new Person(release.name, "relieved");
        };
    };
};

module.exports = Medusa;