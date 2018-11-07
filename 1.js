var element = document.getElementById("No");
function show() {
alert("You are right :)")
}

function hover(){
    element.style.top = Math.round(Math.random() * window.innerHeight) + "px";
    element.style.left = Math.round(Math.random() * window.innerWidth) + "px";
}