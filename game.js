let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");
let player0=true;

const patterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];


boxes.forEach( box => {
box.addEventListener("click",()=>{
if(player0)
{
    box.innerText="O";
    player0=false;
}
else
{
    box.innerText="X";
    player0=true;
}
box.disabled=true;
winning();

})
}
);

let div0=document.querySelector(".div0");
let para=document.querySelector(".para");
let newbtn=document.querySelector(".new-btn");
const winning=()=>
{
for(let pattern of patterns)
{
let val1=boxes[pattern[0]].innerText;
let val2=boxes[pattern[1]].innerText;
let val3=boxes[pattern[2]].innerText;

if(val1!="" && val2!="" && val3!="")
{
if(val1===val2 && val1===val3)
{
    console.log("winner",val1);
    div0.classList.remove("hide");
    para.innerText=`congratulation winner ${val1}`;
    stop();
}
    
}
}
}

const stop=()=>
{
boxes.forEach(box=>
{
box.disabled=true;
}
)
}

resetbtn.addEventListener("click",()=>
{
boxes.forEach(box=>{
box.innerText="";
box.disabled=false;
})
div0.classList.add("hide");
player0=true;
}
)

newbtn.addEventListener("click",()=>
{
boxes.forEach(box=>{
box.innerText="";
box.disabled=false;
})
div0.classList.add("hide");
player0=true;
}
)