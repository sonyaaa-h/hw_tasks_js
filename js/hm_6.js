/* ========================================================================================================================================================
Виконай рефакторинг класу Car. Додатково до приватної властивості #brand 
зроби приватними властивості model і price. Стандартизуй публічний інтерфейс класу, 
замінивши вже оголошені методи на геттери та сеттери brand, model і price, для взаємодії 
з приватними властивостями.
======================================================================================================================================================== */


// class Car {
//     #brand;
//     #model;
//     #price;

//     constructor(params) {
//         this.#brand = params.brand;
//         this.#model = params.model;
//         this.#price = params.price;
//     }

//     get brand() {
//         return this.#brand;
//     }

//     set brand(newBrand) {
//         this.#brand = newBrand;
//     }

//     get model() {
//         return this.#model;
//     }

//     set model(newModel) {
//         this.#model = newModel;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         this.#price = newPrice;
//     }
// }

/* ========================================================================================================================================================

======================================================================================================================================================== */

// class Car {
//     static maxPrice = 50000;

//     #price;

//     constructor(params) {
//         this.#price = params.price;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         if (newPrice > Car.maxPrice) {
//             return this.#price;
//         } else {
//             return this.#price = newPrice;
//         }
//     }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


/* ========================================================================================================================================================
Додай класу Car публічний статичний метод checkPrice(price), що приймає ціну автомобіля. 
Метод повинен порівняти значення параметра price і приватної статичної властивості maxPrice.

Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, 
як буде використовуватися метод checkPrice(price).
======================================================================================================================================================== */

// class Car {
//     static #maxPrice = 50000;

//     static checkPrice(price) {
//         if (price > this.#maxPrice) {
//             return "Error! Price exceeds the maximum";
//         } else {
//             return "Success! Price is within acceptable limits";
//         }
//     }

//     constructor(params) {
//         this.price = params.price;
//     }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


/* ========================================================================================================================================================
Додай класу Admin метод constructor, який приймає один параметр params- об'єкт налаштувань 
з двома властивостями email і access. Додай класу Admin публічну властивість access, значення 
якої буде передаватися під час виклику конструктора.

Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію екземпляра під оголошенням класу.
======================================================================================================================================================== */

// class User {
//     #email;

//     constructor(email) {
//         this.#email = email;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// class Admin extends User {
//     access;

//     constructor({email, access}) {
//         super(email);
//         this.access = access;
//     }

//     static role = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };
// }

// const mango = new Admin({
//     email: "mango@mail.com",
//     access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"


/* ========================================================================================================================================================
Додай класу Admin наступні властивості і методи.

Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.
Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.
======================================================================================================================================================== */

// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }
// class Admin extends User {
//     blacklistedEmails = [];

//     static role = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };

//     constructor(params) {
//         super(params.email);
//         this.access = params.access;
//     }

//     blacklist(email) {
//         this.blacklistedEmails.push(email);
//     }

//     isBlacklisted(email) {
//         return this.blacklistedEmails.includes(email);
//     }
// }

// const mango = new Admin({
//     email: "mango@mail.com",
//     access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true


