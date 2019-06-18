
window.onload = function() {
    Start();
};

function Start(){
    let pokemon, row;
    row = document.getElementById("row");
    pokemon = document.getElementById("pokemon");
    let newPoke, child;
    for(let i = 0; i < pokedex.length; i++){
        newPoke = pokemon.cloneNode(true);
        child = newPoke.childNodes;
        child[1].src = "images/" + pokedex[i].name + ".png";
        child[3].childNodes[0].innerHTML = pokedex[i].id + "-" + pokedex[i].name;
        child[3].childNodes[0].onclick = function() {window.localStorage.setItem('index', i);};
        row.appendChild(newPoke);
    }
    pokemon.parentNode.removeChild(pokemon);
}
function ImageError(_this){
    _this.src = "images/missigno.jpg";
}