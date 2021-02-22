// interface Human {
//     name: string;
//     age: number;
//     gender: string;
// }

class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const tom = new Human("tom", 15, "male");
const person = {
    name: "anonymous",
    age: 99,
    gender: "male",
    dummpy: "dummy"
}

// const sayHi = (name: string, age: number, gender: string): string => {
//     return `Hello ${name}, you are ${age}, you are a ${gender}`;
// }

// console.log(sayHi("anonymous", 199, "male"));

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

console.log(sayHi(person));
console.log(sayHi(tom));


export { };