// 0. Describe a function in your own words.
// A function is a block of code that can be run repeatedly
//1. Write a function that logs "Hello World" when called.
function greeting() {
  console.log("Hello World");
}
greeting();

// end #1

// 2. Write a function that takes in a number and logs "Hello World" that number of times

function greeting(num) {
  for (let i = 0; i < num; i++) {
    console.log("Hello World");
  }
}
greeting(5);

// end #2

// 3. Write a function that takes in a number and returns true if it's greater than zero, false if less than 0.

function kittyCats(num) {
  if (num < 0) {
    return false;
  } else {
    return true;
  }
}

console.log(kittyCats(-3)); // "false"
console.log(kittyCats(18)); // "true"

// Also #3, I guess... Write a function that takes in a number in Kelvin and returns the
// temperature in Fahrenheit. You can Google how to convert K to F.

function kToF(tempK) {
  return ((tempK - 273.15) * 9) / 5 + 32;
}
console.log(kToF(25));

// end #3

// 4. Write a function that takes in a number (0 - 6) as an argument and returns the day of the week (dayOfWeekToString(0)
// would return "Sunday", dayOfWeekToString(2) would return "Tuesday").
// NOTE: Use if / else if or switch for each day of the week within the function.

function dayOfWeekToString(dayNumber) {
  switch (dayNumber) {
    case 0:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
  }
}
let weekDay = dayOfWeekToString(4);
console.log(weekDay);

// end #4

//5. Write a function that returns the current day of the week. NOTE: You will want to search for `getDay()` on MDN.
// (getDayOfWeek() would return 'Wednesday'). There may be a lot of overlap with the previous function,
// can you use the previous function to simplify your code?

function getDayOfWeek() {
  let today = new Date("October 24, 2022");
  let day1 = today.getDay();
  return dayOfWeekToString(day1);
}
console.log(getDayOfWeek());
// end #5

// 6. Write a function that logs the number of times it's been called to the
// console. (callCounter(); would log 'You have called this function 1 time'.
// Running it again would log 'You have called this function 2 times'.) This one is
// more challenging that it sounds but should generate some good conversation!
//
let count = 0;
function callCounter() {
  count++;
  console.log("You have called this function " + count + " times.");
}
callCounter();
callCounter();
callCounter();
// end #6

// Own Practice:
function trueOrFalse(num) {
  switch (num) {
    case 0:
      return "False";
      break;
    case 1:
      return "True";
      break;
  }
}
let blob = trueOrFalse(1);
console.log(blob);

function namePosition(name) {
  switch (name) {
    case "Robert":
      return "First";
      break;
    case "Evan":
      return "Middle";
      break;
    case "Johnson":
      return "Last";
      break;
    default:
      return "Name not entered.";
  }
}
let position = namePosition();
console.log(position);

function total(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
console.log(total([2, 3, 4, 5]));

function introduce(name, age, country) {
  console.log(
    "My name is " +
      name +
      ", I am " +
      age +
      " years old and I am from " +
      country +
      "."
  );
}
introduce("Allie", 29, "Mahtomedi, Minnesota");
introduce("Geordi La Forge", 7, "Missouri");
introduce("Kurt", 29, "Stillwater, Minnesota");

function animalType(name) {
  switch (name) {
    case "Geordi":
      return "Canine";
      break;
    case "Wesley":
      return "Devil";
      break;
    case "Jaskier":
      return "Feline";
      break;
    default:
      return "Name not entered";
  }
}
let pet = animalType();
console.log(pet);
