//Set Variables to store data for later
let totalIncome = 0;
let totalExpenses = 0;
let balance = 0;

//Set arrays to store the transaction
let incomeItems = [];
let expensesItems = [];

//Set function to update the balance
function updateBalance() {
    balance = totalIncome - totalExpenses;
    document.getElementById("balance").innerHTML = "$ " + balance.toFixed(2);
}

//Set calculate income function
function Income(event) {
    event.preventDefault(); //To Prevent refreshing while clicking button

    //Update total income
    let incomeAmount = parseFloat(document.getElementById("income_amount").value);
    totalIncome = totalIncome + incomeAmount;
    document.getElementById("income").innerHTML = "$ " + totalIncome.toFixed(2);

    //Update Income List
    let incomeDesc = document.getElementById("income_desc").value;
    incomeItems.push({incomeDesc, incomeAmount});
    function newIncomeLi(){
        return incomeDesc + `: $` + incomeAmount.toFixed(2) + '<br>'
    };
    document.getElementById("income_li").innerHTML = incomeItems.map(newIncomeLi);

    // Update balance
    updateBalance();
}

// Set calculate expenses function
function Expenses(event) {
    event.preventDefault();  //To Prevent refreshing while clicking button

    //Update total expenses
    let expensesAmount = parseFloat(document.getElementById("expenses_amount").value);
    totalExpenses = totalExpenses + expensesAmount;
    document.getElementById("expenses").innerHTML = "$ " + totalExpenses.toFixed(2);

    //Update Expenses List
    let expensesDesc = document.getElementById("expenses_desc").value;
    expensesItems.push({expensesDesc, expensesAmount});
    function newExpensesLi(){
        return expensesDesc + `: $` + expensesAmount.toFixed(2) + '<br>'
    };
    document.getElementById("expenses_li").innerHTML = expensesItems.map(newExpensesLi);
        
    // Update balance
    updateBalance();
}

let incomeBtn = document.getElementById("Income_btn");
let expensesBtn = document.getElementById("Expenses_btn");

incomeBtn.addEventListener("click", Income);
expensesBtn.addEventListener("click", Expenses);

// Investment Form

function Investment (event) {
    event.preventDefault(); //To Prevent refreshing while clicking button

    //Set a function to calculate the investment
    function calculateInvestment(){

        //Defined different variables
        let initialAmount = parseFloat(document.getElementById("initialamount").value);
        let years = parseInt(document.getElementById("years").value);
        let rates = parseFloat(document.getElementById("rates").value) / 100; 
        let contribution = parseFloat(document.getElementById("contribution").value);
        let compound = parseInt(document.getElementById("compound").value);
        let totalAmount = (initialAmount*Math.pow((1+(rates/compound)),compound*years)) + ((contribution*compound/rates)*(Math.pow((1+(rates/compound)),compound*years)-1)) 
        
        // Display the total investment value
        document.getElementById("message").innerHTML = 'You will have $' + totalAmount.toFixed(2) + ' after ' + years + ' years.';
    };

    //Call the function
    calculateInvestment();
}
  
let investmentBtn = document.getElementById("investment_btn");

investmentBtn.addEventListener("click", Investment);