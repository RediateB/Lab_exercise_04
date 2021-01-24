var add;
var minus;
var multiply;
var division;
var option;
let numbers=new Array();


function addition(numbers) {
    let sum=0;
    numbers.forEach(function (member,index) {
        sum=sum+parseInt(member);
    });
    console.log(sum);
}

function subtraction(number1, number2) {
    var sub = parseInt(number2)-parseInt(number1)
    console.log(sub);
   
}
function multiplication(numbers) {
    let product=1;
    numbers.forEach(function(member) {
        product=product*parseInt(member);        
    });
    console.log(product);
}

function division(n,d) {
    if (d==0) {
        console.log("The denominator can not be 0.");
    }
    else{
       var divide= parseInt(n)/parseInt(d)
       console.log(divide); 
    }
}

var option=prompt("1.addition \n 2.subtraction \n 3.multiplication \n 4.division");
if (option=="1") {
    var addArray = prompt("Enter the numbers separated with comma.").split(",")
    addition(addArray)
}
else if(option == "2"){
    var number1= prompt("Enter the first number")
    var number2=prompt("Enter the second number")
    subtraction(number2,number1)
}
else if(option =="3"){
    var multArray= prompt ("Enter the numbers separated with comma.").split(",")
    multiplication(multArray)
}
else if(option=="4"){
    var numerator = prompt("Enter the numerator") 
    var denominator = prompt("Enter the denominator(CAN NOT BE 0!)")
    division(numerator,denominator)
}