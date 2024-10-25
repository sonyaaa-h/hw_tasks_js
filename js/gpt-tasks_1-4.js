function manageInventory(products, operations) {
    operations.forEach(operation => {
        const productName = products.find(product => product.name === operation.name);

        if (productName) {
            if (operation.type === "add") {
                productName.quantity += operation.quantity;
            } else if (operation.type === "remove") {
                productName.quantity -= operation.quantity;
            }
        }

        if (productName.quantity < 0) {
            products.splice(products.indexOf(productName), 1);
        }
    })

    return products;

}

const products = [
    { name: "Apple", quantity: 50, price: 1.5 },
    { name: "Banana", quantity: 20, price: 0.9 },
    { name: "Orange", quantity: 30, price: 2.0 }
];

const operations = [
    { type: "add", name: "Apple", quantity: 10 },
    { type: "remove", name: "Banana", quantity: 5 },
    { type: "remove", name: "Orange", quantity: 35 }
];

console.log(manageInventory(products, operations));
// [{ name: "Apple", quantity: 60, price: 1.5 }, { name: "Banana", quantity: 15, price: 0.9 }]




/* ========================================================================================================================================================

======================================================================================================================================================== */



function calculateTotalCartValue(cart) {
    return cart.reduce((total, product) => {
        return total += product.price * product.quantity
    }, 0)
}

const cart = [
    { name: "Apple", price: 1.5, quantity: 4 },
    { name: "Banana", price: 0.9, quantity: 10 },
    { name: "Orange", price: 2, quantity: 3 }
];

console.log(calculateTotalCartValue(cart)); // 21


/* ========================================================================================================================================================

======================================================================================================================================================== */

function getHighScorers(students) {
    return students
        .filter(student => student.score >= 70)
        .map(nameStudent => nameStudent.name);
}

const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 60 },
    { name: "Charlie", score: 95 },
    { name: "Dave", score: 55 }
];

console.log(getHighScorers(students)); // ["Alice", "Charlie"]


/* ========================================================================================================================================================

======================================================================================================================================================== */

function capitalize(str) {
    if (!str) return "";

    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalize("sonya")); // "Hello world"

/* ========================================================================================================================================================

======================================================================================================================================================== */

function isPalindrome(str) {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}


console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false


/* ========================================================================================================================================================
for (let i = 1; i <= 100; i++) {
    if (!(i % 2)) {
        console.log(i);
        
    }
    
}
======================================================================================================================================================== */


function arraySum(arr) {
    return arr.reduce((total, num) => total += num, 0)
}

console.log(arraySum([1, 2, 7, 4])); // 10

/* ========================================================================================================================================================

======================================================================================================================================================== */

function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([1, 22, 3, -45, 5])); // 45

/* ========================================================================================================================================================

======================================================================================================================================================== */

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    getInfo: function () {
        return `Car: ${this.brand} ${this.model} (${this.year})`;
    }
};

console.log(car.getInfo()); // "Car: Toyota Corolla (2020)"
