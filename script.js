// Q1
// const parent = {
//     Name : 'Anish'
// }

// const child1 = Object.create(parent)
// child1.surname = 'Pradhan'
// console.log(`My name is ${child1.Name} ${child1.surname}`)

// Q2
// const way = {
//     route : function() {
//         console.log('Soon you will reach to your place ');
//     }
// } 
// const wrongway = Object.create(way)

// wrongway.wrongroute = function() {
//     console.log('Wrong Turn');
// }
// const turn = Object.create(wrongway)

// turn.turnleft = function() {
//     console.log('Take left to reach your destination');
// }
// const reached = Object.create(turn)

// reached.route()
// reached.wrongroute()
// reached.turnleft()

// Q3
// const arrsum = [2,3,5,4,6]
// let sum = arrsum.reduce((val1,val2)=> val1+val2)
// console.log(sum);


