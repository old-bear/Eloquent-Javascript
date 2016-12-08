/**
 * Date: Fri Jun 17 14:01:39 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Different kinds of actors, dynamic or static
 */

var coordinate = require('./coordinate.js');

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function Wall() {}

function BouncingCritter() {
    this.direction = randomElement(coordinate.directionNames);
};
BouncingCritter.prototype.act = function(view) {
    if (view.look(this.direction) != " ") {
        this.direction = view.find(" ") || "s";
    }
    return {type: "move", direction: this.direction};
};

function WallFollower() {
    this.dir = "s";
}
WallFollower.prototype.act = function(view) {
    var start = this.dir;
    if (view.look(coordinate.dirPlus(this.dir, -3)) != " ") {
        start = this.dir = coordinate.dirPlus(this.dir, -2);
    }
    while (view.look(this.dir) != " ") {
        this.dir = coordinate.dirPlus(this.dir, 1);
        if (this.dir == start) {
            break;
        }
    }
    return {type: "move", direction: this.dir};
};

function Plant() {
    this.energy = 3 + Math.random() * 4;
}
Plant.prototype.act = function(view) {
    if (this.energy > 15) {
        var space = view.find(" ");
        if (space) {
            return {type: "reproduce", direction: space};
        }
    }
    if (this.energy < 20) {
        return {type: "grow"};
    }
};

function PlantEater() {
    this.energy = 20;
}
PlantEater.prototype.act = function(view) {
    var space = view.find(" ");
    if (this.energy > 60 && space) {
        return {type: "reproduce", direction: space};
    }
    var plant = view.find("*");
    if (plant) {
        return {type: "eat", direction: plant};
    }
    if (space) {
        return {type: "move", direction: space};
    }
};

module.exports.Wall = Wall;
module.exports.BouncingCritter = BouncingCritter;
module.exports.WallFollower = WallFollower;
module.exports.Plant = Plant;
module.exports.PlantEater = PlantEater;

