var milesDriven = window.prompt("Enter your miles driven");
var gallons = window.prompt("Enter the size of your tank in gallons");
var mpg = milesDriven / gallons;
document.write("You drove: " + milesDriven + " miles.<br>");
document.write("Your tank size is: " + gallons + " gallons.<br>");
document.write("You got " + mpg.toFixed(2) + " miles per gallon on this trip.");