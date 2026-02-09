/*
console.log("tanishk jaiswal");
a=prompt("enter a no : ");
for(let i=1;i<=10;i++)
{
console.log(a," x ",i," = ",a*i);

}
*/
/*
let x;
x=prompt("choose a no  1 to 20: ");
while(x!=13)
{
x=prompt("you loose , please enter a no again : ");

}
console.log("congrajulation you won");
*/
/*
function sum(a,b)
{
return a+b;
}

console.log("5 + 6 = ",sum(5,6));
*/

/*
// vowel in a string

function vowel(str)
{
let sum=0;
for(const ch of str)
{
if(ch==="a"|| ch==="e"|| ch==="i"|| ch==="o"|| ch==="u" || ch==="A"|| ch==="E"|| ch==="I"|| ch==="O"|| ch==="U")
{
    sum+=1;
}
}
return sum ;
}


let a=prompt("enter a string : ");
console.log("no of vowels in string : ",vowel(a));
*/

//  foreach loop use in which we pass function
/*
let arr=["delhi","kolkata","chennnai","pune"];

arr.forEach(function city(val,index,arr)
{
    console.log(val.toUpperCase(),index,arr);
}
);
*/

let a=[1,2,3,4,5,6,7,8,9,10];
let b= a.filter( (val)=>{
    return val%2==0;
}
);

console.log(b);

