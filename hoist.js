// 1
// console.log(hello);                                   
// var hello = 'world';                                 

// //PREDICTION
// var hello;
// console.log(hello); // logs undefined
// hello = "world";

// 2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

//PREDICTION
// var needle = 'haystack';
// test(); // runs functions
// function test(){
//     var needle = 'magnet'; // reassigns needle to magnet
//     console.log(needle); // prints reassigned var 'magnet'
// }

// 3
// var brendan = 'super cool'; // var created and assigned
// function print(){           // function is never called
//     brendan = 'only okay';  // stays in the function cage
//     console.log(brendan);
// }
// console.log(brendan);       //print original var 'super cool'

// 4
// var food = 'chicken';
// console.log(food);  // will log 'chicken'
// eat();              // calls function
// function eat(){  
//     food = 'half-chicken';  //food becomes new val inside function
//     console.log(food);      //new value 'half-chicken' is printed
//     var food = 'gone';      // never printed
// }

// 5
// mean();                 // calls function
// console.log(food);      
// var mean = function() { // bad function creation, ERROR
//     food = "chicken";   
//     console.log(food);  
//     var food = "fish";  
//     console.log(food);  
// }
// console.log(food);

// 6
// console.log(genre); // prints undefined
// var genre = "disco"; // assigns to global
// rewind();           // calls function
// function rewind() {
//     genre = "rock"; // var floats to top of function scope
//     console.log(genre); // prints rock
//     var genre = "r&b"; // reassigns genre to r&b
//     console.log(genre); // prints r&b
// }
// console.log(genre); // prints disco


// 7
// var dojo; // floats to top
dojo = "san jose";
console.log(dojo); // prints san jose
learn();            // calls function
function learn() { 
    dojo = "seattle";   //var floats to top
    console.log(dojo);  // prints seattle
    var dojo = "burbank"; // reassigns to burbank
    console.log(dojo);  // prints burbank
}
console.log(dojo);      //prints san jose








