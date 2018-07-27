var peoples = [{
    name: "Ivan",
    age: 20,
    lastName: "Ivanov"
}, {
    name: "Petr",
    age: 45,
    lastName: "Petrov"
}, {
    name: "Maria",
    age: 26,
    lastName: "Ivanova"
}, {
    name: "Fedor",
    age: 54,
    lastName: "Fedorov"
}, {
    name: "Marsim",
    age: 32,
    lastName: "Viktorov"
}, {
    name: "Tatiana",
    age: 35,
    lastName: "Viktorova"
}, {
    name: "Pavel",
    age: 28,
    lastName: "Ivanov"
}, {
    name: "Anna",
    age: 27,
    lastName: "Vladimirova"
}, {
    name: "Aleksandr",
    age: 36,
    lastName: "Borisov"
}, {
    name: "Alla",
    age: 24,
    lastName: "Nikolaeva"
}];

var ages = _.pluck(peoples, "age");
var averageAge = _.reduce(ages, function (memo, num) {
    return memo + num;
}, 0) / ages.length;

console.log("средний возраст всех людей в списке:");
console.log(averageAge);

var sortedPeople = _.chain(peoples)
    .filter(function (p) {
        return p.age >= 20 && p.age <= 30;
    })
    .sortBy("age")
    .value();

console.log("Отсортированный список людей от 20 до 30:");
console.log(sortedPeople);

_.each(peoples, function (peoples) {
    peoples.fullName = peoples.name + " "+ peoples.lastName;
});

console.log("список людей с полем fullName:");
console.log(peoples);