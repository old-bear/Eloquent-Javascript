/**
 * Date: Fri Jun 17 13:34:57 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Different kinds of electronic worlds
 */

var coordinate = require('./coordinate.js');

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function elementFromChar(legend, ch) {
    if (ch == " ") {
        return null;
    }
    var element = new legend[ch]();
    element.originChar = ch;
    return element;
}

function charFromElement(element) {
    if (element == null) {
        return " ";
    } else {
        return element.originChar;
    }
}

function World(map, legend) {
    var grid = new coordinate.Grid(map[0].length, map.length);
    this.grid = grid;
    this.legend = legend;
    
    map.forEach(function(line, y) {
        for (var x = 0; x < line.length; x++)
            grid.set(new coordinate.Vector(x, y),
                     elementFromChar(legend, line[x]));
    });
}

World.prototype.toString = function() {
    var output = "";
    for (var y = 0; y < this.grid.height; y++) {
        for (var x = 0; x < this.grid.width; x++) {
            var element = this.grid.get(new coordinate.Vector(x, y));
            output += charFromElement(element);
        }
        output += "\n";
    }
    return output;
};

World.prototype.turn = function() {
    var acted = [];
    this.grid.forEach(function(critter, vector) {
        if (critter.act && acted.indexOf(critter) == -1) {
            acted.push(critter);
            this.letAct(critter, vector);
        }
    }, this);
};

World.prototype.letAct = function(critter, vector) {
    var action = critter.act(new View(this, vector));
    if (action && action.type == "move") {
        var dest = this.checkDestination(action, vector);
        if (dest && this.grid.get(dest) == null) {
            this.grid.set(vector, null);
            this.grid.set(dest, critter);
        }
    }
};

World.prototype.checkDestination = function(action, vector) {
    if (coordinate.directions.hasOwnProperty(action.direction)) {
        var dest = vector.plus(coordinate.directions[action.direction]);
        if (this.grid.isInside(dest)) {
            return dest;
        }
    }
};

function LifelikeWorld(map, legend) {
    World.call(this, map, legend);
}
LifelikeWorld.prototype = Object.create(World.prototype);
LifelikeWorld.prototype.letAct = function(critter, vector) {
    var action = critter.act(new View(this, vector));
    var handled = (action && action.type in actionTypes
                   && actionTypes[action.type].call(
                       this, critter, vector, action));
    if (!handled) {
        critter.energy -= 0.2;
        if (critter.energy <= 0) {
            this.grid.set(vector, null);
        }
    }
};

function View(world, vector) {
    this.world = world;
    this.vector = vector;
}
View.prototype.look = function(dir) {
    var target = this.vector.plus(coordinate.directions[dir]);
    if (this.world.grid.isInside(target)) {
        return charFromElement(this.world.grid.get(target));
    } else {
        return "#";
    }
};
View.prototype.findAll = function(ch) {
    var found = [];
    for (var dir in coordinate.directions) {
        if (this.look(dir) == ch) {
            found.push(dir);
        }
    }
    return found;
};
View.prototype.find = function(ch) {
    var found = this.findAll(ch);
    if (found.length == 0) {
        return null;
    }
    return randomElement(found);
};

var actionTypes = Object.create(null);

actionTypes.grow = function(critter) {
    critter.energy += 0.5;
    return true;
};

actionTypes.move = function(critter, vector, action) {
    var dest = this.checkDestination(action, vector);
    if (dest == null || critter.energy <= 1 || this.grid.get(dest) != null) {
        return false;
    }
    critter.energy -= 1;
    this.grid.set(vector, null);
    this.grid.set(dest, critter);
    return true;
};

actionTypes.eat = function(critter, vector, action) {
    var dest = this.checkDestination(action, vector);
    var atDest = (dest != null && this.grid.get(dest));
    if (!atDest || atDest.energy == null) {
        return false;
    }
    critter.energy += atDest.energy;
    this.grid.set(dest, null);
    return true;
};

actionTypes.reproduce = function(critter, vector, action) {
    var baby = elementFromChar(this.legend,
                               critter.originChar);
    var dest = this.checkDestination(action, vector);
    if (dest == null || this.grid.get(dest) != null
        || critter.energy <= 2 * baby.energy) {
        return false;
    }
    critter.energy -= 2 * baby.energy;
    this.grid.set(dest, baby);
    return true;
};

module.exports.World = World;
module.exports.LifelikeWorld = LifelikeWorld;
module.exports.View = View;
