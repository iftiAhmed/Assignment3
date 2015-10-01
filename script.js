/*======================================

Assignment 3, Part 1 Practice with Arrays

=======================================*/

//Q1 

/*
var favMovies = ["Hang 'Em High", "Gladiator", "Brave Heart", "The Untouchables", "Dances With Wolves"];
window.console.log(favMovies[1]);
*/
//Q2

/*
var movies = [];
movies[0] = "Hang 'Em High";
movies[1] = "Gladiator";
movies[2] = "Brave Heart";
movies[3] = "The Untouchables";
movies[4] = "Dances with Wolves";
window.console.log(movies[0]);
*/

//Q3

/*
var movies = [];
movies[0] = "Hang 'Em High";
movies[1] = "Gladiator";
movies[2] = "Brave Heart";
movies[3] = "The Untouchables";
movies[4] = "Dances with Wolves";
movies.push("War Room");
window.console.log(movies.length);

//Q4

var movies = [];
movies[0] = "Hang 'Em High";
movies[1] = "Gladiator";
movies[2] = "Brave Heart";
movies[3] = "The Untouchables";
movies[4] = "Dances with Wolves";
window.console.log("Before delete: " +movies);
delete movies[0];
window.console.log("After delete: " +movies);
*/
//Q5

/*
var movies = [];
movies[0] = "Hang 'Em High";
movies[1] = "Gladiator";
movies[2] = "Brave Heart";
movies[3] = "The Untouchables";
movies[4] = "Dances with Wolves";
movies[5] = "Mission Impossible";
movies[6] = "War";
for(var i = 0; i < movies.length; i++){
    
window.console.log(movies[i]);
}
*/

//Q6

/*
var movies = [];
movies[0] = "Hang 'Em High";
movies[1] = "Gladiator";
movies[2] = "Brave Heart";
movies[3] = "The Untouchables";
movies[4] = "Dances with Wolves";
movies[5] = "Mission Impossible";
movies[6] = "War";

for(index in movies){
    window.console.log(movies[index]);
}

*/
// Q7

/*
var movies = [];
movies[0] = "Hang 'Em High";
movies[1] = "Gladiator";
movies[2] = "Brave Heart";
movies[3] = "The Untouchables";
movies[4] = "Dances with Wolves";
movies[5] = "Mission Impossible";
movies[6] = "War";

for(index in movies){
    window.console.log(movies.sort());
}
*/

// Q8

/*
var i, j;
window.console.log("Movies I Like:");
window.console.log(" "); 
var favMovies = [];
favMovies[0] = "Hang 'Em High";
favMovies[1] = "Gladiator";
favMovies[2] = "Brave Heart";
favMovies[3] = "The Untouchables";
favMovies[4] = "Dances with Wolves";
favMovies[5] = "Mission Impossible";
favMovies[6] = "War";
window.console.log("  ");
for (i = 0; i < favMovies.length; i++) {
    window.console.log(favMovies[i]);
}
window.console.log("  ");

window.console.log("Movies I regret watching:\n");
window.console.log("    ");
var leastFavMovies = [];
leastFavMovies[0] = "Star Wars";
leastFavMovies[1] = "Spider Man";
leastFavMovies[2] = "Spider Women";
for (j = 0; j < leastFavMovies.length; j++) {
    window.console.log(leastFavMovies[j]);
}

*/

//Q9
/*

var favMovies = [];
favMovies[0] = "Hang 'Em High";
favMovies[1] = "Gladiator";
favMovies[2] = "Brave Heart";
favMovies[3] = "The Untouchables";
favMovies[4] = "Dances with Wolves";
favMovies[5] = "Mission Impossible";
favMovies[6] = "War";

var leastFavMovies = [];
leastFavMovies[0] = "Star Wars";
leastFavMovies[1] = "Spider Man";
leastFavMovies[2] = "Spider Women";

var movies = favMovies.concat(leastFavMovies);
window.console.log("Movies after concatination:\n" + movies);
window.console.log("Movies in revers order:\n" + movies.reverse());
*/
//Q10

/*
var lastItem = movies[movies.length - 1];
window.console.log("The last item in the after reverse order is: " + lastItem);


//Q11

var firstItem = movies[0];
window.console.log("The first item in the array after the reverse order is: " + firstItem);
*/
//Q12
/*
var i, j;
for(i = 0; i < movies.length; i++){

    window.console.log("Movies those I watched: " + movies[i]);

    var DoNotLike = movies.shift();
    window.console.log("Indices of Movies I don't like." + DoNotLike[i <= 2]);
}


*/

//Q13 Associative arrays

/*
var employee1 = [];
employee1["id"] = 1596;
employee1["name"] = "Yasmine Adame";
employee1["title"] = "Content Manager";
employee1["department"] = "Marketing";
employee1["currentemployee"] = true;
var employee2 = [];
employee2["id"] = 1000;
employee2["name"] = "Iftikhar Ahmed";
employee2["title"] = "Software Engineer";
employee2["department"] = "CPIT";
employee2["currentemployee"] = true;
var employees = employee1 concat(employee2);
if(employees.name == "Iftikhar Ahmed"){
    window.console.log("The name of the second employee is: " employees["name"]);
} else {
    window.console.log("Cannot find the employee!");
}
*/

//Q14


/*
var i ;
var employee1 = [];
employee1["id"] = 1596;
employee1["name"] = "Yasmine Adame";
employee1["title"] = "Content Manager";
employee1["department"] = "Marketing";
employee1["currentemployee"] = true;
var employee2 = [];
employee2["id"] = 1000;
employee2["name"] = "Iftikhar Ahmed";
employee2["title"] = "Software Engineer";
employee2["department"] = "CPIT";
employee2["currentemployee"] = true;
var employees = employee1 concat(employee2);
for(i = 0; i < employees.length; i++) {
    window.console.log("The name of employees are:" + employees["name"]);
    
}
*/

//Q15


/*
var employee1 = [];
employee1["id"] = 1596;
employee1["name"] = "Yasmine Adame";
employee1["title"] = "Content Manager";
employee1["department"] = "Marketing";
employee1["currentemployee"] = true;
var employee2 = [];
employee2["id"] = 1000;
employee2["name"] = "Iftikhar Ahmed";
employee2["title"] = "Software Engineer";
employee2["department"] = "CPIT";
employee2["currentemployee"] = true;
var employee3 = [];
employee3["id"] = 1075;
employee3["name"] = "John Doe
employee3["title"] = "Analyst";
employee3["department"] = "CPIT";
employee3["currentemployee"] = false;

var employees = employee1 concat(employee2, employee3);

if(employees["currentemployee"] == true) {
    window.console.log("Current employee are: " + employees)

} else{
    window.console.log("No current employee found." + employees);
}
*/

// Q16
/*
var i;
var movies = [["Pursuit of Happiness", 1], ["Dances with the Wolf", 2], ["Gladiator", 3], ["American Pie", 4], ["Gold Finger", 5]];
var moviesName = movies.filter(function (item) {
    return typeof item === "string";
}
    );
for (i = 0; i <= moviesName.length;  i++) {
    window.console.log(moviesName[i][0]);
}
*/

/*
var i;
var movies = [["Pursuit of Happiness", 1], ["Dances with the Wolf", 2], ["Gladiator", 3], ["American Pie", 4], ["Gold Finger", 5]];
for (i = 0; i < movies.length; i++) {
	window.console.log(movies[i][0]);
}
*/

//Practice with Functions

//Q1

/*
var displayMessage = (function (message) {
    window.console.log(message);
}('Hello'));
*/

//Q2

/*
(function calculate(num1, num2) {
    window.console.log(num1 % num2);
}(5, 3));
*/

/*/Q3

/
var i;
var showEmployee = function () {
        var employees =  ["ZAK", "JESSICA", "MARK", "FRED"];
        return function (showEmployee) {
    return showEmployee (typeof "string");
        };
} ();
showEmployee();

for (i = 0; i <= showEmployee.length; i++) {
    window.console.log("Employees: \n" + showEmployee[i]);
}
*/

//The Rock Paper & Scissors problem


// Prompt user to enter there choices

/*
    POSSIBLE OUTCOME:
    
    1. Rock destroys scissors.
    2. Scissors cut paper.
    3. Paper covers rock.
*/

//=====================================================================================

/*
var option1;
var option2;

var userOption = prompt("Please enter your choice, rock, scissors or paper:");
var computerOption = Math.random();

// Assume the random number is between 0 to 1.00

if (computerOption <= 0.33) {
    computerOption = "rock";
} else if (computerOption >= 0.34 && computerOption <= 0.66) {
    computerOption = "scissors";
} else {
    computerOption = "paper";
}

option1 = userOption;
option2 = computerOption;

function comparsion(option1, option2) {
    if (option1 === option2) {
        return prompt("The game is tie!");
    }
    if (option1 === "rock") {
        if (option2 === "scissors") {
            return prompt("rock is the winner!");
        } else {
            return prompt("paper is the winner!");
        }
    }
    if (option1 === "scissors") {
        if (option2 === "rock") {
            return prompt("rock is the winner!");
        } else {
            return prompt("scissors is the winner!");
        }
    }
    if (option1 === "paper") {
        if (option2 === "rock") {
            return prompt("paper is the winner!");
        } else {
            return prompt("scissors is the winner!");
        }
    } else if ((option1 && option2) !== "rock" || "scissors" || "paper") {
        return prompt("Please enter the right chice of rock, scissors, and paper!");
    }
}
window.console.log(comparsion(option1, option2));
*/


// Basic Calculator

/*
var firstNum = "Enter first number!";
var num1 = prompt(firstNum);
var secondNum = "Enter second number!";
var num2 = prompt(secondNum);
var result;

var addSign = "+";
var subSign = "-";
var multSign = "*";
var dividSign = "/";
var selectSign = prompt(addSign, subSign, multSign, dividSign);

function calculate(num1, num2, selectSign) {
    if (selectSign === addSign) {
        result === num1 + num2;
    }
    window.console.log(calculate(num1, num2, selectSign));
}

*/






//Death By JavaScript:

// Q1 

/*
function makeAlphabet(str) { 
    var arr = str.split(''),
        alpha = arr.sort().join('').replace(/\s+/g, '');
    return alpha;
}
var enterString = prompt("Enter the string!");
window.console.log(makeAlphabet(enterString));

*/
// Q2



//function capitalizeFirstLetter(str) {
 //   return str.replace(/\w\S*/g, function (txt) {
 //       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
 //   });
//}

//var enterString = "Enter the desired string: ";
//var desiredOutput = prompt(enterString);
//var desiredReult = capitalizeFirstLetter(desiredOutput);
//window.prompt("Entered String: " + enterString);
//window.prompt("Output string: " + desiredReult);



//3
function generateid(len) {  
    var text = "";  
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; 
    var char_length = prompt(char_list);
    for (var i=0; i < len; i++ )  
{    
text += char_length.charAt(Math.floor(Math.random() * char_length.length));  
}  
return text;  
}
console.log(generateid(8));  

// Longest String




