
let namme = ["ali","reza","khosro","mamad","sara","nazgol","react"];
let number = [1,3,4,5,6,7,8,956,345,23413,112,3,434,5,56,4];

number.sort(function (x,y){
    console.log(x,y);
    return x-y;
})

console.log(number);