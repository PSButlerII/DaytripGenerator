"use strict";
//List of location to pick from in generator
function multipleDestination() {
    let destinationList = ['Georgia', 'North Carolina', 'South Carolina', 'Louisiana', 'Florida', 'Massachusetts', 'Colorado', 'Maine', 'New Hampshire'];
    let randomDestination = destinationList[Math.floor(Math.random() * destinationList.length)];
    return randomDestination;
}
let testDestination = multipleDestination([]);
console.log(testDestination);


// function repopulateChoice() {
//     let repopulateChoice = multipleDestination();
//     let userChoise = console.log("Is this a Okay?");
//     If()
// }

function multipleFoodSource() {
    let foodList = ['Thai', 'Italian', 'French', 'Mongolian', 'Chinese', 'Japanese', 'Creole', 'Southern', 'Indian', 'Sea Food']
    let randomFood = foodList[Math.floor(Math.random() * foodList.length)];
    return randomFood;
}
let testFood = multipleFoodSource([]);
console.log(testFood);

function multipleTransport() {
    let modeOfTransportation = ['Personal Car', 'Boat', 'Bike', 'Moped', 'Walk', 'Public Transit', 'Horse Back', 'Horse Buggy', 'Taxi', 'Long Board', 'MotorCycle'];
    let howImGettingThere = [Math.floor(Math.random() * modeOfTransportation.length)];;
    return howImGettingThere;
}



// function multipleEntertainment() {
//     let entertainmentList = ['Rock Climbing','Trail Hiking', 'Mountain Climbing','City Bus Tour','The Beach','The Park'];
//     let = [Math.floor(Math.random() * .length)];;
//     return;
// }



// function multiple() {
//     let = [];
//     let = [Math.floor(Math.random() * .length)];;
//     return;
// }



// function multiple() {
//     let = [];
//     let = [Math.floor(Math.random() * .length)];;
//     return;
// }



// function multiple() {
//     let = [];
//     let = [Math.floor(Math.random() * .length)];;
//     return;
// }



// function multiple() {
//     let = [];
//     let = [Math.floor(Math.random() * .length)];;
//     return;
// }



// function multiple() {
//     let = [];
//     let = [Math.floor(Math.random() * .length)];;
//     return;
// }



// function multiple() {
//     let = [];
//     let = [Math.floor(Math.random() * .length)];;
//     return;
// }