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

    for(const key of suma) {
        totalSalary += key;
    }

    return totalSalary;
}

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));



