const speedLimit = 70;
const demeritLimit = 12;

// function to handle speed input and output
function handleSpeedInput(speed) {
    const demeritPoints = calculateDemeritPoints(speed);
    const status = checkLicenseStatus(demeritPoints);
    console.log(status);
}

// Function to calculate demerit points based on speed
function calculateDemeritPoints(speed) {
    if (speed <= speedLimit) {
        return 0; // There are no demerit points if speed is within limit
    } else {
        const surplusSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / 5); // Calculates demerit points
        return demeritPoints;
    }
}

// Function to check if license should be suspended
function checkLicenseStatus(demeritPoints) {
    if (demeritPoints > demeritLimit) {
        return 'License suspended';
    } else { 
        return demeritPoints;
    }
}