"use strict";
// ТИПІЗАЦІЯ ПРОСТИХ ТИПІВ ДАНИХ
// явна типізація. через двокрпку прописуємо явно який тип даних очікуємо
let total = 100;
let firstName = "Bobo";
let isActive = false;
let empty = null;
let undef = undefined;
// неявна типізація. через двокрпку НЕ прописуємо явно який тип даних очікуємо, але TS під капотом собі сам присвоїть правильний тип (розкоментовуючи бачимо помилку)
let age = 10;
// age = "123"
// Неявна типізація на всі 100% надійна, тому краще завжи прописувати явно 
// ТИПІЗАЦІЯ СКЛАДНИХ ТИПІВ ДАНИХ
// Масиви
const numbers = [1, 2, 3, 4, "50", false]; // очікуємо масив чисел (якщо явно не вказати типізацію і передати різні типи даних, ts не зрозуміє що там повинно бути)
// const numbers: number[] = [1, 2, 3, 4, "50", false];  // розкоментуй і буде помилка
const numbersArr = [1, 2, 3, 4, 5]; // тепер все гуд.
// якщо є помилка з типізацією методи масиву не спрацюють.
// numbersArr.push('12'); // очікуючи рядок ми не можемо додати його в масив чисел // розкоментуй і буде помилка
// Об`єкти
// для роботи з об`єктом використовуємо type
const user = {
    name: "Bob",
    age: 12
};
const userTS = {
    name: "Bobby",
    age: 20
};
const userTS2 = {
    name: "Ann",
    age: 30
};
// нові типи даних any i unknown
// додаємо їх якщо не знаємо який тип даних має бути. (Фактично він вимикає типізацію)
let footSize = 10;
footSize = "M";
footSize = "EU - 4";
let lastName = "Smith";
lastName = 12;
// але enum через запис такий 
var Sizes;
(function (Sizes) {
    Sizes["small"] = "small";
    Sizes["medium"] = "medium";
    Sizes["large"] = "large";
})(Sizes || (Sizes = {}));
const button = "large";
const button2 = Sizes.medium; // Краще так, бо тоді менша ймовірність припущення помилок.
// функції - треба робити типізацію як аргументів так і результату (return)
function add(num1, num2) {
    return `${num1} + ${num2}`;
}
add(1, 1);
// якщо функція нічого не повертає тоді не приписуємо типізації типу, додаємо :void до дужок - тоді TS розуміє що функція щось робить, але нічого не повертає
function add2(num1, num2) {
    console.log(`${num1} + ${num2}`);
}
add2(1, 1);
function great(user2) {
    console.log(`Hello ${user2.name}`);
}
function userConstruction(name, age, hobby) {
    return { name, age, hobby };
}
const Car = {
    color: 'red',
    price: 1000,
    currency: "UAH",
    start(color) {
        console.log('start' + this.color);
    }
};
const userData = {
    name: "Bobby",
    age: 12
};
const adminData = {
    name: "John",
    age: 23,
    role: "Admin"
};
// В реакті це все що вище використовується безперервно.
//# sourceMappingURL=index.js.map