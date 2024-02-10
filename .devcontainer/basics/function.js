//------------method1------------------
function sayMyName(){
    console.log("p");
    console.log("u");
    console.log("n");
    console.log("e");
    console.log("e");
    console.log("t");
}
// sayMyName()

//------------method2------------------
function add(number1,number2) {  //parameter
    console.log(number1 + number2);  
}
add(3,5) //call arguments

//------------method3------------------
function add(number1,number2) {  //parameter
    // console.log(number1 + number2);  
    let result= number1+number2;
    return result  
}
let result = add(4,5)
// console.log("result:", result);


//------------method1------------------
function add(number1,number2) {   
    return number1+number2;
    
}
let result = add(4,5)
// console.log("result:", result);

function loginUsermessage(username){
    if(username === undefined){
        console.log("please use the enter name");
        return  // output:please use the enter name  undefined
       
    }
    return `${username} just logged id`
}
// console.log(loginUsermessage("puneet"))
// console.log(loginUsermessage("")) // output:just logged id
// console.log(loginUsermessage()) //output: undefined just logged id

function loginUsermessage(username="puneet"){
    if(username === undefined){
        console.log("please use the enter name");
        return  // output:please use the enter name  undefined
       
    }
    return `${username} just logged id`
}
// console.log(loginUsermessage("sidak"));

//-----------------professional------------------
function loginUsermessage(username){
    if(!username){
        console.log("please use the enter name");
        return  // output:please use the enter name  undefined
       
    }
    return `${username} just logged id`
}
// console.log(loginUsermessage())