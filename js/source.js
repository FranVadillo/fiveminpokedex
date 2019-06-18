var title, image, description, model;

window.onload = function() {
    Start();
};

function Start(){
    title = document.getElementById("title");
    image = document.getElementById("image");
    description = document.getElementById("description");
    model = document.getElementById("model");

    let index = window.localStorage.getItem('index');
    title.innerHTML = pokedex[index].id + "-" + pokedex[index].name;
    image.src = "images/" + pokedex[index].name + ".png";
    description.innerHTML = pokedex[index].description;
    model.src = pokedex[index].model;
}

function ImageError(){
    image.src = "images/missigno.jpg";
}