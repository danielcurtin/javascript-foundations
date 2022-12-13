class Runner {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.milesRun = 0;
        this.fitness = 25;
        this.completedRaces = [];
    };

    runSomeMiles(milesRan) {
        this.milesRun += milesRan;
        this.fitness += milesRan;
    };

    stretch() {
        this.fitness += .5;
    };

    runRace(name, length) {
        this.completedRaces.push(name);
        this.milesRun += length;
        this.fitness += length;
    };
};

module.exports = Runner;
