
// Checkpoint 1 | Creating the queen object
var queen = {
    position: {
        x: 0,
        y: 0
    },
    whereabouts: []
};

// Checkpoint 2,3,4,5 | Turning the queen, Moving the queen, Jump move the queen,  Tracking the position
// Bonuspoint 1 | Gotta keep her in the battle!
function changeDirection(number, direction) //3E
{
    switch (direction) {
        case "E":
            temp = queen.position.y + number; //temp = 0 + 3
            if (temp > 7 || temp < 0) {
                console.log("out of boundry E");

            } else {
                queen.position.y = temp; //y=3
            }
            break;

        case "N":
            temp = queen.position.x - number;
            if (temp > 7 || temp < 0) {
                console.log("out of boundry N");

            } else {
                queen.position.x = temp;
            }
            break;

        case "S":
            temp = queen.position.x + number;
            if (temp > 7 || temp < 0) {
                console.log("out of boundry S");

            } else {
                queen.position.x = temp;
            }
            break;

        case "W":
            temp = queen.position.y - number;
            if (temp > 7 || temp < 0) {
                console.log("out of boundry W");

            } else {
                queen.position.y = temp;
            }
            break;

        case "NE":
            temp = queen.position.x - number;
            temp1 = queen.position.y + number;
            if (temp > 7 || temp < 0 || temp1 > 7 || temp1 < 0) {
                console.log("Out of Boundry NE");
            }
            else {
                queen.position.x = temp;
                queen.position.y = temp1;
            }
            break;

        case "NW":
            temp = queen.position.x - number;
            temp1 = queen.position.y - number;
            if (temp > 7 || temp < 0 || temp1 > 7 || temp1 < 0) {
                console.log("Out of Boundry NW");
            }
            else {
                queen.position.x = temp;
                queen.position.y = temp1;
            }
            break;

        case "SE":
            temp = queen.position.x + number;
            temp1 = queen.position.y + number;
            if (temp > 7 || temp < 0 || temp1 > 7 || temp1 < 0) {
                console.log("Out of Boundry SE");
            }
            else {
                queen.position.x = temp;
                queen.position.y = temp1;
            }
            break;


        case "SW":
            temp = queen.position.x + number;
            temp1 = queen.position.y - number;
            if (temp > 7 || temp < 0 || temp1 > 7 || temp1 < 0) {
                console.log("Out of Boundry SW");
            }
            else {
                queen.position.x = temp;
                queen.position.y = temp1;
            }
            break;

        default:
            console.log("Invalid Direction");
            break;
    }
    queen.whereabouts.push(board[queen.position.x][queen.position.y]);

}

function play(input) //N3 S4 SE4 
{
    var value = input.split(" ");

    value.forEach(element => {
        let number = Number(element.slice(element.length - 1));
        let direction = element.slice(0, element.length - 1);
        changeDirection(number, direction);
    });

    console.log("Your Current Position =>" + board[queen.position.x][queen.position.y]);
    console.log("Track logs of Queen:");
    console.log(queen.whereabouts);
}

var board =

    [["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"], //for East x=0,y=0 x=0,y=1 0,2

    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],

    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],

    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],

    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],

    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],

    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],

    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]];