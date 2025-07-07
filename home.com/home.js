let cub = document.querySelector(".cur");
document.addEventListener("mousemove" , (event)=>{
    cub.style.left = event.pageX + "px";
    cub.style.top = event.pageY + "px";
})