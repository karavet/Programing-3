class Grass extends LivingCreature{
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