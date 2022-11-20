/* console.log node js ka module hai na ki js ka
js me jo console.log run hota  hai vo browser ki property hoti hai
*/
// conditions loops And Array
//var x=20;
/*if(x==20)
// === matches the data type also with the value
{
    console.log("matched");
}
*/
/*for(i=0;i<=10;i++)
{
    console.log(i);
}
*/
/*
const arr=[2,4,7,4,6,8];
console.log(arr[0]);
*/
/* agar hame kisi dusre page ka value yaha pe lana hai to 
// ham directly export nhi kar sakte as js aur react js ki tarah*/
/*const app =require('./app')
console.log(app.x)
console.log(app.y)
*/
// use of filter function
// filter function ka use kar ke ham koi specific value find karte hai 
/*const arr=[2,4,5,6,7,8];
let result =arr.filter((item)=>{
    return item>=6
})
console.log(result);
*/
// core modules :- every programming language has its core modules
// the basic feature in any programming language is known as core modules such as HTTP,console.log and so on
//const fs = require('fs');
// to write in file need to require the fs
//fs.writeFileSync("hello.txt","My name is yatndeep")
// fs is the non global module of file system
// to check the directory name console.log(__dirname);
// make basic server
/*
const http=require('http');
//  http handels all the requests and responses in node
function dataControl(req,resp)
{
    resp.write("<h1>Hello World</h1>")
    resp.end();
}
http.createServer(dataControl).listen(4503);
// so yaha pe ek basic server bana hua hai
*/
// Learning Package.json stores details about code of project

// to make package.json run command npm init
