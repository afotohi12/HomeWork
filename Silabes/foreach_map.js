



// // ///sort
let namme = ["ali","reza","khosro","mamad","sara","nazgol","react"];
let number = [1,3,4,5,6,7,8,956,345,23413,112,3,434,5,56,4];


var newnumber = [];

console.time();
//#return nadarad 
number.forEach(function (item,index,array){
    //array[index]=item * 2;
    newnumber.push(item*10);
})

//# return darad 
/*let result = number.map(function (item,index,array){
    return item*10;
})
*/

//# for folter in Array 
let result = number.filter(function (item,index,array){
    return item%2==0;
})

console.log(number);
console.log(result);

console.timeEnd();






