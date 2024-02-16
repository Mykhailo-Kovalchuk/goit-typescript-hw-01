// ТИПІЗАЦІЯ ПРОСТИХ ТИПІВ ДАНИХ
// явна типізація. через двокрпку прописуємо явно який тип даних очікуємо
let total: number = 100;
let firstName: string = "Bobo";
let isActive: boolean = false;

let empty: null = null;
let undef: undefined = undefined; 

// неявна типізація. через двокрпку НЕ прописуємо явно який тип даних очікуємо, але TS під капотом собі сам присвоїть правильний тип (розкоментовуючи бачимо помилку)
let age = 10;
// age = "123"
// Неявна типізація на всі 100% надійна, тому краще завжи прописувати явно 


// ТИПІЗАЦІЯ СКЛАДНИХ ТИПІВ ДАНИХ
// Масиви
const numbers = [1, 2, 3, 4, "50", false];    // очікуємо масив чисел (якщо явно не вказати типізацію і передати різні типи даних, ts не зрозуміє що там повинно бути)
// const numbers: number[] = [1, 2, 3, 4, "50", false];  // розкоментуй і буде помилка
const numbersArr: number[] = [1, 2, 3, 4, 5] // тепер все гуд.
// якщо є помилка з типізацією методи масиву не спрацюють.
// numbersArr.push('12'); // очікуючи рядок ми не можемо додати його в масив чисел // розкоментуй і буде помилка

// Об`єкти
// для роботи з об`єктом використовуємо type

const user = {  // TS Не розуміє як типізувати дані в такому складному типі даних як об`єкт, тому що тут якраз можлива їх велика кількість. Треба явно вказувати що очікує кожен ключ.
    name: "Bob",
    age: 12
}

const userTS: {name: string, age: number } = { // Ось так правильно
    name: "Bobby",
    age: 20
}
// userTS.name = 123; // при перевизначенні на неправильний тип даних буде падати помилка.
// userTS.age = "Eleven"

// const userTS: {name: string, age: number } = {.......... } - не зручно читати типізацію яку задаємо при оголошенні змінної. 
// Тому типи даних переважно виносяться окремо - оголошується така змінна не через const/let, а через type
type User = {
name: string,
age: number} // Також моджемо довавати логічний оператор АБО щоб ключ приймав 2 значиення, типу так ( age: number | string)

const userTS2: User = { // запис в результаті виглядає ось так 
    name: "Ann",
    age: 30
}

// нові типи даних any i unknown
// додаємо їх якщо не знаємо який тип даних має бути. (Фактично він вимикає типізацію)
let footSize: any = 10;
footSize = "M";
footSize = "EU - 4";

let lastName: unknown = "Smith";
lastName = 12;
// lastName.toFixed();       // але в цьому випадку TS не знаю який тип даних, а тому не знає чи може використовувати специфічні методи
// тут він не впевнений що це число, а тому підсвічує помилку. з toUpperCase() буде теж саме, бо це метод рякду. з map() - аналогічно, бо метод масиву.


// Enum - конструкція яка дає можливіть створити набір іменованих констант/ 
// щось типу //      
type size = "small" | "medium" | "large";  // - це називається unionTupe
// але enum через запис такий 
enum Sizes { // виглядає як об`єкт але без дорівнює і двокрапки ключ:значення (там якраз через дорівнює). 
    small = 'small',
    medium = "medium",
    large = "large",
}
const button: size = "large";
const button2: Sizes = Sizes.medium; // Краще так, бо тоді менша ймовірність припущення помилок.


// функції - треба робити типізацію як аргументів так і результату (return)
function add(num1: number, num2: number):string {  // передаємо числа в аргумента, але очікуємо рядок (тому string ставимо поза дужками)
    return `${num1} + ${num2}`;
  }  
  add(1, 1);
// якщо функція нічого не повертає тоді не приписуємо типізації типу, додаємо :void до дужок - тоді TS розуміє що функція щось робить, але нічого не повертає
function add2(num1: number, num2: number):void { 
    console.log(`${num1} + ${num2}`);
  }  
  add2(1, 1);

  // Складніша функція в яку передаємо об`єкт (як частіше всього і є)
type UserT = {
    name: string;
}

  function great(user2: UserT):void {
    console.log(`Hello ${user2.name}`)
  }

  //
  type UserConstr = {
    name: string;
    age: number;
    hobby: string;
}
  function userConstruction(name: string, age: number, hobby: string):UserConstr {
    return {name, age, hobby}
  }

  // типізуємо об`єкт
type Car = {
    color: string,
    price: number,
    currency: string,
    start: (color: string) => {}
}

  const Car = {
    color: 'red',
    price: 1000,
    currency: "UAH",
    start(color: string) {////////////////
        console.log('start' + this.color)
    }
  }

  // опціональні параметри в типізації (optional params in type)
type UserInterface = { // можемо створити 2 типи даних, для юзера і для адміна окремо і все працюватиме. Але це додатковий код = додаткоий час = додатковий ресурс.
    name: string,      // Тому можемо просто зробити один тип де передамо всі поля, а ті що необов`язкові зазничимо окремо, щоб TS не лаявся. - це і є наші опціональні поля.
    age: number,       // Зазначаємо їх так само логічною перевіркою "?" (як робили в масивах. array?.map(() => {.......})
    role?: string     // Таким чином TS буде бачити, що якщо поле присутнє, то в нього буде тип даних, якщо ні то ні, і це не буде помилкою.
}

const userData: UserInterface = {
    name: "Bobby",
    age: 12
};

const adminData: UserInterface = {
    name: "John",
    age: 23,
    role: "Admin"
}


// В реакті це все що вище використовується безперервно.

