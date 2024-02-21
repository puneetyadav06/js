// for of loop :- first value for print
// for in loop:- second value for print


// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for (const number of arr) {
    // console.log(number);
    
}

const greetings="hello world!"
for (const greet of greetings) {
    // console.log(greet);
    
    
}

//maps

let map = new Map()
map.set('IN',"India")
map.set('usa',"america")
map.set('fr',"france")
map.set('IN',"India")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key,':-',value);
    
}

// const myobject={
//     game1:'nfs',
//     game2:'spideman'
// }
// for (const [key, value] of myobject) {
//     console.log(key,':-',value);
    
// }

// const myobject={
//     js:'javascript',
//     cpp:'c++',
//     swift:'swift by apple'
// }
//  for (const key in myobject) {
// //    console.log(`${key} shortcut is for ${myobject[key]}`);
//  }

const programming=["js","c","c++","java"]
for (const key in programming) {
//    console.log(programming[key]);
}

// const map = new Map()
// map.set('IN',"India")
// map.set('usa',"america")
// map.set('fr',"france")
// map.set('IN',"India")
//  for (const key in map) {
//   console.log(map[key]);
//  }

const prog=["js","c","c++","java","puneet"]
// prog.forEach(element => {
//     console.log(element);
    
// });
//  function printMe(item){
    // console.log(item);
//  }
//  prog.forEach(printMe)

const prom=["js","c","c++","java","puneet"]
prom.forEach((item,index,value) => {
    // console.log(item,index,value);
});

const codelanguage=[
{
    languagename:"javascript",
    languagefilename:"js",
},
{
    languagename:"java",
    languagefilename:".java",
},
{
    languagename:"c++",
    languagefilename:".c",
},
]
codelanguage.forEach(element => {
    console.log(element);
});
codelanguage.forEach(element => {
    console.log(element.languagename);
});