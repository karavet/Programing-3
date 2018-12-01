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
