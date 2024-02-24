const user ={
    username:"puneet",
    price:900,

    welcomeMaessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMaessage()
// user.username="sid"
// user.welcomeMaessage()
// console.log(this);

// function code(){
//     let username="puneet"
//     console.log(this.username);
// }
// code()
// -----------------------------------------arrow function------------------------------------------------------
// note:-1. if you use  {} then you must be return
//       2. if you use  () then don't need to write return


const code = () => {
    let username="puneet"
    // console.log(this);
}
// code()

// ------------explicitive return ----
// const addtwo=(num1,num2) =>{
//     return num1+num2
// }
// console.log(addtwo(2,4));


// ------------implicitive return ----note:- only one line comment code
// const addtwo=(num1,num2) => num1+num2
// console.log(addtwo(3,4));

// const addtwo=(num1,num2) => (num1+num2)
// console.log(addtwo(3,4));


//------------arrow function return object--------------------
// const addtwo=(num1,num2) =>{
//     username:"puneet"
// }
// console.log(addtwo())  //output: undefined
// ----------------------------
// const addtwo=(num1,num2) =>({
//     username:"puneet"
// })
// console.log(addtwo()) //output:{ username: 'puneet' }

// -------------------array in arrow function ---------------
const array=[1,2,3,4,5]
array.forEach(function()   {})
array.forEach(() =>   {})

