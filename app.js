// Learning objective: Use and practice JavaScript fundamentals, with an emphasis on Single Responsibility.
//(5 points): As a developer, I want to make at least three commits.

// (5 points): As a user, I want a destination to be randomly selected for my day trip.

//5 points): As a user, I want a restaurant to be randomly selected for my day trip.
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

//Generate Funcion to randon select an element of a given array and return it. it will also will the length of the array in the random number assignment
function randomGenerator(array) {
  number = Math.floor(Math.random() * array.length);
  console.log(array[number]);
  //return array[number];
}
let destination = randomGenerator(destinationsArray);
let transportation = randomGenerator(arrayOfTransportation);
let restaurant = randomGenerator(restaurantArray);
let entertainment = randomGenerator(arrayOfEntertainment);

let changeOption = 0;

//(5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.

//(15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.
alert(`              Destination is: ${destination}
        Transportation is : ${transportation}
              Restaurant is : ${restaurant}
        Entertainment is: : ${entertainment}
        Would you like to change anything, Select OK to continue.`);
changeTrip();
