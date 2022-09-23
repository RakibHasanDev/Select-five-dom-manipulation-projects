

// budget section

document.getElementById('Calculate').addEventListener('click', function () {
  
    playerExpense();
    
})

document.getElementById('Calculate-total').addEventListener('click', function () {
    const managerAmount = getInputField('manager-field')
    const coachAmount = getInputField('coach-field')
    const employerSalary = managerAmount + coachAmount;
    const previousPlayerExpense = playerExpense();
    const totalExpense = previousPlayerExpense + employerSalary;
    if (isNaN(totalExpense)) {
        
        return;
    }
    const fianlExpenseField = document.getElementById('total-expense');
    fianlExpenseField.innerText = totalExpense;
    
})


