//Problem #1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [ ,otherRandomCar] = cars
console.log(randomCar);
console.log(otherRandomCar);
//Tesla, Mercedes will be the output

//Problem #2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const {name: otherName} = employee;
console.log(otherName);
// this will throw an error, name is undefined.

//Problem #3
const person = {
    name: 'Phile Smith', 
    age: 47,
    height: '6 feet'
}
const password = '12345';
const {password: hashedPassword} = person;
console.log(password);
console.log(hashedPassword);
//it will print password but when hashedPassword is printed, it will be undefined as the password is printed outside the object

//Problem #4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
console.log(first == second);
console.log(first == third);
//false and then true will be printed

//Problem #5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// value, [1,5,1,8,3,3], 1, 5
