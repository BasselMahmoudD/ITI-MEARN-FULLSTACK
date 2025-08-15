///////////////////////Q1
var num = prompt( "Enter a number :" );
if ( num > 0 ) {
    console.log("Number is positive");
} else if ( num < 0 ) {
    console.log("Number is negative");
} else if(num ==0) {
    console.log("Number is 0");
} else {
    console.log("This is not a number");
}

/////////////////////////Q2
var response = confirm( "Do you want to proceed?" );
console.log(response);

if ( response == true ) {
    alert("You chose to proceed");
} else {
    alert("Action canceled.")
}

////////////////////////Q3

var num = 10;
console.log(num % 2 === 0?console.log("hi"):console.log("heloo"));


////////////////////////Q4

do {
    var age = prompt( " Enter your age !!?" );
} while (age < 0)

 if (age > 0 && age < 11) {
  console.log("Child");
} else if (age > 10 && age < 19) {
  console.log("Teenager");
} else if (age > 18 && age < 51) {
  console.log("Grown up");
} else if (age > 50) {
  console.log("Old");
} else {
    console.log();
}

////////////////////////////Q5

var num = prompt( "Enter time now :");
 if ( num > 12  && num < 25) {
    console.log("time is " + parseInt(num - 12) + " PM");
} else if ( num < 13 && num > 0 ) {
    console.log("Time is :" + num + " AM");
} else {
    console.log("Enter a real number !!");
}

////////////////////////////Q6

var str = prompt( "Enter string :" );
console.log(str[0].toUpperCase() + str.substring(1));

////////////////////////////Q7

var color = prompt( "Enter your favorite color :" );
var result = confirm( "You chose " + color + ". Is that correct?" );
if ( result == true ) {
    alert("Great choice!");
} else {
    alert("Let's try again.");
}

///////////////////////////Q8
var date1 = new Date
var date2 = new Date

console.log( date1 > date2 );

//////////////////////////Q9

var date1 = new Date( "3/10/2002" );
var date2 = new Date( "5/12/2004" );
var days = 0;
if ( parseInt(date1) != parseInt(date2)) {
    var defYears = Math.abs( parseInt( date1.getFullYear() ) - parseInt( date2.getFullYear() ) );
    days = defYears * 12 * 30;
    var defMonth = Math.abs(parseInt(date1.getMonth()) - parseInt(date2.getMonth()));
    days = days + defMonth * 30;
    var defDays = Math.abs(parseInt(date1.getDay()) - parseInt(date2.getDay()));
    days = days + defMonth * 30;
}
console.log("Total Days is : " + days);

//////////////////////////Q10

var str = "Hello world!";
var newStr = str.split( " " )[ 1 ]
console.log(newStr.slice(0,-1));

//////////////////////////Q11

var num = 5.678;
console.log( num.toFixed( 2 ) );

//////////////////////////Q12

var num = prompt( "Enter number" );
if ( num % 3  == 0 && num %5==0 ) {
    console.log("True");
} else {
    console.log("False");
}




