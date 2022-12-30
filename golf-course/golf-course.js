class GolfCourse {
    constructor(name, diff, numOpen, arrFeats) {
        this.name = name;
        this.difficulty = diff;
        this.openings = numOpen;
        this.features = arrFeats;
        this.currentlyPlaying = [];
    };

    checkInGroup(group) {
        if (group.length <= this.openings) {
            this.openings -= group.length;

            for (var i = 0; i < group.length; i++) {
                this.currentlyPlaying.unshift(group[i].name);
            };

            return "You're checked in. Have fun!";
        } else {
            return "Sorry, we are currently booked! Please come back later.";
        };
    };
};

module.exports = GolfCourse;
