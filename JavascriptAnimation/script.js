let circle1=document.querySelector(".sec1");
let circle2=document.querySelector(".sec2");

window.addEventListener("scroll",function(){
    let value=window.scrollY;
    circle1.style.clipPath="circle("+ value* 1.15+"px at 0 0"
    circle2.style.clipPath="circle("+ value* 1.1+"px at 100% 100%"
})