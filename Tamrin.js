

// //320 to 740
// var sum_array = [];
// var summ = 0;
// for (k = 320; k <= 740; k++) {
//     sum_array.push(k);
// }
// sum_array.map(function (item) {
//     summ += item;
// });
// console.log(summ);

// // ///sort
// var namme = ["ali","reza","khosro","mamad","sara","nazgol","react"];
// namme.sort();
// console.log(namme);


// // ///reduce 
// var redu = sum_array.reduce(function(sum,item){
//     if(item%7==0){
//       return sum+1;
//     }else{ 
//         return sum;
//     };
// },0)
// console.log(redu);
////////END 2 Seasion
////////////////////////////////////////////////////////////////////////////////####Start

// for (var i = 1; i <= 100; i++) {

//     for (var j = 2; j <= i; j++) {
//         var Divid  = i % j;
//         if (Divid == 0) {
//             numbers.push(i);
//             break; 
//         }else if(Divid!=0){
//              if (i % Divid != 0){
//                    Aval.push(i);
//                    break;
//              };
//         };
//     };

// };


// ///aval 

let Aval = [],numbers = [];
for (var i = 1; i <= 100; i++) {
    numbers.push(i);
};

numbers.forEach(item => {
    if(item%2 != 0){
        Aval.push(item);
    }
});

 
console.log(numbers);
console.log(Aval);


