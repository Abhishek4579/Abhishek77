// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
//   console.log(i)
// }


// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     console.log(i)
//   }

// console.log(i)

// For loop

const numbers = [10,20,30,40,50,60,"hello"];
// console.log(numbers.length)

// Loop through a list of indices - 0,1,2,3,4,5

// for (variable initialisation; ending condition; increment )
// for (let index =0; index < numbers.length; index++){
//     console.log(`The number in the current iteration is ${numbers[index]}`)
//     console.log(`The index at this point is ${index}`)
// }

// for in loop
// for (let index in numbers){
//     console.log(`The number in the current iteration is ${numbers[index]}`)
//     // process.stdout.write(`The number in the current iteration is ${numbers[index]} `)
// }
// for in
// for (let index in numbers){
//     console.log(typeof parseInt(index));  
// }

// // for of loop
// for (let num of numbers){
//     console.log(num)
//     console.log(typeof num)
// }

// We can iterate over objects
const person = {
    name: 'Alice',
    age: 30,
    city: 'Wonderland'
  };

// for in loop over person object
// for (let key in person){
//     console.log(key)
//     console.log(person[key])
// }

// for of loop over object
// for (let item of person){
//     console.log(item);   
// }

// Iterate over an array of objects


// for (const action of userActions) {
//     // console.log(`Action: ${action.action}, Timestamp: ${action.timestamp}`);
//     console.log(`Action of the user is ${action.action} at this time : ${action.timestamp}`)
// }

// for in 
// for (const action of userActions) {
//     // console.log(`Action: ${action.action}, Timestamp: ${action.timestamp}`);
//     console.log(action)
//     // const action = userActions[index];
//     // console.log(`Action of the user is ${action.action} at this time : ${action.timestamp}`)
// }
// console.log(process.arch)
// forEach loop



// Iterate over arrays, objects, array of objects
// forEach 
const userActions = [
    { action: 'login', timestamp: '2024-08-11T10:00:00Z' },
    { action: 'purchase', timestamp: '2024-08-11T10:05:00Z' },
    { action: 'logout', timestamp: '2024-08-11T10:10:00Z' }
];

// forEach - iterable.forEach(callback function)
// Callback function is simply a function which is passed as an argument to another function
// userActions.forEach(action => {
//     console.log(action.action = action.action.toUpperCase())
//     console.log(action.timestamp)
// })

// userActions.forEach((action,index) => {
//     console.log(action.action = action.action.toUpperCase())
//     console.log(action.timestamp)
//     console.log(`This is the action number ${index+1}`)
//     console.log('\n')
// })

// userActions.forEach(user => {
// if (user.status === 'active') {
//     console.log(`Sending notification to ${user.name}`);
//     // Code to send notification
// }
// });

const actionOne = userActions[0]
console.log(actionOne)
// 
// actionOne.forEach((value,key) => {
//     console.log(value)
// })
//
console.log(Object.entries(actionOne))

Object.entries(actionOne).forEach(elem => {
    console.log(`The key of this action is ${elem[0]} and the value is ${elem[1]}`)
})

