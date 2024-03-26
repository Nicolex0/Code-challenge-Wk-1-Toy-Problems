const readlineSync = require("readline-sync");

// Get the basic salary and benefits from user input
const basicSalary = readlineSync.question("Enter the basic salary: ");
const benefits = readlineSync.question("Enter the benefits: ");

// Calculate the KRA tax rate
let taxRate;
if (parseFloat(basicSalary) <= 24000) {
  taxRate = 0.1;
} else if (parseFloat(basicSalary) <= 32333) {
  taxRate = 0.25;
} else {
  taxRate = 0.3;
}

// Calculate the KRA tax deduction
const payee = parseFloat(basicSalary) * taxRate;

// Calculate the NHIF deduction
let nhifRate;
if (parseFloat(basicSalary) <= 5999) {
  nhifRate = 150;
} else if (parseFloat(basicSalary) <= 7999) {
  nhifRate = 300;
} else if (parseFloat(basicSalary) <= 11999) {
  nhifRate = 400;
} else if (parseFloat(basicSalary) <= 14999) {
  nhifRate = 500;
} else if (parseFloat(basicSalary) <= 19999) {
  nhifRate = 600;
} else if (parseFloat(basicSalary) <= 24999) {
  nhifRate = 750;
} else if (parseFloat(basicSalary) <= 29999) {
  nhifRate = 900;
} else if (parseFloat(basicSalary) <= 34999) {
  nhifRate = 1050;
} else if (parseFloat(basicSalary) <= 39999) {
  nhifRate = 1200;
} else {
  nhifRate = 1500;
}
const nhifDeductions = nhifRate;

// Calculate the NSSF deduction
let nssfRate;
if (parseFloat(basicSalary) <= 6000) {
  nssfRate = 0.06;
} else {
  nssfRate = 0.06 / 2;
}
const nssfDeductions = parseFloat(basicSalary) * nssfRate;

// Calculate the gross salary and net salary
const grossSalary =
  parseFloat(basicSalary) + parseFloat(benefits);
const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

// Print the gross salary and net salary
console.log(`Gross salary: ${grossSalary}`);
console.log(`Net salary: ${netSalary}`);