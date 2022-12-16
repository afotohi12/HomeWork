////aval number 
var Arayeh = [];
var Aval_List = [];
var count = 0;
var Aval =i;
var Tedad = 0 
for (var i = 1; i <= 1000; i++) {

    Arayeh.push(i);
    if (i >= 2) {
        Aval =i;
        while(i>0) {
            if (Aval%i != 0) {
                console.log(Aval,i);
               Aval_List.push(i);
               i--;
               Tedad++;
            };
        };
    };

};
console.log(Arayeh,Aval_List,Tedad);