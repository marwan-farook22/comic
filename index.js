// XMLHttpRequest
const myinput =document.querySelector(".input")
const mybtn =document.querySelector(".btn")
const mydiv =document.querySelector(".mydiv")
var request= new  XMLHttpRequest();

mybtn.addEventListener("click",()=>{
    +myinput.value
    request.open("get",`https://jsonplaceholder.typicode.com/photos`)
request.send()
console.log(request);
request.onreadystatechange= ()=>{
    if (request.readyState==4&& request.status==200){
        let  myrequset = JSON.parse(request.response);
let inputvalue = myrequset.find((users)=>{
    
        return  users.id == myinput.value ;         
})    
console.log();
   let temp = `
    <h1 class="text-black mb-4 " > the Id you choose is :${inputvalue.id}</h1>
    <h1 class="text-white mb-4 " >${inputvalue.title}</h1>
    <img  class ="mb-5"  src="${inputvalue.url}" width="25%"></img>`
    mydiv.innerHTML=temp
 
 
}
}
})