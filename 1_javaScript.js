
//print
//console.log('web-dev');

//variable
var a = 10;
var b = 5;
var c = 1
//sum = a + b;
//console.log(sum);
//console.log(a + b + c);

//non primitive datatype
var A = {
    name: "Mahbub",
    age: 24,
    city: "dhaka"
}
//console.log(A.name) // Kira

var B = ['AA', 'bb', 'rr']
//console.log(B)



//OPERATOR

var quotient = 10 / 5; // quotient will be 2
var remainder = 10 % 3; // remainder will be 1
var x = 10;
x++; // x will be 11
var y = 5;
y--; // y will be 4

/*Comparison(Relational) Operators:
Equal to(==): Checks if two operands are equal.
Not equal to(!=): Checks if two operands are not equal.
Greater than(>), Greater than or equal to(>=)
Less than(<), Less than or equal to(<=)

===  equal and of same type
!== not identical

&& logical and
\\ logical or
! logical not

+= add and assign
-= sub and assign

*/

//IF-ELSE
var age = 9;
var city = "comilla";

if (age > 20 && city == "comilla") {
    // console.log("senior")
} else if (age < 20 && city == "comilla") {
    //console.log("junior")
} else {
    // console.log("error")
}


//SWITCH
var marks = 40;

switch (true) {
    case (marks <= 100 && 80 <= marks):
        // console.log("A+")
        break;
    case (marks < 80 && 70 <= marks):
        // console.log("A")
        break;
    case (marks < 70 && 60 <= marks):
        // console.log("A+")
        break;
    default:
    // console.log("fail")
}



//FOR LOOP
for (i = 0; i < 10; i = i + 2) {
    //console.log(i)  //0 2 4 6 8
}

//While
var i = 0;
while (i < 10) {
    // console.log(i);
    i = i + 2;
}



//Function

function Addsum() {
    var num1 = 10;
    var num2 = 20;
    var num3 = num1 + num2;
    // console.log(num3);
}
Addsum();

//parameter
function subTwo(r, s) {
    var r;
    var s;
    var num3 = r - s;
    console.log(num3);
}
subTwo(2, 7);

//retun