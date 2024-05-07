const title= document.getElementById("title_film")
//title.textContent="Фильмы про пришельцев "
title.innerHTML="<i>Фильмы про пришельцев<i>"
//
// const newEL=document.createElement("i");
// newEL.innerHTML="и вампиров"
// newEL.id="newEL"

// //title.prepend(newEL)
// //title.append(newEL)

// // title.lastElementChild.replaceWith(newEL)

// // const title2= document.getElementById("title-filme");
// // title2.remove();

const button= document.getElementById("btn2")
button.innerHTML="<div>Удалить</div>"

const button1= document.getElementById("btn1").onclick=function() {
    const filmliste=document.getElementById("film_list");
    const newfilm =document.createElement("li");
    newfilm.classList.add("film_liste");
    newfilm.textContent=prompt("Введите название фильма");
    filmliste.append(newfilm);
}

const button2= document.getElementById("btn2").onclick=function() {
    const listic=document.getElementById("film_list");
    listic.lastChild.remove();
}

const body = document.querySelector("body");
body.style.backgroundColor = "cyan";

const zaglav = document.querySelector("h1");
zaglav.style.color = "violet";

const listElems = /*document.getElementById("film_list")*/document.querySelectorAll("li");
for (const elem of listElems) {
    elem.style.fontSize = "30px";
    elem.style.color = "red";
}