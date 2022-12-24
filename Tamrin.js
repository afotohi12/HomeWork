



// // ///sort

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


// console.time();
// //#return nadarad 
// number.forEach(function (item,index,array){
//     //array[index]=item * 2;
//     newnumber.push(item*10);
// },0)

// //# return darad 
// /*let result = number.map(function (item,index,array){
//     return item*10;
// })
// */

// //# for filter in Array 
// let result = number.filter(function (item,index,array){
//     return item%2==0;
// })



// number.reduce(function (x,y,z,p){
//     console.log(x,y,z,p);
// })

// //console.log(number);
// //console.log(result);

// console.timeEnd();

// let User = ["ali", "reza", "khosro", "mamad", "sara", "nazgol", "react"];
// let number = [1, 2, 3];
// var newnumber = [];


// let userName = prompt("Enter Your UserName ?");

// let loginFlag = false;

// for (var i = 0; i < userName.length; i++) {
//     if (User[i] == userName) {
//         loginFlag = true;
//     }
// };

// console.log("Flag : ",loginFlag);
// if (loginFlag) {
//     console.log("Login SuccessFully");
// } else { console.log("Access Denid!!"); }

//#get Element By ....
// let h1Elem = document.getElementById('Title');
// let thElem = document.getElementsByClassName('table');
// let Tag = document.getElementsByTagName('th');
// let query = document.querySelector('table');

// console.log(h1Elem.getAttribute('class'));
// h1Elem.setAttribute('class','js-text');

// console.log(h1Elem);

// console.log(query);

let items = document.querySelectorAll('.table');

items[1].innerHTML = 'test';

console.log(items[1].textContent);


let inputs = document.getElementById('input');
let selectbox = document.getElementById('select');
items[2].innerHTML = 'About Me';
selectbox.value = 'Tabriz';
inputs.value = 'Alireza';


let bool = document.getElementById('click');


    function changeFunction() {
        if (bool.value == 'false') {
        document.getElementById('func').innerHTML = 'Hello World!';
        bool.value = 'true';
    } else {
    document.getElementById('func').innerHTML = 'Default ?';
    bool.value = 'false'
};
}



let obj = {
    Name : 'Alireza' ,
    Family : 'fotouhi',
    Email : 'afotohi12#yahoo.com',
    Score :['14','ali',31,secObj={
        Car : 'Toyota',
        Color : 'red'
    }]
}
console.log(obj.Score[3]);


function PrintWindow(){
    window.print();
}





