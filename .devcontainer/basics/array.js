// let array=[1,2,3,4,5]
// console.log(array)
// let hero = ["puneet","suresh","shelo","raju","amit"]
// let p= new Array (1,2,3,4,5)
// console.log(p);
// console.log(hero);


// method

// array.push(7)
// array.push(8)
// array.pop()

// array.unshift(9)
// array.shift()
// console.log(array.includes(9));
// console.log(array.indexOf(4));

// let newarray=array.join()
// console.log( array);
// console.log(newarray);
// console.log(typeof newarray);

//slice(1<range),splice(1<=range)

/*
let array=[1,2,3,4,5]

console.log("a",array);
let z=array.slice(1,4)
console.log(z);

console.log("b",array);
let x=array.splice(1,4)
console.log(x);
*/

// array functions
let marvel=["thor","ironman","spriderman"]
let dc=["batman","superman","flash"]

// marvel.push(dc)

// console.log(marvel);
//console.log(marvel[3][1]);

// let all=marvel.concat(dc) note:only perform two values
// console.log(all);

// const allhero=[...marvel,...dc] note:only perform multiple values
// console.log(allhero);

// let another =[1,2,3,[4,5,6],7,[5,6,7,[9,10]],8]
// let real_array=another.flat(Infinity)
// console.log(real_array);

console.log(Array.isArray("puneet"))
console.log(Array.from("puneet"))
console.log(Array.from({name:"puneet"}))  //interesting
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));