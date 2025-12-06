const container = document.querySelector(".container");
const allPanel = document.querySelectorAll(".panel");

function choose(event){
    const touch = event.target;

    const btn = touch.closest(".panel");
    for(let alr of allPanel){
        alr.setAttribute("class", "panel");
    }

    btn.setAttribute("class", "panel active");
}

for(let btn of allPanel){
    btn.addEventListener("click", choose);
}