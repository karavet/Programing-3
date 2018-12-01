class GrassEater extends LivingCreature {
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
