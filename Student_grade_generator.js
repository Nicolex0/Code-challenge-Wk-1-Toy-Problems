// Function calculate the grade
const calculateGrade  = (marks) => {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else {
        return 'E';
    }  
}
// Function to prompt the user for input
function promptForMarks() {
    let marks = parseFloat(prompt('Student marks (between 0 and 100):'));

    // Function to check if the input is valid
    while (isNaN(marks) || marks < 0 || marks > 100) {
        marks = parseFloat(prompt('Invalid input ! Enter student marks (between 0 and 100):'))
    }
   
    return marks;
}
// main program
const main = () => {
    // Prompt for student marks
    const marks = promptForMarks()
    // Calculate and output grade
    const grade = calculateGrade(marks);
    console.log(`Student's grade is: ${grade}`);
}
