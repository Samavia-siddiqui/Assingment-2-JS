let btn =document.getElementById("btn");
console.log(btn);
let pic=document.getElementById("image");

btn.addEventListener("click",()=>{
    console.log(pic.src);

if(pic.src==="https://plus.unsplash.com/premium_photo-1663852297246-fa15838dcde6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987"){
    pic.src="https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"
}else {
    pic.src="https://plus.unsplash.com/premium_photo-1663852297246-fa15838dcde6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987"

}
});
