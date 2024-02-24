//let chatup = new Object() //-------this is singleton object 
//let chatup={} //----it is not singleton object but it is also a object

let chatup={}
chatup.id=101
chatup.name="puneet"
chatup.age=24
chatup.email="puneetyadav@gmail.com"
chatup.isLoogedIn=false
// console.log(chatup);


let regularuser={
    email:"puneetyadav@gmail.com",
    fullname:{
        userfullname:{
        firstname:"puneet",
        lastname:"yadav"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname);
let obj1={1:"a",2:"b"}
let obj2={3:"a",4:"b"}
let obj3={4:"a",5:"b"}
let allobj={obj1,obj2} // output:{ obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'a', '2': 'b' } }
let object1=Object.assign(obj1,obj2) //Oject.assign is use two merge the object ;note: there will a conduction if the value of obj1 or obj2 are same they can show only a unique value 
// console.log(object1);

let object2=Object.assign({},obj1,obj2,obj3) //note:{}target use obj1,obj2,obj3 to store in {} but your not give the target value then they will use obj1 to store the all object.
let object3={...obj1, ...obj2, ...obj3}
// console.log(object3);

//----------------database value coming--------------------
let user=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]
user[1].email
// console.log(chatup);
// console.log(Object.keys(chatup));
// console.log(Object.values(chatup));
// console.log(Object.entries(chatup)); // enteries: show the object values in array [key][values]
// console.log(chatup.hasOwnProperty('name')); // hasOwnProperty: to check the value inside the object

//-------------de-structureing object----------

let course={
    coursename:"js",
    price:999,
    courseInstructor:"puneet"
}

// course.courseInstructor
let {courseInstructor,coursename,price}=course
// console.log(courseInstructor);
// console.log(coursename);
// console.log(price);

let {courseInstructor: Instructor}=course // this decleration is know as de-structureing
// console.log(Instructor);

//-------rect destructureing------------------
/*
let navbar=({company})=>{

// }
navbar(company="puneet")
*/
