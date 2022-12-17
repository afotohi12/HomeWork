



// // ///sort
let namme = ["ali","reza","khosro","mamad","sara","nazgol","react"];
let number = [1,3,4,5,6,7,8,956,345,23413,112,3,434,5,56,4];
//namme.sort();
//console.log(namme);

//#delete End Of Array 
//let result = namme.pop();

//#Add End of Arrey
//let result = namme.push("Mania");

//#add First of Array 
//let result = namme.unshift("Mania");


//#delete first of Array 
//let result = namme.shift();

//#jam 2 Array 
//let result = number.concat(namme);

//#search in Array 
//let result = number.includes(345);

//#index of number in Array 
//let result = number.indexOf(345);

//#join all on Array 
//let result = namme.join("");
//#seprator in Array 
//let result = number.join("*");

//#cut between index number 2 start 4 end
//let result = number.slice(2,4);

//#namayesh az index 2 ta 3 ya 5(3+2)
//let result = number.splice(2,3);
//let result = number.splice(2,3+2);

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


function ForEach(array,callback){
    
};

console.log(number);
console.log(result);

console.timeEnd();






