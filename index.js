var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.sayHello = function () {
        console.log("Hello ! My name is ".concat(this.name, ", and I am ").concat(this.age, " years old."));
    };
    return Animal;
}());
var dog = new Animal("Buddy", 3);
dog.sayHello();
var square = function (num) { return num * num; };
console.log(square(3));
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello ".concat(this.name, "!"));
    };
    return Person;
}());
var numbers = [1, 2, 3, 4, 5];
var sum = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, curr) { return acc + curr; }, 0);
};
console.log(sum.apply(void 0, numbers));
