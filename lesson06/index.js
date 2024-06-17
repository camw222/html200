let withdraw = 0;
let deposit = 0;
let balance = 2222;
bankInput();

function bankInput() {
    let input = prompt ('What would you like to do? \n Press W to withdraw \n Press D to deposit \n Press B to view balance \n Press Q to quit');

    if (input == 'w') {
        withdrawMoney();
        showBalance();
    } else if (input == 'd') {
        depositMoney();
        showBalance();
    } else if (input == 'b') {
        showBalance();
    } else if (input == 'q') {
        return;
    } else {
        alert('Invalid response.');
    }

    bankInput();
}

function withdrawMoney() {
    let withdraw = prompt ('Enter the amount you want to withdraw');
    balance -= Number(withdraw) ;
}

function depositMoney() {
    let deposit = prompt ('Enter the amount you would like to deposit');
    balance += Number(deposit);
}

function showBalance() {
    alert ('Your current balance is $' + balance);
}