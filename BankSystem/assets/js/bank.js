var deposit
var withdraw
var balance = 10000
var transfer
var amount
var option

function deposit(amount) {
    balance =balance + parseInt(amount)
    console.log("Your current balance is " + balance);
}

function withdraw(amount) {

    if (parseInt(amount)>balance) {
        console.log("Your balance is insufficient for this service.");
    }
    else if (parseInt(amount)>25000)
    {
        console.log("you can not withdraw more than 25000 a a time!");
    }
    else{
        var balanceL = balance-parseInt(amount)
        balance=balanceL
        console.log("Your current balance is " + balanceL);
    }
   
}

function transfer(amount) {
    
}



var option = prompt("1.Deposit \n 2.Withdraw \n 3.Transfer \n 4.Check balance")

if (option == "1") {
    var depositM = prompt("Enter the amount you want to add on your account.")
    deposit(depositM)
    
}
else if(option=="2"){
    var withdrawM = prompt ("Enter the amount of money you want to withdraw from your account!")
    withdraw(withdrawM)
}
else if(option=="3"){
    balanceM()
}
else if(option=="4"){
    var sender = prompt("Enter Your Name:")
    var receiver = prompt("Enter The receiver Name:")
    var amountToBeSent= prompt("Enter the amount of money you want to transfer")
}