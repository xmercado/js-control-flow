// If Else Statements
    // === strict equal (checks type)
    // !== strict not equal
    // > greater than
    // >= greater than or equal
    // < less than
    // <= less than or equal

console.log(1 == '1');
console.log(1 === '1');
console.log(1 === 1);

// Logical Operators
    // && and
    // || or
    // ! not

// if (condition) {
//     statement1
// }
// else {
//     statement2
// }


// if the hour is between 6 am and 12 pm, say "Good morning!"
// if it is between 12 pm and 6 pm, say "Good afternoon!"
// otherwise: say "Good evening!"

let hour = 10;

if (hour >= 6 && hour < 12) {
    console.log("Good morning!");
}
// can have more than one if...else with else if
else if (hour >=12 && hour < 18) {
    console.log("Good afternoon!");
}
else {
    console.log("Good evening!");
}

// Truthy and Falsy
    // Falsy
        // False
        // 0
        // Empty string ""
        // Null
        // Undefined
        // NaN

    // Truthy
        // All other values

// Ternary Operator
// condition ? trueExpression : falseExpression

(hour >= 12 && hour < 18)
    ?
        console.log("Good morning!")
    :
        console.log("Good afternoon!")

// Switch Statements
// switch(expression) {
//     case value1:
//         statement1
//         break
//     case value2:
//         statement2
//         break
//     default:
//         statementDefault
//         break
// }

let day = 3;

switch(day) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        console.log(`Day is invalid.`);
        break;
}
console.log(`Today is ${day}`);