const promisesOne = new Promise(function(resolve,reject){
// do an async task
// db calls, crytpgraphy,network
setTimeout(function(){
    console.log('async task in complete');
    resolve();
},1000)
})

promisesOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})

const promisethree=new Promise((resolve, reject) => {
    setTimeout(function(){
        // console.log("async tast three complete");
        resolve({
            username:"puneet",
            email:"puneetyadav@exmaple.com"
        });
    },1000)
})

promisethree.then(function(user){
    console.log( user);
})

const promisefour=new Promise((resolve, reject) => {
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({
                username:"puneet",
                password:"123"
            })
        }
        else{
            reject('ERROR:something went wrong')
        }
    },1000)
    
}) // callback hale
promisefour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log("the promise is either resolve and rejected");
})
/* note :- promise four program output in this case .
async task in complete
promise consumed
async task 2
async 2 resolved
{ username: 'puneet', email: 'puneetyadav@exmaple.com' }
ERROR:something went wrong
the promise is either resolve and rejected
*/

const promisefive=new Promise((resolve, reject) => {
    setTimeout(function(){
        error=false;
        if (!error) {
            resolve({
                username:"sumit",
                password:"1234"
            })    
        }
        else{
            reject('ERROR:js went wrong')
        }

    },1000)
})
async function consumepromisefive(){
    try {
        const response=await promisefive
        console.log(response);
    } 
    catch (error) {
        console.log(error);
    }
    finally{
        console.log("the promise is either resolve and rejected 2");
    }
}
consumepromisefive()

async function getalluser(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        
        const data = await response.json()
        console.log(data);
    }
    catch(error)
    {
    console.log("E: ",error);
    }
}
getalluser()

fetch('https://api.github.com/users/puneetyadav06')
.then((resolve)=>{
    return resolve.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})


fetch('https://dummyjson.com/products/1')
.then((resolve)=>{
    return resolve.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("the promise is either resolve and rejected 3");
})

