"use strict";
//List of location to pick from in generator
function multipleDestination() {
    let destinationList = ['Georgia', 'North Carolina', 'South Carolina', 'Louisiana', 'Florida', 'Massachusetts', 'Colorado', 'Maine', 'New Hampshire'];
    let firstPickDestination = destinationList[Math.floor(Math.random() * destinationList.length)];
    return firstPickDestination;
}
// List of types of foods 
function multipleFoodSource() {
    let foodList = ['Thai', 'Italian', 'French', 'Mongolian', 'Chinese', 'Japanese', 'Creole', 'Southern', 'Indian', 'Sea Food']
    let fistPickFood = foodList[Math.floor(Math.random() * foodList.length)];
    return fistPickFood;
}
//list of types of transportation
function multipleTransport() {
    let modeOfTransportation = ['A Car', 'A Boat', 'A Bike', 'A Moped', 'Walking', 'Public Transit', 'Horse Back', 'A Horse Buggy', 'A Taxi', 'A Long Board', 'A MotorCycle'];
    let howImGettingThere = modeOfTransportation[Math.floor(Math.random() * modeOfTransportation.length)];
    return howImGettingThere;
}
//list of types of things to do
function multipleEntertainment() {
    let entertainmentList = ['Rock Climbing', 'Trail Hiking', 'Mountain Climbing', 'City Bus Tour', 'The Beach', 'The Park'];
    let firstPickedEntertainment = entertainmentList[Math.floor(Math.random() * entertainmentList.length)];
    return firstPickedEntertainment;
}
// this functionwith a function in it first invokes the first four function and console logs them to the screen, and then askthe user if they are satisfied if the results.
function capturefunctions() {
    // show "Generating trip..." immediately
    document.getElementById("destination").textContent = "Generating trip...";

    // use setTimeout to delay the next actions
    setTimeout(function () {
        let testEntertainment = multipleEntertainment();
        let testTransportation = multipleTransport();
        let testFood = multipleFoodSource();
        let testDestination = multipleDestination();

        document.getElementById("destination").textContent = `${testDestination} Is where you are headed!!`;
        document.getElementById("food").textContent = `${testFood} Is The Cuisine you will be dinning on!!`;
        document.getElementById("transport").textContent = `${testTransportation} Is How you will be getting around!!`;
        document.getElementById("entertainment").textContent = `${testEntertainment} is what you will be doing!`;

        // use another setTimeout to delay the prompt

    }, 3000);

}

function getTheUsersInput(str) {
    let userConfirmation = prompt("Are you Satisfied with your selection? Yes or No?");
    if (userConfirmation == "no" || "yes") {
        let testReset = usersInputStatus(userConfirmation);
        function usersInputStatus(str) {
            switch (str) {
                case "yes":
                    console.log("\n enjoy your trip!!Let us know how it goes!!".toUpperCase());
                    break;
                case "no":
                    let enterUserChoice = prompt("\n Which option would you like to change? \nEnter the Number \n1.Destination \n2.Restuartant \n3.Transportation \n4.Entertainment \n5. All \n6. Neverming, I like my chioce!!");
                    switch (enterUserChoice) {
                        case "1":
                            let newDestination = multipleDestination();
                            console.log(` \n ${newDestination} Is where you are headed now!!`);
                            console.log(`${testFood} Is The Cuisine you will be dinning on!!`);
                            console.log(`${testTransportation} Is How you will be getting around!!`);
                            console.log(`${testEntertainment} is what you will be doing!`);
                            getTheUsersInput();
                            break;
                        case "2":
                            let newRestuartant = multipleFoodSource();
                            console.log(` \n ${testDestination} Is where you are headed!!`);
                            console.log(`${newRestuartant} Is where you are headed now!!`);
                            console.log(`${testTransportation} Is How you will be getting around!!`);
                            console.log(`${testEntertainment} is what you will be doing!`);
                            getTheUsersInput();
                            break;
                        case "3":
                            let newTransportation = multipleTransport();
                            console.log(` \n ${testDestination} Is where you are headed!!`);
                            console.log(`${testFood} Is The Cuisine you will be dinning on!!`);
                            console.log(`${newTransportation} Is where you are headed now!!`);
                            console.log(`${testEntertainment} is what you will be doing!`);
                            getTheUsersInput();
                            break;
                        case "4":
                            let newEntertainment = multipleEntertainment();
                            console.log(` \n ${testDestination} Is where you are headed!!`);
                            console.log(`${testFood} Is The Cuisine you will be dinning on!!`);
                            console.log(`${testTransportation} Is How you will be getting around!!`);
                            console.log(`${newEntertainment} Is where you are headed now!!`);
                            getTheUsersInput();
                            break;
                        case "5":
                            console.log("\n");
                            let newDaytrip = capturefunctions();
                            break;
                        case "6":
                            console.log("\n enjoy your trip!!Let us know how it goes!!".toUpperCase());
                            break;
                    }
                //because of the way the last two functions are nested, the function will continue to invoke the other function untill the value is satisfied right or wrong. 
            }

        }
    }
}

// Get the button element
let regenerateButton = document.getElementById("regenerate");

// Add the click event listener
regenerateButton.addEventListener("click", capturefunctions);




capturefunctions();
setTimeout(getTheUsersInput, 4500);