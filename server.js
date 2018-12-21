var express = require('express');
var app = express();

var server = require('http').Server(app);

var io = require('socket.io')(server);

app.use(express.static("./public"));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);

var matrix = require("./public/matrix");

io.on('connection', function (socket) {
    socket.emit("first matrix", matrix)

    socket.on("set false", function (arr) {
        matrix[arr[0]][arr[1]].acted = false;
    })

    setInterval(function () {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x].index == 1) {
                    matrix[y][x].mul(matrix);
                    stat.Grass++;
                }
                else if (matrix[y][x].index == 2) {
                    matrix[y][x].eat(matrix);
                    stat.GrassEater++;
                }
                else if (matrix[y][x].index == 3) {
                    matrix[y][x].eat(matrix);
                    stat.gishatich++;
                }
                if (matrix[y][x].index == 4) {
                    matrix[y][x].move(matrix);
                    stat.flower++;
                }
                else if (matrix[y][x].index == 5) {
                    matrix[y][x].eat(matrix);
                    stat.tree++;
                }
            }
        }

        socket.emit("redraw matrix", matrix);
    }, time);

    setInterval(function () {
            for (var y = 0; y < matrix.length; x++) {
                for (var x = 0; x < matrix[y].length; x++) {
                    if (matrix[y][x].index == 1) {
                        stat.Grass++;
                    }
                    else if (matrix[y][x].index == 2) {
                        stat.GrassEater++;
                    }
                    else if (matrix[y][x].index == 3) {
                        stat.gishatich++;
                    }
                    else if (matrix[y][x].index == 4) {
                        stat.flower++;
                    }
                    else if (matrix[y][x].index == 5) {
                        stat.tree++;
                    }
                }
            }
        socket.emit("stats", stat);
    },5000);
});

var stat = {
    "Grass": {
        "born": 0,
        "die": 0,
    },
    "GrassEater": {
        "born": 0,
        "die": 0,
    },
    "gishatich": {
        "born": 0,
        "die": 0,
    },
    "flower": {
        "born": 0,
        "die": 0,
    },
    "tree": {
        "born": 0,
        "die": 0,
    }
};

var time = frameRate(1);

function frameRate(frameCount) {
    return 1000 / frameCount;
}