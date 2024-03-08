// ------------------object literal--------
// const user={
//     username:"Puneet",
//     loginCount:8,
//     signedIn:true,
//     getuserdetails:function(){
//         // console.log("hello");
//         // console.log(`username: ${this.username}`);
//         console.log(this);
//     }
// }
// console.log(user.username);
// console.log(user.getuserdetails());
// console.log(this);

// ------------------construction function--------
function username(username,loginCount,isloggedIn) {
    this.username=username;
    this.loginCount=loginCount;
    this.isloggedIn=isloggedIn;

    return this
}
// const userone = username("puneet",12,true)
// const usertwo = username("sumit",10,false)

const userone = new username("puneet",12,true)
const usertwo = new username("sumit",10,false)


console.log(usertwo);
console.log(userone);