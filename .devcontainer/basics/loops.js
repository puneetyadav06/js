// for loops
/*
 for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5) {
        console.log("5 is best number");
        
    }
    console.log(element);
    
 }
 */

 for (let i = 0; i <= 10; i++) {
    console.log(`outer loops value ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loops value ${j} and inner loops ${i}`);
        console.log(i + '*' + j + '=' + i*j);
        
    }
    
 }