const button = document.getElementsByClassName("btn")[0];
const input = document.getElementsByClassName("inp")[0];


let counter = 0;

button.addEventListener("click", ()=>{
    counter++;
    if(counter % 2 != 0){
        input.className += " active";
    }
    else{
        input.className = "inp";
    }
})