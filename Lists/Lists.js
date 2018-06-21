var list = [1, 3, 7, 8, 2, 5, 10];
list.sort(function (e1, e2) {
    return (e2 - e1);
});
console.log("отсортированный по убыванию массив:");
console.log(list.join(","));

var firsSlice = list.slice(0, 5);
var secondSlice = list.slice(2);
console.log("подмассив из первых пяти элементов:");
console.log(firsSlice.join(","));
console.log("подмассив из последних пяти элементов:");
console.log(secondSlice.join(","));

var sum = 0;
for (var i = 0; i < list.length; ++i) {
    if (list[i] % 2 === 0) {
        sum += list[i];
    }
}
console.log("сумма четных чисел массива:");
console.log(sum);

var lastList = [];
var listSquares = [];
for (var j = 1; j <= 100; ++j) {
    lastList.push(j);
    if (j % 2 === 0) {
        listSquares.push(Math.pow(j, 2));
    }
}
console.log("список чисел от 1 до 100:");
console.log(lastList.join(","));
console.log("список квадратов четных чисел от 1 до 100:");
console.log(listSquares.join(","));