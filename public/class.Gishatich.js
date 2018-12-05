class Gishatich extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 8;
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