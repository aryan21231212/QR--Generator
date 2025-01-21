let button = document.querySelector("#but");
let screen = document.querySelector("#input");
let img = document.querySelector("#img");


let base = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&dat = " ;

button.addEventListener('click',()=>{
    img.setAttribute("src" ,`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${screen.value}`)
})