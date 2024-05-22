let layer=document.querySelector('.layer');

window.addEventListener("scroll",function(){
    let value=window.scrollY;
    layer.style.marginLeft = value*2.5 + "px";
});