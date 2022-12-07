class Fairy {
    constructor(name) {
        this.name = name;
        this.dust = 10;
        this.clothes = {dresses: ['Iris']};
        this.disposition = "Good natured";
        this.humanWards = [];
    };

    receiveBelief() {
        this.dust += 1;
    };

    believe() {
        this.dust += 10;
    };

    makeDresses(arrayOfFlowers) {
        this.clothes.dresses = this.clothes.dresses.concat(arrayOfFlowers);
    };

    becomeProvoked() {
        this.disposition = "Vengeful";
    };

    replaceInfant(infant) {
        if (this.disposition = "Vengeful") {
            if (this.humanWards < 2) {
                infant.disposition = "Malicious";
                this.humanWards.push(infant);
                return infant;
            } else {
                infant.disposition = "Malicious";
                this.humanWards.push(infant);
                this.disposition = "Good natured";
                return infant;
            };
        };
    };
};

module.exports = Fairy;