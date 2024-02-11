// var c=300
let a=300

if(true){
    let a=10
    const b=20
    var c=30
    // console.log("innner",a);
}


// console.log(a);
// console.log(b);
// console.log(c);
// -------------hosting---------
function one(){
    const username="puneet"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}
// one()

if(true){
    const username="puneet"
    if(username==="puneet"){
        const wensite="youtube"
        // console.log(username+wensite);
    }
    // console.log(website);
}
// console.log(username);

//-------------------------------interseting-------
 //function

//  console.log(addone(5))  //6
function addone(num){    
    return num+1
}



 //function expression

const addtwo=function(num){
    return num+2
}
// console.log(addtwo(5)) //7