let person1 = {
    name: 'Thomas',
    sayHello: function () { console.log(`Hello! My name is ${this.name}`) }
}
person1.sayHello();

let person2 = {
    name: 'Ives',
    sayHello: function () { console.log(`Hello! My name is ${this.name}`) }
}
person2.sayHello();

let person3 = {
    name: 'Jeff',
    sayHello: function () { console.log(`Hello! My name is ${this.name}`) }
}
person3.sayHello();

let person4 = {
    name: 'Carl',
    sayHello: function () { console.log(`Hello! My name is ${this.name}`) }
}
person4.sayHello();

let person5 = {
    name: 'Kenny',
    sayHello: function () { console.log(`Hello! My name is ${this.name}`) }
}
person5.sayHello();


//ES5 

// function Person(name, city, age) {
//     this.name = name;
//     this.city = city;
//     this.age = age;
// }
// Person.prototype.greeting = function () {
//     console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}`);
// };

// let p1 = new Person('Thomas', 'Dallas', '32');
// p1.greeting();
// let p2 = new Person('Ives', 'Clifton', '30');
// p2.greeting();
// let p3 = new Person('Justin', 'San Francisco', '31');
// p3.greeting();
// let p4 = new Person('Kenny', 'Nashville', '26');
// p4.greeting();
// let p5 = new Person('Matt', 'Japan', '25');
// p5.greeting();

//ES6

class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    greeting() {
        console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}`);
    }
}

let p1 = new Person('Thomas', 'Dallas', '32');
p1.greeting();
let p2 = new Person('Ives', 'Clifton', '30');
p2.greeting();
let p3 = new Person('Justin', 'San Francisco', '31');
p3.greeting();
let p4 = new Person('Kenny', 'Nashville', '26');
p4.greeting();
let p5 = new Person('Matt', 'Japan', '25');
p5.greeting();


class Vehicle {
    constructor(manu, wheels, type) {
        this.manu = manu;
        this.wheels = wheels;
        this.type = type;
    }
    aboutVehicle() {
        console.log(`${this.manu} ${this.type}, ${this.wheels} wheels.`)
    }
}

class Truck extends Vehicle {
    constructor(manu, wheels, type, doorNum, truckBed) {
        super(manu, wheels, type);
        this.doorNum = doorNum;
        this.truckBed = truckBed;
    }
    aboutVehicle() {
        console.log(`${this.manu} ${this.type}, ${this.wheels} wheels. ${this.doorNum} doors, Truckbed: ${this.truckBed}`)
    }
}

class Sedan extends Vehicle {
    constructor(manu, wheels, type, doorNum, size, mpg) {
        super(manu, wheels, type);
        this.doorNum = doorNum;
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`${this.manu} ${this.type}, ${this.wheels} wheels. ${this.doorNum} doors, ${this.size} size and ${this.mpg} mpg.`)
    }
}

class Motorcycle extends Vehicle {
    constructor(manu, wheels, type, handlebars, doors) {
        super(manu, type);
        this.handlebars = handlebars;
        this.doors = doors;

    }
    aboutVehicle() {
        console.log(`${this.manu} ${this.type}, ${this.wheels} wheels. Doors: ${this.doors}, handlebars: ${this.handlebars}`)
    }
}

v1 = new Vehicle('Subaru', '4', 'Forester')
v1.aboutVehicle();

t1 = new Truck('Dodge', '4', 'Ram', '2', 'No')
t1.aboutVehicle();

s1 = new Sedan('Honda', '4', 'Civic', '2', 'Intermediate', '25')