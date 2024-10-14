/* ========================================================================================================================================================
Функція makeMessage приймає один параметр ім'я піци, що доставляється, pizzaName та 
повертає рядок з повідомленням клієнту.

Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) 
колбек-функцію і повертала результат її виклику. Функції deliverPizza або makePizza будуть 
передаватися як колбек для makeMessage і очікувати аргументом ім'я готової піци, що доставляється.
======================================================================================================================================================== */

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

/* ========================================================================================================================================================
Функція makePizza має два параметри: pizzaName - ім'я піци та callback - колбек-функцію. 
Під час виконання, makePizza викликає цей колбек, передаючи йому pizzaName як аргумент.

Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом 
інлайн колбек-функцію eatPizza(pizzaName). Колбек eatPizza логує рядок "Eating pizza <назва піци>", 
де <назва піци> це значення параметра pizzaName.
======================================================================================================================================================== */

function makePizza(pizzaName, callback) {
    console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
    callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
    console.log(`Delivering pizza ${pizzaName}`);
});

makePizza("Ultracheese", function eatPizza(pizzaName) {
    console.log(`Eating pizza ${pizzaName}`);

});

/* ========================================================================================================================================================
Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, 
і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.

Доповни виклик метода forEach, передавши йому колбек-функцію, яка на кожній ітерації додає до totalPrice значення поточного елемента масива orderedItems.
======================================================================================================================================================== */

function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;

    orderedItems.forEach(function (num) {
        totalPrice += num;
    });

    return totalPrice;
}

console.log(calculateTotalPrice([164, 48, 291]));


/* ========================================================================================================================================================
Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers 
і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, 
які більші за значення другого параметра числа value. Якщо таких значень не буде знайдено, 
функція повертає порожній масив.

Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
======================================================================================================================================================== */

const filterArray = (numbers, value) => {
    const arr = [];
    numbers.forEach((num) => {
        if (num > value) {
            arr.push(num);
        }
    })

    return arr;
}

console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([1, 2, 3, 4, 5], 5));

/* ========================================================================================================================================================

======================================================================================================================================================== */

function changeEven(numbers, value) {
    const newArr = [];

    numbers.forEach(num => {
        if (!(num % 2)) {
            newArr.push(num + value);
        } else {
            newArr.push(num);
        }
    })

    return newArr;
}

console.log(changeEven([1, 2, 3, 4, 5], 10));


/* ========================================================================================================================================================
В масиві planets зберігаються назви планет. Доповни код таким чином, щоб 
у змінній planetsLengths вийшов масив, що буде складатися з довжин назв 
кожної планети з масиву planets. Обов'язково використовуй метод map().
======================================================================================================================================================== */

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets.map(planet =>
    planet.length
);

console.log(planetsLengths);











/* ========================================================================================================================================================
BOOKS
======================================================================================================================================================== */

const books = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
    },
    {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        rating: 8.51,
    },
    {
        title: "The Dream of a Ridiculous Man",
        author: "Fyodor Dostoevsky",
        rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const titles = books.map(book => book.title);

console.log(titles);

/* ========================================================================================================================================================
Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, 
author, rating. Використовуючи метод filter(), доповни код таким чином, щоб:

У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший 
за або дорівнює значенню змінної MIN_RATING.
У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), 
яке збігається зі значенням у змінній AUTHOR.
======================================================================================================================================================== */


const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);

console.log(topRatedBooks);
console.log(booksByAuthor);

/* ========================================================================================================================================================
Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating.

Використовуючи метод find(), доповни код таким чином, щоб:

У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.
======================================================================================================================================================== */

const BOOK_TITLE = "The Dream of a Ridiculous Man";

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);

console.log(bookWithTitle);
console.log(bookByAuthor);

/* ========================================================================================================================================================
Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.

Доповни код таким чином, щоб:

У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.
======================================================================================================================================================== */

const sortedByAuthorName = books.toSorted((firstAutor, secondAutor) =>
    firstAutor.author.localeCompare(secondAutor.author));

const sortedByReversedAuthorName = books.toSorted((firstAutor, secondAutor) =>
    secondAutor.author.localeCompare(firstAutor.author));

const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);

const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);

console.log(sortedByAuthorName);
console.log(sortedByReversedAuthorName);
console.log(sortedByAscendingRating);
console.log(sortedByDescentingRating);

/* ========================================================================================================================================================
Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному 
порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING. Використовуй ланцюжок методів.
======================================================================================================================================================== */

const MIN_BOOK_RATING = 8;

const names = books
    .filter(book => book.rating > MIN_BOOK_RATING)
    .map(book => book.author)
    .toSorted((firstAutor, secondAutor) => firstAutor.localeCompare(secondAutor));

console.log(names);















/* ========================================================================================================================================================
USERS
======================================================================================================================================================== */

const getUserEmails = (users) => {
    return users.map(user => user.email);
};

const users = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        skills: ["ipsum", "lorem"],
        gender: "male",
        age: 37,
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
        gender: "female",
        age: 34,
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        skills: ["nulla", "anim", "proident", "ipsum", "elit"],
        gender: "male",
        age: 24,
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        skills: ["adipisicing", "irure", "velit"],
        gender: "female",
        age: 21,
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        skills: ["ex", "culpa", "nostrud"],
        gender: "male",
        age: 27,
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        skills: ["non", "amet", "ipsum"],
        gender: "male",
        age: 38,
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        skills: ["lorem", "veniam", "culpa"],
        gender: "female",
        age: 39,
    },
];

console.log(getUserEmails(users));

/* ========================================================================================================================================================

======================================================================================================================================================== */

const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "brown"));

/* ========================================================================================================================================================
Доповни код функції getUsersWithAge(users, minAge, maxAge), щоб повернути масив користувачів, 
вік (збережений у властивості age) яких потрапляє у заданий діапазон від minAge до maxAge.

Поради:

Використай метод filter() для створення нового масиву, в якому зберігаються тільки елементи, 
які задовольняють певну умову.
Використай оператори >= (більше або дорівнює) та <= (менше або дорівнює), щоб відфільтрувати 
користувачів, вік яких точно потрапляє у діапазон між мінімальним minAge та максимальним maxAge значеннями.
======================================================================================================================================================== */

const getUsersWithAge = (users, minAge, maxAge) => {
    return users.filter(user => user.age >= minAge && user.age <= maxAge);
};

console.log(getUsersWithAge(users, 20, 30));

/* ========================================================================================================================================================
Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача, 
пошта якого (властивість email) збігається зі значенням другого параметра email.
======================================================================================================================================================== */

const getUserWithEmail = (users, email) => {
    return users.find((user) => user.email === email);
};

console.log(getUserWithEmail(users, "elmahead@omatom.com"));

/* ========================================================================================================================================================
Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла, 
чи всі користувачі зараз активні (властивість isActive) і повертала true або false.
======================================================================================================================================================== */

const isEveryUserActive = (users) => {
    return users.every(user => user.isActive)
};

console.log(isEveryUserActive(users));

/* ========================================================================================================================================================
Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність 
хоча б одного активного користувача (властивість isActive) і повертала true або false.
======================================================================================================================================================== */

const isAnyUserActive = (users) => {
    return users.some(user => user.isActive)
};

console.log(isAnyUserActive(users));

/* ========================================================================================================================================================
Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і повертала 
суму всіх коштів (властивість balance), які зберігають користувачі з масиву users.
======================================================================================================================================================== */

const calculateTotalBalance = (users) => {
    return users.reduce((total, user) => {
        return total += user.balance;
    }, 0);
};

console.log(calculateTotalBalance(users));













/* ========================================================================================================================================================
Доповни код так, щоб у змінній evenNumbers був масив парних чисел із масиву 
numbers, а у змінній oddNumbers — масив непарних. Обов'язково використовуй метод filter()
======================================================================================================================================================== */

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(num => !(num % 2));
const oddNumbers = numbers.filter(num => num % 2);

console.log(evenNumbers);
console.log(oddNumbers);

/* ========================================================================================================================================================
У змінній players зберігається масив об'єктів, кожен з яких має властивості name, playtime та gamesPlayed.

Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, 
і отримати загальну суму цих значень часу у змінній totalAveragePlaytimePerGame. Розрахувати 
час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).
======================================================================================================================================================== */

const players = [
    { name: "Mango", playtime: 1270, gamesPlayed: 4 },
    { name: "Poly", playtime: 469, gamesPlayed: 2 },
    { name: "Ajax", playtime: 690, gamesPlayed: 3 },
    { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((total, user) => {
    const timeOnePlay = user.playtime / user.gamesPlayed;
    return total += timeOnePlay;
}, 0);

console.log(totalAveragePlaytimePerGame);

/* ========================================================================================================================================================
Змінна authors - це масив рядків, авторів книг.

Онлайн бібліотеці необхідно відображати книги, відсортовані за автором в алфавітному і в зворотному алфавітному 
порядку. Доповни код таким чином, щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors, відсортована 
за алфавітом, а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку.
======================================================================================================================================================== */

const authors = [
    "Tanith Lee",
    "Bernard Cornwell",
    "Robert Sheckley",
    "Fyodor Dostoevsky",
    "Howard Lovecraft",
];

const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));

const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));

console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder);

/* ========================================================================================================================================================

======================================================================================================================================================== */

const students = [
    { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
    { name: "Poly", score: 59, courses: ["science", "mathematics"] },
    { name: "Ajax", score: 37, courses: ["physics", "biology"] },
    { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];

const uniqueSortedCourses = students
    .flatMap(student => student.courses)
    .filter((course, index, array) => array.indexOf(course) === index)
    .toSorted((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]




