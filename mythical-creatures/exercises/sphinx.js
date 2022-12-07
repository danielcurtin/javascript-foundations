class Sphinx {
    constructor() {
        this.riddles = [];
        this.heroesEaten = 0;
    };

    collectRiddle(riddleOb) {
        if (this.riddles.length < 3) {
            this.riddles.push(riddleOb);
        } else {
            this.riddles.shift();
            this.riddles.push(riddleOb);
        };
    };

    attemptAnswer(guess) {
        for (var i = 0; i < this.riddles.length; i++) {
            if (this.riddles.length === 1) {
                if (this.riddles[i].answer === guess) {
                    this.riddles.splice(i, 1);
                    return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${guess}"???`;
                };
            } else {
                if (this.riddles[i].answer === guess) {
                    this.riddles.splice(i, 1);
                    return "That wasn't that hard, I bet you don't get the next one";
                };
            };
        };
        this.heroesEaten += 1;
    };
};

module.exports = Sphinx;