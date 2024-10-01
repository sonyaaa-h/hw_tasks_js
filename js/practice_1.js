function getQuarter(minute) {
    if (minute >= 0 && minute <= 15) {
        return "First quarter";
    } else if (minute <= 30) {
        return "Second quarter";
    } else if (minute <= 45) {
        return "Third quarter";
    } else if (minute <= 59) {
        return "Fourth quarter";
    } else {
        return "Value is not valid";
    }
}

console.log(getQuarter(18));


/* ========================================================================================================================================================

======================================================================================================================================================== */

function checkSeason(season) {
    let result;

    switch (season) {
        case 1:
            result = "winter";
            break;
        case 2:
            result = "spring";
            break;
        case 3:
            result = "summer";
            break;
        case 4:
            result = "autumn";
            break;
        default:
            result = "Not find this season";
    }

    return result;
}

console.log(checkSeason(2));

/* ========================================================================================================================================================

======================================================================================================================================================== */

function logNumbers(min, max) {
    let total = 0;
    for (let i = max; i >= min; i--) {
        console.log(i);

        if (i % 2 === 0) {
            total += i;
        }
    }
    return total;
}

console.log(logNumbers(2, 7));

/* ========================================================================================================================================================

======================================================================================================================================================== */

function fizzBuzz(num) {
    if (!(num % 3) && !(num % 5)) {
        return "fizzbuzz"
    } else if (!(num % 3)) {
        return "fizz"
    } else if (!(num % 5)) {
        return "buzz";
    } else {
        return "Number is not valid"
    }
}

console.log(fizzBuzz(15));

/* ========================================================================================================================================================

======================================================================================================================================================== */

// function checkUser () {
//     const userRule = prompt("Your login");

//     if (userRule === "Admin") {
//         const userPassword = prompt("Your password");

//         if(userPassword === "I am boss") {
//             return "Good day!";
//         } else {
//             return "Wrong password";
//         }

//     } else if (!userRule) {
//         return "Canselled"
//     } else {
//         return "I don't know you"
//     }
// }

// console.log(checkUser());


/* ========================================================================================================================================================

======================================================================================================================================================== */

// function getTotalSum() {
//     let inputValue = prompt("Enter number");
//     let total = 0;

//     while (inputValue) {
//         total += Number(inputValue);
//         inputValue = prompt("Enter number");
//     }

//     alert(`Suma ${total}`);
// }
// getTotalSum()

