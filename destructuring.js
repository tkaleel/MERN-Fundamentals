//1
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars          //randomCar = first value from cars
// const [ ,otherRandomCar ] = cars    //second value from vars
// //Predict the output
// console.log(randomCar)              //tesla
// console.log(otherRandomCar)         //mercedes


//2
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee; //otherName is name 'elon'
// //Predict the output
// //console.log(name);      //name never assigned, except as part of 'employee'
// console.log(otherName); //elon, when run without line above which produces an error

//3
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);      //12345
// console.log(hashedPassword); // no password attribute from person

//4
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;   //2
// const [,,,second] = numbers; //5
// const [,,,,,,,,third] = numbers; //2
// //Predict the output
// console.log(first == second); //false
// console.log(first == third); //true


//5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); //value
console.log(secondKey); //array of numbers 1 5 1 8 3 3 
console.log(secondKey[0]); // 1
console.log(willThisWork); // 5







