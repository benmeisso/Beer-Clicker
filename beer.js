let clic;
var score = 0;

function clicBeer(){
    score = score + 1;
    document.getElementById('affichage').innerText = score + " Beers"
    document.title = score + " Beers"

}