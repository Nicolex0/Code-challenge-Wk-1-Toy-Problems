const speedLimit = 70;
const demeritLimit = 12;

// Import the `readline-sync` module
const readlineSync = require("readline-sync");

// Get the car's speed from user input
const speed = readlineSync.question("Enter the car's speed (in km/s): ");

// Check if the car is overspeeding
if (speed <= speedLimit) {
  // If the car is driving at or below the speed limit, print "Ok"
  console.log("Ok");
} else {
    // If the car is driving faster than the speed limit, calculate the number of demerit points
    const demeritPoints = Math.floor((speed - speedLimit) / 5);
  
    // Print the number of demerit points
    console.log(`Points: ${demeritPoints}`);
  
    // Check if the number of demerit points is greater than 12
    if (demeritPoints > 12) {
      // If the number of demerit points is greater than 12, print "License suspended"
      console.log("License suspended");
    }
  }
