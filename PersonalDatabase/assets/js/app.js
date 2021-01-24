let person={
    fn:"",
    sn:"",
    age:"0",
    birthYear:"",
    job:"",
    isEligibleToVote:"",
    familyMember:[],

    
    ageCalc: function() {
         return this.age = new Date().getFullYear() - this.birthYear;
         },
    checkVote: function() {
        let tempAge = this.ageCalc(Number(this.birthYear));
        if (tempAge >= 18) { this.isEligibleToVote = true; } else { this.isEligibleToVote = false; }
    },
    calcBmi:function(){}}
    var weight;
    var height;
    

//why can't we hoist this
function calcBmi(weight,height){
    let bmi=weight/(height*height);
    bmi= Number(bmi.toFixed(1));
    console.log("Your Bmi is : " + bmi);
    if (bmi < 18.5)
        console.log("Your are : Underweight");
    else if (bmi >= 18.5 && bmi <= 24.9)
        console.log("Your are : Normal");
    else if (bmi >= 25.0 && bmi <= 29.9)
        console.log("Your are : Overweight");
    else if (bmi >= 30.0)
        console.log("Your are : Obese");
}

























person.fn=prompt("Enter your First Name");
person.sn=prompt("Enter your Last Name");
person.job=prompt("What is your profession?");
person.birthYear=prompt("Enter Your Birth Date");
weight=prompt("Enter your weight")
height=prompt("Enter your height")

console.log("Here is your Profile");
console.log("Full Name:"+person.fn+""+person.sn);
console.log("profession:"+person.job);
console.log("Age:" +person.birthYear+ " "+"years old")

let numberOfFamily;
numberOfFamily=prompt("Number of Family ?")
for(let i=0; i<parseInt(numberOfFamily);i++){
    person.familyMember[i]=prompt("Your Family Members" + (i+1));
}
console.log("Family Members");
person.familyMember.forEach(function(member){
    console.log("Family Member "+(member + 1)+":"+member);
})

function calcAge(birthYear){
    
}

(function() {

    console.log("Here is your Profile ")
    console.log("Full Name: " + person.fn + " " + person.sn);
    console.log("Profession : " + person.job);
    console.log("Age : " + person.birthYear + " " + "years old");
    console.log("Is Eligible to Vote : " + person.isEligibleToVote);
    console.log("Family Members ");
    calcBmi(weight,height);
    console.log("*****************************************************");
})();


