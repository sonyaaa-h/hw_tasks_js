/* ========================================================================================================================================================
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
    [emailInputName]: "henry.carter@aptmail.com",
    [passwordInputName]: "jqueryismyjam",
};

console.log(credentials.email);
console.log(credentials.password);
======================================================================================================================================================== */



/* ========================================================================================================================================================
const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
};

const keys = [];
const values = [];

for (const key in apartment) {
    keys.push(key);
    values.push(apartment[key]);
    
    
}

console.log(keys);
console.log(values);

======================================================================================================================================================== */


/* ========================================================================================================================================================
const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
};

const values = [];
const keys = Object.keys(apartment);

console.log(keys);

for(const key of keys) {
    values.push(apartment[key]);
}

console.log(values);
======================================================================================================================================================== */

function countProps(object) {
    const values = [];
    const keys = Object.keys(object);

    for (const key of keys) {
        values.push(object[key]);
    }

    return values.length;
}

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));


/* ========================================================================================================================================================
Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра. 
Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.

Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.

Поради:

Ініціалізуй змінну totalSalary зі значенням 0, яка буде відповідати за загальну суму зарплат усіх співробітників
Використай метод Object.values() для отримання значень (зарплат) з об'єкта salaries
Пройдись по отриманих значеннях за допомогою циклу та додай кожне значення до змінної totalSalary.
Поверни totalSalary як результат

======================================================================================================================================================== */

function countTotalSalary(salaries) {
    let totalSalary = 0;

    const suma = Object.values(salaries);

    for (const key of suma) {
        totalSalary += key;
    }

    return totalSalary;
}

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

/* ========================================================================================================================================================
const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const key of colors) {
    hexColors.push(key.hex);
    rgbColors.push(key.rgb);
}

console.log(hexColors);
console.log(rgbColors);
======================================================================================================================================================== */

/* ========================================================================================================================================================
Функція getProductPrice(productName) приймає один параметр productName - 
назва продукту. Функція містить масив об'єктів products з такими властивостями,
як name — ім'я товару, price — ціна і quantity — кількість.

Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям 
(властивість name) в масиві products і повертала його ціну (властивість price).
Якщо продукт з такою назвою не знайдений, функція повинна повертати null.
======================================================================================================================================================== */

function getProductPrice(productName) {
    const products = [
        { name: "Radar", price: 1300, quantity: 4 },
        { name: "Scanner", price: 2700, quantity: 3 },
        { name: "Droid", price: 400, quantity: 7 },
        { name: "Grip", price: 1200, quantity: 9 },
    ];

    for (const name of products) {
        if (name.name === productName) {
            return name.price;
        }
    }

    return null;
}

console.log(getProductPrice("Radar"));
console.log(getProductPrice("Grip"));

/* ========================================================================================================================================================
Напиши функцію getAllPropValues(propName), яка приймає один параметр propName 
- ім'я (ключ) властивості. Функція повинна повернути масив усіх значень властивості
з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні 
властивості з таким ім'ям, функція повинна повернути порожній масив.
======================================================================================================================================================== */

function getAllPropValues(propName) {
    const products = [
        { name: "Radar", price: 1300, quantity: 4 },
        { name: "Scanner", price: 2700, quantity: 3 },
        { name: "Droid", price: 400, quantity: 7 },
        { name: "Grip", price: 1200, quantity: 9 },
    ];

    const properties = [];

    for (const prop of products) {
        if (prop[propName] !== undefined) {
            properties.push(prop[propName]);
        }
    }

    return properties;
}

console.log(getAllPropValues("name"));
console.log(getAllPropValues("category"));

/* ========================================================================================================================================================
Функція calculateTotalPrice(productName) приймає один параметр productName- 
назва товару. Функція містить масив об'єктів products з такими властивостями, 
як name — ім'я товару, price — ціна і quantity — кількість.

Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

Якщо продукту з такою назвою немає, то функція повинна повертати рядок 
"Product <productName> not found!" , де <productName> — це ім'я товару.
======================================================================================================================================================== */

function calculateTotalPrice(productName) {
    const products = [
        { name: "Radar", price: 1300, quantity: 4 },
        { name: "Scanner", price: 2700, quantity: 3 },
        { name: "Droid", price: 400, quantity: 7 },
        { name: "Grip", price: 1200, quantity: 9 },
    ];

    for (const product of products) {
        if (productName === product.name) {
            return product.price * product.quantity;
        }
    }

    return `Product ${productName} not found!`;
}

console.log(calculateTotalPrice("Blaster"));
console.log(calculateTotalPrice("Grip"));

/* ========================================================================================================================================================
До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму
для ведення інвентарю. Програма має додавати, видаляти, шукати та оновлювати зілля.

Оголоси об'єкт atTheOldToad з наступними властивостями:

potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
getPotions() — метод, який повертає рядок "List of all available potions"
addPotion(potionName) — метод, який повертає рядок "Adding <potionName>", 
де potionName — це значення параметра potionName
======================================================================================================================================================== */




/* ========================================================================================================================================================
const atTheOldToad = {
    potions: [],
    getPotions () {
        return "List of all available potions";
    },
    addPotion(potionName) {
        return `Adding ${potionName}`;
    },
}
======================================================================================================================================================== */



/* ========================================================================================================================================================
const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Stone skin", price: 520 },
    ],
    getPotions() {
        return this.potions;
    },
    updatePotionName(oldName, newName) {
        for (const potion of this.potions) {
            if(potion.name === oldName) {
                potion.name = newName;
            }
            
        }
    },
};
======================================================================================================================================================== */

/* ========================================================================================================================================================
Використовуючи синтаксис залишкових параметрів, доповни код функції 
add() так, щоб вона приймала будь-яку кількість аргументів у параметр 
args і повертала їхню суму.
======================================================================================================================================================== */



function add(...args) {
    let total = 0;

    for(const item of args) {
        total += item;
    }
    return total;
}

console.log(add(12, 4, 11, 48));

/* ========================================================================================================================================================
Функція addOverNum() приймає довільну кількість аргументів чисел.

Доповни код функції таким чином, щоб вона обчислювала суму тільки тих аргументів, 
які більші за задане число. Це число завжди буде передано першим аргументом.

Для вирішення цього завдання тобі потрібно зробити наступне:

Перший параметр value повинен представляти задане число, а решта аргументів повинні бути зібрані за допомогою синтаксису (...args)
Усередині функції ініціалізуй змінну для зберігання загальної суми
Потім пройдись по кожному аргументу за допомогою циклу
Перевір, чи кожен аргумент більший за вказане число, і якщо так, додай його до загальної суми
На завершення поверни загальну суму
======================================================================================================================================================== */

function addOverNum(value, ...args) {
    let totalSum = 0;

    for(const number of args) {
        if( number > value) {
            totalSum += number;
        }
    }

    return totalSum;
}

console.log(addOverNum(15, 32, 6, 13, 19, 8));

/* ========================================================================================================================================================
Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores.

Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:

Властивість best має містити найбільше число з масиву scores
Властивість worst має містити найменше число з масиву scores.
Використовуй оператор (...spread) і методи Math.max() і Math.min().
======================================================================================================================================================== */

function getExtremeScores(scores) {
    const number = {
        best: Math.max(...scores),
        worst: Math.min(...scores),
    }

    return number;
}

console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));


