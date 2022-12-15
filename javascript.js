
let Title = document.getElementById('Title');
Title.style.color = 'red';
Title.style.fontSize = '40px';

let Table = document.getElementsByClassName('table');
Table[1].style.color = 'blue';


//class 2
//average
function avreg(x, y, z) {
    return ((x + y + z) / 3);
};
console.log(avreg(3, 4, 5));
//if
var a = 31;
if (a == 987) {
    console.log("20");
} else if (a == 30) {
    console.log("30")
} else { console.log("nothig") }
//switch
var num = 41;
switch (true) {
    case num >= 40: console.log(num);
        break;
    case num >= 30: console.log(";;;;30");
        break;
    case num >= 20: console.log(";;;;;30");
        break;
    default: console.log("Nothing");

}
//while
number = 5;
while (number < 10) {
    console.log("Hello Alireza");
    number++;
}

//for 
for (var i = 1; i <= 10; i++) {
    console.log(i);
    if (i == 7) {
        break;
    }
}

//do while 
var t = 5;
do {
    console.log("Do while");
    t++;
} while (t == 10)


//avrage arayy
avg_arr = [4, 5, 6];
function avg(a) {
    console.log((a[0] + a[1] + a[2]) / a.length);
}
avg(avg_arr);

//1 to 1000
// var sum = 0;
// for(var i=1;i<=1000;i++){
//     sum+=i;
// }
// console.log(sum);


//bakhsh paziri 7 
var s = 0;
for (var b = 0; b <= 1000; b++) {
    if (b % 7 == 0) {
        s++
    }
}
console.log(s);

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

///sort
var namme = ["ali","reza","khosro","mamad","sara","nazgol","react"];

namme.sort();
console.log(namme);


///reduce 
var redu = sum_array.reduce(function(sum,item){
    if(item%7==0){
      return sum+1;
    }else{ 
        return sum;
    };
},0)
console.log(redu);

////aval number 

// for(var i=1;i<=1000;i++){
//    if(i)
// }














