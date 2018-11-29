function setup() {
    var a = [0, 1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 2, 2, 2, 0, 0, 1];
    x = 50;
    y = 50;
    matrix = [];
    for (var i = 0; i < y; i++) {
        matrix[i] = [];
        for (var k = 0; k < x; k++) {
            matrix[i][k] = a[Math.floor(a.length * Math.random())];
        }
    }



    side = 20;

    grassArr = [];
    rainArr = [];
    xotakerArr = [];
    gishatichArr = [];
    hunterArr = [];

    frameRate(2);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    rainArr.push(new rain());

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gr = new GrassEater(x, y, 2);
                xotakerArr.push(gr);
            }

            else if (matrix[y][x] == 5) {
                var gr = new hunter(x, y, 5);
                xotakerArr.push(gr);

            }
            else if (matrix[y][x] == 3) {
                var gr = new Gishatich(x, y, 3);
                gishatichArr.push(gr);
            }
            else if (matrix[y][x] == 8) {

            }
        }
    }


}


function draw() {
    background("#acacac");

    for (var i in rainArr) {
        rainArr[i].mul();

    }
    for (var i in grassArr) {
        grassArr[i].mul();

    }
    for (var i in xotakerArr) {
        xotakerArr[i].eat();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
    }
    for (var i in hunterArr) {
        hunterArr[i].eat();
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("aqua");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }

        }
    }




}

