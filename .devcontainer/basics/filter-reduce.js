// const mynumber=[1,2,3,4,5,6,7,8,9,10]
// const my= mynumber.filter((mynumber) => mynumber>5) // first method without object single function

// const my=mynumber.filter((mynumber)=>{  // if you open a arrow function scope then {} the you use return
//  return mynumber>6
// })

// console.log(my);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// let userbooks=books.filter((books) => books.genre === 'History')
let userbooksone=books.filter((books) =>{
    return books.publish >= 1995 && books.genre === 'History';
})
// console.log(userbooksone);

// ================================================
// const mynum=[1,2,3,4,5,6,7,8,9,10]
// const num=mynum.map((mynum)=> mynum+10)
// console.log(num);

// ==========scope========

// const mynum=[1,2,3,4,5,6,7,8,9,10]
// const num=mynum.map((mynum)=> {
//   return mynum+10
// })
// console.log(num);

// ============without scope=============

// const mynum=[1,2,3,4,5,6,7,8,9,10]
// const numb=mynum.map((mynum)=> mynum*10+5)
// console.log(numb);

//==========with scope===========
// const mynum=[1,2,3,4,5,6,7,8,9,10]
// const numb=mynum.map((mynum)=> {
//   return mynum*10+5
// })
// console.log(numb);

// ===================chaining=======
//  const mynum=[1,2,3,4,5,6,7,8,9,10]
// const numb=mynum
// .map((mynum)=> mynum*10)
// .map((mynum)=> mynum + 5)
// console.log(numb);
// ===================chaining include other method============
// const mynum=[1,2,3,4,5,6,7,8,9,10]
// const numb=mynum
// .map((mynum)=> mynum*10)
// .map((mynum)=> mynum + 5)
// .filter((mynum)=> mynum>20)
// console.log(numb);

// =========reduce=========
// const numb=[1,2,3]
// const total=numb.reduce(function(acc,currval){
//   console.log(`acc:${acc} and currval: ${currval}`);
//   return acc+currval
// },3)
// console.log(total);

// =========reduce arrow=========
// const numb=[1,2,3]
// const total=numb.reduce((acc,currval)=>{
//   console.log(`acc:${acc} and currval: ${currval}`);
//   return acc+currval
// },3)
// console.log(total);

const shoppingcart=[
  {
    itemname:"mobile dev course",
    price:12000
  },
  {
    itemname:"data science course",
    price:18000
  },
  {
    itemname:"software development course",
    price:21000
  }
]

const pricetopay=shoppingcart.reduce((acc,item)=> acc + item.price,0)
console.log(pricetopay);