//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

// em expressao ternaria

var experiencePoints = winBattle() ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");

//undefined

//#3 return value when moveCommand("back");

//"you arrived home";

//#4 return value when moveCommand("right");

//you found a river

//#5 return value when moveCommand("left");

//undefined

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function bebeu(quantas) {
    var eai;
    switch (quantas) {
        case 0 : eai = "de boas";
        break;
        case 1 : eai = "suaves";
        break;
        case 2 : eai = "na nave";
        break;
        case 3 : eai = "partiu";
        break;
        case 4: eai = "é nozes";
        break;
        case 5: eai = "buzzzzz";
        break;
        default : eai = "chapou";  
    }
    return console.log(eai);
}
