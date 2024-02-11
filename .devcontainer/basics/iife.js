// (IIFE):- Immediately Invoked Function Experssions
// -----------use in database---------------

//-----------normal function----------------------
// (function code(){
//     console.log(`db connect`);
// }) ()
// output:db connect

//-----------arrow  function----------------------
// (()=>{
//     console.log(`db connect`);
// })()
// output:db connect

// -------------------multiple time iife code ----------------
// note:- if you are using multiple iife in a program then you will using the (;) at the end of ever function calling

//---------both is function-------------
// (function code(){
//     console.log(`db connect`);
// }) ();

// (function program(){
//     console.log(`db connect two`);
// }) ()

// ---------------one is function and second is arrow function----------

// (function code(){
    //name iife
//     console.log(`db connect`);
// }) ();

// (()=> {
    //simple iife
//     console.log(`db connect two`);
// }) ()

// ------------------------------------------------
(function code(){
    console.log(`db connect`);
}) ();

((username)=> {
    console.log(`db connect two ${username}`);
}) ("PUNEET")