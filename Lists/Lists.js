var list = [1, 3, 7, 8, 2, 5, 10, 17, 24];
list.sort(function (e1, e2) {
    return (e2 - e1);
});
console.log("отсортированный по убыванию массив:");
console.log(list.join(","));

var firsSlice = list.slice(0, 5);
var secondSlice = list.slice(-5);
console.log("подмассив из первых пяти элементов:");
console.log(firsSlice.join(","));
console.log("подмассив из последних пяти элементов:");
console.log(secondSlice.join(","));

var sum = list.reduce(function (accumulator, currentValue) {
    if ((accumulator + currentValue) % 2 === 0) {
        return (accumulator + currentValue);
    }
    return accumulator;

});

console.log("сумма четных чисел массива:");
console.log(sum);


var lastList = [];

for (var j = 1; j <= 100; ++j) {
    lastList.push(j);
}

var temp = lastList.filter(function (value) {
    return value % 2 === 0;
});

var listSquares = temp.map(function (val) {
    return Math.pow(val, 2);
});

console.log("список чисел от 1 до 100:");
console.log(lastList.join(","));
console.log("список квадратов чётных чисел от 1 до 100:");
console.log(listSquares.join(","));