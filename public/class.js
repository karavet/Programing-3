class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul(d = 0) {
        this.multiply++;
        var norVandak = this.yntrelVandak(0);
        var newCell = random(norVandak);
        if (d == 2) {
            matrix[this.y][this.x] = 1;
        }
        if ((this.multiply >= 8 && newCell) || (d == 2 && newCell)) {

            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            console.log(d);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }

}

class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;

    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        this.getNewCoordinates();

        var norVandak = this.yntrelVandak(0);
        var newCell = random(norVandak);

        if (newCell) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = newCell[0];
            this.y = newCell[1];
            matrix[this.y][this.x] = 2;

            if (this.energy <= 0) {
                this.die();
            }

        }

    }

    eat() {
        this.getNewCoordinates();
        var norVandak = this.yntrelVandak(1);
        var newCell = random(norVandak);

        if (newCell) {
            this.energy++;

            for (var i in grassArr) {
                if (newCell[0] == grassArr[i].x && newCell[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            matrix[this.y][this.x] = 0;
            this.x = newCell[0];
            this.y = newCell[1];
            matrix[this.y][this.x] = 2;



            if (this.energy >= 12) {
                this.mul();
            }

        }
        else {
            this.move();

        }

    }


    mul() {

        var norVandak = this.yntrelVandak(0);
        var newCell = random(norVandak);

        if (newCell) {
            var newxotaker = new GrassEater(newCell[0], newCell[1], this.index);
            xotakerArr.push(newxotaker);
            matrix[newCell[1]][newCell[0]] = 2;
            this.energy = 6;
        }
    }
    die() {
        for (var i in xotakerArr) {
            if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                xotakerArr.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }


    }
}


class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;

    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        this.getNewCoordinates();

        var norVandak = this.yntrelVandak(0);
        var newCell = random(norVandak);

        if (newCell) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = newCell[0];
            this.y = newCell[1];
            matrix[this.y][this.x] = 3;

            if (this.energy <= 0) {
                this.die();
            }

        }

    }

    eat() {
        this.getNewCoordinates();
        var norVandak = this.yntrelVandak(2);
        var newCell = random(norVandak);

        if (newCell) {
            this.energy++;

            for (var i in xotakerArr) {
                if (newCell[0] == xotakerArr[i].x && newCell[1] == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }

            matrix[this.y][this.x] = 0;
            this.x = newCell[0];
            this.y = newCell[1];
            matrix[this.y][this.x] = 3;



            if (this.energy >= 12) {
                this.mul();
            }

        }
        else {
            this.move();

        }

    }


    mul() {

        var norVandak = this.yntrelVandak(0);
        var newCell = random(norVandak);

        if (newCell) {
            var newgishatich = new Gishatich(newCell[0], newCell[1], this.index);
            gishatichArr.push(newgishatich);
            matrix[newCell[1]][newCell[0]] = 3;
            this.energy = 6;
        }
    }
    die() {
        for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }


    }
}

class rain {
    constructor() {
        this.multiply = 0;
    }
    yntrelVandak(character) {
        var found = [];
        for (var i = 0; i < matrix.length; i++) {
            for (var k = 0; k < matrix[i].length; k++) {
                if (matrix[i][k] == character) {
                    found.push([i, k]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;
        if (this.multiply >= 10) {
            this.katil();
            this.multiply = 0;
        }
    }
    katil() {
        var norVandak = this.yntrelVandak(1);
        var newCell = random(norVandak);

        if (newCell) {
            for (var i in grassArr) {
                if (newCell[0] == grassArr[i].x && newCell[1] == grassArr[i].y) {
                    grassArr[i].mul(2);
                    console.log(2);
                    break;
                }
            }

            matrix[newCell[1]][newCell[0]] = 4;
        }
    }
}



class hunter {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;

    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],

            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],

            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],

            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],

            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2]
        ];


    }
    yntrelVandak(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        this.getNewCoordinates();

        var norVandak = this.yntrelVandak(0);
        var newCell = random(norVandak);

        if (newCell) {
            matrix[this.y][this.x] = 0;
            this.x = newCell[0];
            this.y = newCell[1];
            matrix[this.y][this.x] = 5;



        }

    }

    eat() {
        this.getNewCoordinates();
        var norVandak = this.yntrelVandak(3);
        var newCell = random(norVandak);

        if (newCell) {


            for (var i in gishatichArr) {
                if (newCell[0] == gishatichArr[i].x && newCell[1] == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }

            matrix[this.y][this.x] = 0;
            this.x = newCell[0];
            this.y = newCell[1];
            matrix[this.y][this.x] = 5;





        }
        else {
            this.move();

        }

    }
}




