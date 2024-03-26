const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to prompt for imput and calculate grade
rl.question("Enter mark: ", (mark) => {
  mark = parseFloat(mark);
  if (isNaN(mark) || mark < 0 || mark > 100) {
    console.log("Invalid mark!");
  } else if (mark > 79) {
    console.log("Grade: A");
  } else if (mark >= 60) {
    console.log("Grade: B");
  } else if (mark >= 50) {
    console.log("Grade: C");
  } else if (mark >= 40) {
    console.log("Grade: D");
  } else {
    console.log("Grade: E");
  }
  rl.close();
});
