//singleton (constructer)
// Object.create{

// }

//object literal 
let mysym = Symbol("keys1") // create a variable of symbol 
let user= {
    name:"puneet",
    age:24,
    email:"puneetyadav@gmail.com",
    location:"mathura",
    isLoggedIn:false,
    lastLoginDays:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],
    [mysym]:"keys1",// symbol declear in object method with the help of [variable name]
    usertwo:
    {
        name:"sumityadav"
    }
}

// console.log(user.name);
// console.log(user.age);
// console.log(user["email"]);
// console.log(user.location);
// console.log(user.isLoggedIn);
// console.log(user["lastLoginDays"]);
// console.log(user.usertwo.name);
// user.email="yadavpuneet@gmail.com"
// // console.log(user.email);
// console.table(user)
// console.table([user.name,user.age,user["email"],user.location,user.isLoggedIn,user["lastLoginDays"],[usertwo.name]])
// console.log(typeof user[mysym]);// if you want to check datatye of symbol in object is alwaya show string and give the value
//------------------symbol--------------------------------------------
// let sym = Symbol("id")
//  console.log(typeof sym) // datatype is Symbol
//-------------------------------------------------------
Object.freeze(user)
user.age=34
// console.table(user)
// user.name="sidak"
// user.usertwo.name="sheelu"
// user.usertwo.name="sid"
Object.freeze(user.usertwo)
user.usertwo.name="sheelu"
console.table(user)