var Grass = require("./class.grass");
var GrassEater = require("./class.grasseater");
var gishatich = require("./class.gishatich");
var flower = require("./class.flower");
var tree = require("./class.tree");

Grass.born = 0;
Grass.die = 0;
Grass.current = 0;

GrassEater.born = 0;
GrassEater.die = 0;
GrassEater.current = 0;

gishatich.born = 0;
gishatich.die = 0;
gishatich.current = 0;

flower.born = 0;
flower.die = 0;
flower.current = 0;

tree.born = 0;
tree.die = 0;
tree.current = 0;

var matrix = [];
var n = 50;
var m = 50;

for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {
        matrix[y][x] = randomItemFromArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 4]);
    }
    // console.log(matrix[y]);
}

matrix[Math.floor(randomInRange(matrix.length))][Math.floor(randomInRange(matrix[0].length))] = 5;
matrix[Math.floor(randomInRange(matrix.length))][Math.floor(randomInRange(matrix[0].length))] = 5;
matrix[Math.floor(randomInRange(matrix.length))][Math.floor(randomInRange(matrix[0].length))] = 5;

for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            matrix[y][x] = new Grass(x, y, 1);
        }
        else if (matrix[y][x] == 2) {
            matrix[y][x] = new GrassEater(x, y, 2);

        }
        else if (matrix[y][x] == 3) {
            matrix[y][x] = new gishatich(x, y, 3);
        }
        else if (matrix[y][x] == 4) {
            matrix[y][x] = new flower(x, y, 5);
        }
        else if (matrix[y][x] == 6) {
            matrix[y][x] = new tree(x, y, 6);
        }
       

    }
}

function randomItemFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function randomInRange(num) {
    return Math.floor(Math.random() * num);
}

module.exports = matrix;
