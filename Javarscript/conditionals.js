// if 
// if - else
// if else is 
// switch case

//if (10 < 5) {
  //  console.log("True");
//}

//else {
  //  console.log("False");
//}

//var age = 22;
//if (age >= 18) {
//    console.log("You can Vote!");
//}
//else {
//    console.log("You can't Vote!");
//}

var age = 16;
var hasDriversLicence = false;

if (age >= 18) {
    console.log("You can Vote!");
    
    if (hasDriversLicence) {
        console.log("You can also drive");
    } else {
        console.log("You eligeble to vote not drive");
    }
} else {
    console.log("You can't drive and you can't vote");
}