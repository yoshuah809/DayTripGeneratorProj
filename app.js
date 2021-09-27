// Learning objective: Use and practice JavaScript fundamentals, with an emphasis on Single Responsibility.
//(5 points): As a developer, I want to make at least three commits.


//Creating the Arrays to Ramdomly been selected by
const restaurantArray = [
  "Crackle Barrel",
  "Aplebees",
  "Chillis",
  "Seafood Shack",
  "El Papasito",
];
const destinationsArray = [
  "Los Angeles",
  "Seattle",
  "Grand Canyon",
  "San Francisco",
  "New York",
  "Cancun",
];
const arrayOfTransportation = ["Air Plane", "By Bus", "By Cruise", "Car"];
const arrayOfEntertainment = [
  "Mountain Climbing",
  "Music Concert",
  "Theather",
  "Sports",
  "Scuba Diving",
  "Dirty Racing",
];
// (5 points): As a user, I want a destination to be randomly selected for my day trip.
let destination = randomGenerator(destinationsArray);

//5 points): As a user, I want a restaurant to be randomly selected for my day trip.

//Generate Funcion to randon select an element of a given array and return it.
function randomGenerator(array) {
  number = Math.floor(Math.random() * array.length);
  return array[number];
}

let restaurant = randomGenerator(restaurantArray);
let entertainment = randomGenerator(arrayOfEntertainment);
let changeOption = 0;

//(5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.
let transportation = randomGenerator(arrayOfTransportation);

//(15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.
alert(`              Destination is: ${destination}
        Transportation is : ${transportation}
              Restaurant is : ${restaurant}
        Entertainment is: : ${entertainment}
        Would you like to change anything, Select OK to continue.`);
changeTrip();
function changeTrip() {
  changeOption = Number(
    prompt(`Would to like to change anything, Select an option
         1. Destination    --  Current is ${destination}
         2. Transportation --  Current is ${transportation}
         3. Restaurant     --  Current is ${restaurant}
         4. Entertainment  --  Current is ${entertainment}
         5. No change Needed Confirm Trip.`)
  );
  validateOption(changeOption);
}
function validateOption(changeOption) {
  switch (changeOption) {
    case 1:
      destination = randomGenerator(destinationsArray);
      changeTrip();
      break;
    case 2:
      transportation = randomGenerator(arrayOfTransportation);
      changeTrip();
      break;
    case 3:
      restaurant = randomGenerator(restaurantArray);
      changeTrip();
      break;
    case 4:
      entertainment = randomGenerator(arrayOfEntertainment);
      changeTrip();
      break;
    case 5:
      confirmTrip();
      break;
    default:
      confirmTrip();
  }
}

function displayTripInformation() {
  alert(`              Destination is: ${destination}
        Transportation is : ${transportation}
              Restaurant is : ${restaurant}
        Entertainment is: : ${entertainment}`);
}
function confirmTrip() {
  console.log(`Your Trip is confirmed with the following information
  Destination is: ${destination}
  Transportation is : ${transportation}
        Restaurant is : ${restaurant}
  Entertainment is:  ${entertainment}
  Enjoy your Trip`);
}
