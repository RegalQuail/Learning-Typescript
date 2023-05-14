class Animal {

    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public sayHello(): void {
        console.log(`Hello ! My name is ${this.name}, and I am ${this.age} years old.`);
    }


}

const dog = new Animal("Buddy", 3);
dog.sayHello();

const square = (num: number) => num * num;
console.log(square(3));

class Person {
    name: any;
    constructor(name: any) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}!`)
    }
}

const numbers = [1, 2, 3, 4, 5];
const sum = (...nums: number[]) => nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum(...numbers))
