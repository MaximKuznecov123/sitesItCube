document.getElementById("btn").addEventListener("click", function(){
    const film = document.createElement("div");
    const img = document.createElement("img");

    const zaglav = document.createElement("h1"); 
    zaglav.textContent = prompt("Введите название фильма");

    film.appendChild(zaglav);
    film.appendChild(img);
    
    const wrapper = document.querySelector(".wrapper");
    wrapper.appendChild(film);
});