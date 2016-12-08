/**
 * Date: Tue Jun 14 22:48:19 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview An animated world
 */

var world = require('./world.js');
var actor = require('./actor.js');

var valley = new world.LifelikeWorld(
    ["############################",
     "#####                 ######",
     "##   ***                **##",
     "#   *##**         **  O  *##",
     "#    ***     O    ##**    *#",
     "#       O         ##***    #",
     "#                 ##**     #",
     "#   O       #*             #",
     "#*          #**       O    #",
     "#***        ##**    O    **#",
     "##****     ###***       *###",
     "############################"],
    {"#": actor.Wall,
     "O": actor.PlantEater,
     "*": actor.Plant}
);

for (var i = 1; i <= 300; ++i) {
    console.log('Turn ' + i + ':\n' + valley.toString());
    valley.turn();                
}
