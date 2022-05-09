const steps = document.getElementsByClassName("step");
const lines = document.getElementsByClassName("line");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let currentStep = 0;

next.addEventListener("click", () =>{
    if(currentStep < lines.length){
        currentStep++ 
        steps[currentStep].className += " bordercolor";
        lines[currentStep - 1].className += " active"
        prev.className += " active"
    }
    if(currentStep == lines.length){
        next.className = "next"
    }
});

prev.addEventListener("click", () =>{
    if(currentStep > 0){
        steps[currentStep].className = "step";
        lines[currentStep - 1].className = "line";
        currentStep-- ;
        next.className += " active"
    }
    if(currentStep == 0){
        prev.className = "prev"
    }
})