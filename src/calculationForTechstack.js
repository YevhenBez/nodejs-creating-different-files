function calculateTeamFinanceReport(salaries, team) {
    // Initialize variables to track total budgets for each specialization
    let totalBudgetTeam = 0;
    let totalBudgetBySpecialization = {};

    // Loop through each team member
    team.forEach(member => {
        // Destructure specialization directly from the member object
        const { specialization } = member;

        // Check if the specialization exists in the salaries object
        if (salaries.hasOwnProperty(specialization)) {
            const { salary, tax } = salaries[specialization];

            // Calculate the salary amount before tax
            const taxPercentage = parseInt(tax) / 100;
            const grossSalary = salary / (1 - taxPercentage); // Calculate gross salary before tax

            // Round the gross salary to the nearest integer using more accurate rounding
            const roundedGrossSalary = Math.round(grossSalary);

            // Update the total budget for the entire team
            totalBudgetTeam += roundedGrossSalary;

            // Update the total budget for the specific specialization
            if (!totalBudgetBySpecialization[specialization]) {
                totalBudgetBySpecialization[specialization] = roundedGrossSalary;
            } else {
                totalBudgetBySpecialization[specialization] += roundedGrossSalary;
            }
        }
    });

    // Prepare the report object with truncated integer values
    const report = { totalBudgetTeam };
    for (const specialization in totalBudgetBySpecialization) {
        if (totalBudgetBySpecialization.hasOwnProperty(specialization)) {
            report[`totalBudget${specialization}`] = totalBudgetBySpecialization[specialization];
        }
    }

    return report;
}




const salaries1 = {
   Manager: { salary: 1000, tax: "10%" },
   Designer: { salary: 600, tax: "30%" },
   Artist: { salary: 1500, tax: "15%" },}
const team1 = [
   { name: "Misha", specialization: "Manager" },
   { name: "Max", specialization: "Designer" },
   { name: "Vova", specialization: "Designer"},
   { name: "Leo", specialization: "Artist"},]
const financeReport1 = calculateTeamFinanceReport(salaries1, team1)
console.log(JSON.stringify(financeReport1))