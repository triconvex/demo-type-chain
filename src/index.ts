interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "anonymous",
    age: 99,
    gender: "male"
}

// const sayHi = (name: string, age: number, gender: string): string => {
//     return `Hello ${name}, you are ${age}, you are a ${gender}`;
// }

// console.log(sayHi("anonymous", 199, "male"));

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

console.log(sayHi(person));


export { };