/* 
    Create a button with the id "calculateBudget". Use an event listener to trigger the budget calculation when the button is clicked.

Requirements:

    Input: Prompt the user to enter their total monthly income (without commas).
    Prompt the user to enter their estimated monthly expenses.
    Prompt the user to enter the number of months to project the budget for.
    Calculations: Calculate the monthly savings (income - expenses).
    Calculate the total projected savings over the given number of months.
    Output: 
    Display the following information in a div element with the id "budgetResults":
    Monthly Income
    Monthly Expenses
    Monthly Savings
    Total Projected Savings.
    Use a loop (for loop, while loop, or do-while loop) to display the projected savings for each month.
    Display each months savings in a new paragraph element that is appended to the budget results div.
    If the monthly savings are negative, display "Warning: Spending exceeds income!"
    Error Handling: 
    Use try...catch blocks to handle potential errors, such as non-numeric input.
    If an error occurs, display an alert message describing the error.
    Formatting:
    Use the .toFixed(2) method to round the calculated values to two decimal places.


Rubric (1 bonus point each)

    Input Validation and Error Handling: Implement try...catch to alert users of non-numeric input without interrupting program flow.
    Calculator Function: Use 1 function to run all the calculations when the user input is taken for all relevant parameters.
    Monthly Savings Warning: Display a clear warning if monthly spending exceeds income.
    Projected Monthly Savings Display: Use a loop to show savings for each month in separate paragraphs.
    Accurate Total Projected Savings: Calculate and display the total savings accurately to two decimal places.
*/

let button1 = document.getElementById("calculateBudget");
let income = document.getElementById("monthlyIncome");
let expense = document.getElementById("monthlyExpense");
let months = document.getElementById("monthsBudget");
let result = document.getElementById("budgetResults")
let form1 = document.getElementById("form1")
function budgetCalc(income, expense, month) {
    console.log("inside function");
    return ((income-expense)*month).toFixed(2);
}
console.log("inside")

button1.addEventListener("click", function(event) {
    event.preventDefault();

    


    try {
    let counter = 1;
    num_months = Number(months.value);
    num_income = Number(income.value);
    num_expense = Number(expense.value);
    if (num_expense > num_income) {
        window.alert("Warning: Spending exceeds income!")
    } 
    while (counter <= num_months) {
        let output = document.createElement("p");
        output.id = "output";
        output.textContent = "End of Month " + counter + " Savings: " + budgetCalc(num_income, num_expense, counter);
        result.appendChild(output);
        counter += 1;
    }
    let final_out = document.createElement("p");
    final_out.textContent = "Final Budget is: "+ budgetCalc(num_income, num_expense, counter-1);
    result.appendChild(final_out);
    } catch {
        window.alert("Please use valid numbers such as whole numbers");
    }

});

