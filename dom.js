/*
console.log(window.document.body);
let a=document.getElementById("id1");
console.log(a);
let b=document.getElementsByClassName("class1");
console.log(b);
let c=document.getElementsByTagName("p");
console.log(c);
*/

//  in query selector case write # or . befor id or class name but if use only tag name then dont use.
let el=document.querySelector("p");
console.dir(el.innerText);

let allel=document.querySelectorAll("p");
console.log(allel[0].innerText);
console.log(allel[1].innerText);
allel[1].innerText="this is new website";
console.log(allel[1].innerText);