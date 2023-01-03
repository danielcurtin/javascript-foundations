class Skater {
    constructor(obj) {
        this.name = obj.name;
        this.skill = obj.skill;
        this.tricks = obj.tricks;
        this.money = obj.cash;
        this.frustration = 0;
    };

    practice(trick) {
        if (!this.tricks[trick] && this.frustration < 2) {
            this.frustration ++;
        } else {
            this.frustration = 0;
            this.tricks[trick] = true;
            return `I just learned to ${trick}!!!`;
        };
    };
};

module.exports = Skater;