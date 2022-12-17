//320 to 740
var sum_array = [];
var summ = 0;
for (k = 320; k <= 740; k++) {
    sum_array.push(k);
}
sum_array.map(function (item) {
    summ += item;
});
console.log(summ);