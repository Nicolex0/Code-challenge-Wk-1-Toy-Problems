// Function to calculate tax (PAYE) based on provided rates
function calculateTax(grossSalary) {
    let tax = 0;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        tax = (grossSalary - 24000) * 0.25 + 2400;
    } else if (grossSalary <= 40667) {
        tax = (grossSalary - 32333) * 0.3 + 5500;
    } else if (grossSalary <= 49000) {
        tax = (grossSalary - 40667) * 0.3 + 8467;
    } else if (grossSalary <= 57333) {
        tax = (grossSalary - 49000) * 0.3 + 13000;
    } else if (grossSalary <= 65667) {
        tax = (grossSalary - 57333) * 0.3 + 19100;
    } else if (grossSalary <= 74000) {
        tax = (grossSalary - 65667) * 0.3 + 25733;
    } else if (grossSalary <= 82333) {
        tax = (grossSalary - 74000) * 0.3 + 32933;
    } else if (grossSalary <= 90667) {
        tax = (grossSalary - 82333) * 0.3 + 40667;
    } else if (grossSalary <= 99000) {
        tax = (grossSalary - 90667) * 0.3 + 49000;
    } else if (grossSalary <= 107333) {
        tax = (grossSalary - 99000) * 0.3 + 57333;
    } else if (grossSalary <= 115667) {
        tax = (grossSalary - 107333) * 0.3 + 65667;
    } else if (grossSalary <= 124000) {
        tax = (grossSalary - 115667) * 0.3 + 74000;
    } else {
        tax = (grossSalary - 124000) * 0.3 + 82333;
    }
    return tax;
}

// Function to calculate NHIF deductions based on the provided rates
function calculateNHIF(grossSalary) {
    let nhif = 0;
    if (grossSalary < 6000) {
        nhif = 150;
    } else if (grossSalary <= 8000) {
        nhif = 300;
    } else if (grossSalary <= 12000) {
        nhif = 400;
    } else if (grossSalary <= 15000) {
        nhif = 500;
    } else if (grossSalary <= 20000) {
        nhif = 600;
    } else if (grossSalary <= 25000) {
        nhif = 750;
    } else if (grossSalary <= 30000) {
        nhif = 850;
    }else if (grossSalary <= 35000) {
        nhif = 900;
    } else if (grossSalary <= 40000) {
        nhif = 950;
    } else if (grossSalary <= 45000) {
        nhif = 1000;
    } else if (grossSalary <= 50000) {
        nhif = 1100;
    } else if (grossSalary <= 60000) {
        nhif = 1200;
    } else if (grossSalary <= 70000) {
        nhif = 1300;
    } else if (grossSalary <= 80000) {
        nhif = 1400;
    } else if (grossSalary <= 90000) {
        nhif = 1500;
    } else if (grossSalary <= 100000) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }
    return nhif;
}

// Function to calculate NSSF deductions based on provided rates
function calculateNSSF(grossSalary) {
    const nssfRate = 0.06; // the NSSF rate is 6% of the gross salary
    return grossSalary * nssfRate;
}

// Function to calculate the net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const tax = calculateTax(grossSalary);
    const nhifDeductions = calculateNHIF(grossSalary);
    const nssfDeductions = calculateNSSF(grossSalary);
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
    
    return {
        grossSalary: grossSalary,
        tax: tax,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary
    };
}
