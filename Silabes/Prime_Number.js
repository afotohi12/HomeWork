
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


