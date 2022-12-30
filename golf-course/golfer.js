class Golfer {
    constructor(golferOb) {
        this.name = golferOb.name;
        this.handicap = golferOb.handicap;
        this.frustration = 0;
        this.confidence = 0;
    };

    calculateAvg(par) {
        return `I usually shoot a ${this.handicap + par} on average.`;
    };

    playRound(course) {
        if (course.difficulty === "moderate") {
            this.frustration += 100;
        } else {
            this.frustration += 500;
        };
    };

    hitTheRange() {
        this.confidence += 10;
    };

    marvel(course) {
        return `I love the ${course.features[0]} and ${course.features[1]} on this course!`;
    };

    whatYaShoot(num) {
        if (num < 0) {
            this.frustration = 0;
            return 'I AM THE GREATEST GOLFER ALIVE!';
        } else if (!num) {
            this.frustration -= 10;
            return 'Booyah!';
        } else {
            this.frustration += 20;
            return 'Doh!';
        };
    };
};

module.exports = Golfer;
