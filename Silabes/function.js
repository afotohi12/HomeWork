//function 
function show(x=1, y=2, z=3) {
    return (x + y + z);
};
//console.log(show(2, 3, 4));

function avreg(){
    var x =0;
    return x;
}

console.log(avreg());
console.log(show());

//annonymous Function 
(function (){
    console.log("annonymous Function");
})()
//function
(function (x){
    console.log(x);
})("Alireza")
