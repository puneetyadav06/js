//(...num1) :this is a reset operater to adjust the parameter value to return array
function calculateCarPrice(...num1){ 
    return num1
}

// console.log(calculateCarPrice(200,300,400));

function calculateCarPrice(val1,val2, ...num1){ 
    return val1,val2,num1
}

// console.log(calculateCarPrice(200,300,400,500,600));

let user ={
    username:"puneet",
    price:900
}

function handleobject(anyobject){
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user)
handleobject({
    username:"sam",
    price:300
})

 //--------array-------
let myarray = [200,300,400,500]

function returnSecondValue(getarray){
    return getarray[1]
}
// console.log(returnSecondValue(myarray));
// console.log(returnSecondValue([200,300,400]));

