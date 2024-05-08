document.getElementById("button").addEventListener("click", function() {
    let age = document.getElementById("input").value;
    alert(`Ваш возраст ${age} ${ageWordGiver(age)}`);
}, false);

function ageWordGiver(age){
    switch(true){
        case 4 < age % 100 && age % 100 < 21:
            console.log(1)
            return "лет";
        case 1 < age % 10 && age % 10 < 4:
            console.log(2)
            return "года";
        case age % 10 == 1:
            console.log(3)
            return "год";
        default:
            console.log(4)
            return "лет";
    }
}