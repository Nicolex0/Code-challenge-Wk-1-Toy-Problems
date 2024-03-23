// Function to calculate tax based on the KRA rates
function calculateTax(grossSalary) {
    let tax = 0;
    if (grossSalary <= 24000) {
        tax = 0
    } else if (grossSalary <= 32333){
        tax = (grossSalary - 24000) * 0.1;
    } else if (grossSalary <= 40467) {
        tax = 832 + (grossSalary - 32333) * 0.15;
    } else if (grossSalary <= 48600) {
        tax = 2087 + (grossSalary - 40467) * 0.2;
    } else if (grossSalary <= 56733) {
        tax = 3720 + (grossSalary - 48600) * 0.25;
    } else {
        tax = 5775 + (grossSalary - 56733) * 0.3;
    }
}
return tax;
