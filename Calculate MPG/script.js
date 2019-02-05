/*
var milesDriven = window.prompt("Enter your miles driven");
var gallons = window.prompt("Enter the size of your tank in gallons");
var mpg = milesDriven / gallons;
document.write("You drove: " + milesDriven + " miles.<br>");
document.write("Your tank size is: " + gallons + " gallons.<br>");
document.write("You got " + mpg.toFixed(2) + " miles per gallon on this trip.");
*/




var miles;
var gallons;
var mpg;
var again = "y";

do {
  miles = window.prompt("Enter miles driven.");
  gallons = window.prompt("Enter size of gas tank in gallons.");

  if (!isNaN(miles) && miles > 0
      && !isNaN(gallons) && gallons > 0)
  {
    mpg = miles / gallons;
    window.document.write("Miles per gallon: " + mpg.toFixed(2));
  }
  else
  {
    window.document.write("One or both entries are invalid.");
  }
  again = window.prompt("repeat entries? (y or n)");
} 

while (again === "y");

