let clic;
var score = 0;
var multiplicateur = 1;  

function clicBeer(){
    score = score + 1;
    document.getElementById('affichage').innerText = score + " Beers"
    document.title = score + " Beers"

}

function augmenterMultiplicateur() {
    multiplicateur = score *= 2;
    document.getElementById('affichage').innerText = score + " Beers"
    document.title = score + " Beers"
}