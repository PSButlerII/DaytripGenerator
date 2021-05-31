"use strict";
//List of location to pick from in generator
function multipleDestination() {
    let destinationList = ['Georgia', 'North Carolina', 'South Carolina', 'Louisiana', 'Florida', 'Massachusetts', 'Colorado', 'Maine', 'New Hampshire'];
    let firstPickDestination = destinationList[Math.floor(Math.random() * destinationList.length)];
    return firstPickDestination;
}



function multipleFoodSource() {
    let foodList = ['Thai', 'Italian', 'French', 'Mongolian', 'Chinese', 'Japanese', 'Creole', 'Southern', 'Indian', 'Sea Food']
    let fistPickFood = foodList[Math.floor(Math.random() * foodList.length)];
    return fistPickFood;
}


function multipleTransport() {
    let modeOfTransportation = ['A Car', 'A Boat', 'A Bike', 'A Moped', 'Walking', 'Public Transit', 'Horse Back', 'A Horse Buggy', 'A Taxi', 'A Long Board', 'A MotorCycle'];
    let howImGettingThere = modeOfTransportation[Math.floor(Math.random() * modeOfTransportation.length)];
    return howImGettingThere;
}



function multipleEntertainment() {
    let entertainmentList = ['Rock Climbing', 'Trail Hiking', 'Mountain Climbing', 'City Bus Tour', 'The Beach', 'The Park'];
    let firstPickedEntertainment = entertainmentList[Math.floor(Math.random() * entertainmentList.length)];
    return firstPickedEntertainment;
}


function capturefunctions() {
    let testEntertainment = multipleEntertainment();
    let testTransportation = multipleTransport();
    let testFood = multipleFoodSource();
    let testDestination = multipleDestination();
    // console.log(`${testDestination} Is where you are headed!!`);
    // console.log(`${testFood} Is The Cuisine you will be dinning on!!`);
    // console.log(`${testTransportation} Is How you will be getting around!!`);
    // console.log(`${testEntertainment} is what you will be doing!`);
    let userConfirmation = prompt("Are you Satisfied with your selection? Yes or No?");
    if (userConfirmation == "no" || "yes") {
        let testReset = usersInputStatus(userConfirmation);
    }

}

function myStringHolder() {}



function usersInputStatus(str) {
    switch (str) {
        case "yes":
            console.log("enjoy your trip!! Let us know how it goes!!".toUpperCase());
            break;
        case "no":
            let enterUserChoice = prompt("Which option would you like to change? Enter the Number 1.Destination, 2.Restuartant, 3.Transportation, 4.Entertainment, 5. All");
            switch (enterUserChoice) {
                case "1":
                    let newDestination = multipleDestination();
                    console.log(`${newDestination} Is where you are headed now!!`);

                    break;
                case "2":
                    let newRestuartant = multipleFoodSource();
                    console.log(`${newRestuartant} Is where you are headed now!!`);
                    break;
                case "3":
                    let newTransportation = multipleTransport();
                    console.log(`${newTransportation} Is where you are headed now!!`);
                    break;
                case "4":
                    let newEntertainment = multipleEntertainment();
                    console.log(`${newEntertainment} Is where you are headed now!!`);
                    break;
                case "5":
                    let newDaytrip = capturefunctions();
                    console.log(newDaytrip);
                    break;

                default:

                    break;
            }
    }

}
let originalList = capturefunctions([]);