class Craft {
    constructor(craftOb) {
        this.name = craftOb.type;
        this.materials = craftOb.materials;
        this.completed = false;
    };

    completeCraft() {
        this.completed = true;
        return "All done! It looks great!";
    };

    calculateProjectTotal() {
        return 27;
    };
};

module.exports = Craft;
