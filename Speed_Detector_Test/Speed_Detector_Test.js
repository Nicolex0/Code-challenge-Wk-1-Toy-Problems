const speedLimit = 70;
const demeritLimit = 12;

function speedDetector() {
  // Prompt the user to enter the car speed
  const carSpeed = prompt("Please enter the car speed (in km/s):");
  
  // Validate the input
  if (carSpeed >= 0) {
    let demeritPoints = 0;
    
    // Calculate the number of demerit points
    if (carSpeed > 70) {
      demeritPoints = Math.floor((carSpeed - 70) / 5);
    }
    
    // Display the result
    if (demeritPoints === 0) {
      alert("Ok");
    } else if (demeritPoints <= 12) {
      alert("Points: " + demeritPoints);
    } else {
      alert("License suspended");
    }
  } else {
    // Display an error message if the input is invalid
    alert("Invalid input! Please enter a non-negative number.");
  }
}