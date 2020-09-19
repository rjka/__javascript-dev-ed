/*//DATA TYPES
let variableName = 100; //NUMBER
let variableName = "100"; //STRING
let variableName; //UNDEFINED same as let variableName = undefined
console.log(variableName); // display on console
*/

/*//VARIABLE
//(1) Let variable - value can be change or altered
let variableName = 100;
variableName = variableName - 10;
console.log(variableName);

//(2) Const variable - are constant cannot change or altered
const variableName = 100;
variableName = variableName - 10; // used to alter const value, BUT
console.log(variableName); // it will get an error because const value is fixed
*/

/*//FUNCTION
//(1) function scope variable - only inside the {} can be read by functionName
function functionName() {
  const functionScopeVarName = "Hey Im a function scope variable";
  console.log("Text");
}
functionName(); // same as console.log(functionName()); //shortcut
console.log(functionScopeVarName); // you cannot call this variable because it is outside of the function scope

//(2) global scope variable - you can use it anywhere
const globalScopeVarName = "Hey Im a global scope variable";
function functionName2() {
  console.log(globalScopeVarName); // you can call this variable inside this function because it is a global scope variable
  console.log("Text");
}
functionName2();

//(3) function with parameter - example function to make text upper cased

const gScopeVarName = "i am global scope variable name";
const gScopeVarName2 = "i am global scope variable name two";

// //(I. example)
// function functionName(parameterName) {
//   const funcScopeVarName = parameterName.toUpperCase();
//   console.log(funcScopeVarName);
// }
// functionName(gScopeVarName);
// functionName(gScopeVarName2);

// //(II. example)
// const functionName = function (parameterName) {
//   const funcScopeVarName = parameterName.toUpperCase();
//   console.log(funcScopeVarName);
// };
// functionName(gScopeVarName);
// functionName(gScopeVarName2);

//(III. example - MODERN)
const functionName = (parameterName) => {
  const funcScopeVarName = parameterName.toUpperCase();
  console.log(funcScopeVarName);
};
functionName(gScopeVarName);
functionName(gScopeVarName2);

//(IV. same as)
functionName = (parameterName) => {
  const funcScopeVarName = parameterName.toUpperCase();
  console.log(funcScopeVarName);
};
functionName(gScopeVarName);
functionName(gScopeVarName2);
*/

/*//STRING CONCATENATION
//(I.)using "double quote" and 'single quote'
const name = "John";
console.log("Hello it's me! " + name); // + <variableName>
console.log("Hello " + name, "it's me!");
// console.log('Hello it\'s me!'); you need to add \back slash to add apostrophe

//(II.)using `back ticks`
const name = "John";
console.log(`Hello it's me! ${name}!`); //add ${variableName} modern concatenation
*/

/*//IF ELSE STATEMENT
//(1.)simple
const age = 10;
if (age >= 18) {
  console.log("You are above 18!");
} else if (age < 15) {
  console.log("You are really young!");
} else {
  console.log("You are not old enough!");
}

//(2.)combination
//use && if you want BOTH of the condition is true.
const dice1 = 6;
const dice2 = 3;
if (dice1 === 6 && dice2 === 6) {
  console.log("Yo rolled a double");
} else {
  console.log("You didn't roll!");
}

//use || if you want ONE of the condition is true.
const dice1 = 6;
const dice2 = 3;
if (dice1 === 6 || dice2 === 2) {
  console.log("You rolled a double");
} else {
  console.log("You didn't roll!");
}
*/

/*// COMPARING VALUES SYMBOLS
  = used to assigning a value; const age = 18
  == used to compare values; 18 (NUMBER) == "18" (STRING) is TRUE
  === used to compare values and data types; 18 (NUMBER) === "18" (STRING) is FALSE
  > greater than
  >= greater than or equal
  < less than
  <= less than or equal
  && (and) BOTH the condition is true
  || (or) ONE condition is true
*/

/*//ARRAYS
//(1) example
const schedule = ["zero", "one", "two", "three", "four"];
schedule.push("add me on last index"); //push() is an element of array that adds data to the last index
schedule.pop(); //pop() is an element of array that removes last index data

schedule.unshift("add me on first index"); // shift() is an element of array that adds data to the first index
schedule.shift(); // shift() is an element of array that removes first index data

console.log(schedule[1]); //access specific index; start from index [0]
console.log(schedule); //access all index

console.log(schedule.indexOf("one")); //indexOf() is an element of array that display the index number of data

//(2) example
const schedule = ["Wake up", "Eat", "Film a video", "Watch"];
const film = schedule.indexOf("Film a video");
console.log(film); // return the index number [2]
console.log(schedule[film]); // return the value of index[2] which is Film a video
 */

/*//OBJECTS AND KEYWORD THIS

//OBJECT - by using {} as a value of a variable you can create an object
const user = {
  name: "Russ",
  age: 24,
  married: false,
  purchases: ["phone", "car", "laptop"]
};
console.log(user.purchases);

//THIS - a window object
console.log(this); //it display all the window functions and elements on the console TRY to look

//(1)example
function apples() {
  console.log("apple");
}
window.apples(); // same result if you use "THIS" keyword
apples();

//(2)example
const user = {
  name: "Russ",
  age: 24,
  married: false,
  purchases: ["phone", "car", "laptop"],

  //method - is a function attached to an object
  sayName: function () {
    console.log(this.name); //display the data of object name
  },
};
user.sayName(); // "user" serves as the "this" on function sayName
 */

/*//FOR LOOP AND WHILE LOOP
//(1)for loop
//i. example
const names = ["sel", "rus", "john", "mary", "anna"];
for (name of names) {
  console.log(name);
  console.log(`Hello there ${name}`);
}

//ii. example
const names = ["sel", "rus", "john", "mary", "anna"];
for (name of names) {
  console.log(name); //to check the loop; you can remove this
  if (name === "mary") {
    console.log("Mary is in my list");
    break; //to stop the loop when mary is found
  }
}

//(2) while loop
let loading = 0;
while (loading < 100) {
  console.log("Website is loading");
  loading++; // same as +=1 ; to stop the loop
}
*/

/*//DOM MANIPULATION
//on the other file
 */
