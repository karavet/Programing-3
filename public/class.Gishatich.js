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