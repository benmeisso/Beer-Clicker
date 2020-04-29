let clic = 0;
var score = 0;
var multiplicateur = 1;
var prix = 50;
var multiplicateurAff = 2;

function someBeer(){ // Logique
    score = score + multiplicateur;
    return score;
}
function nbBeerAff() {
    if(score !== 1) {
        document.getElementById('affichage').innerText = Math.round(score) + " Bières";
        document.title = score + " Bières";
    }
    else {
        document.getElementById('affichage').innerText = score + " Bière";
        document.title = score + " Bière";
    }
}


function clicBeerAff(){ // Affichage du nombre de bières
    clic += 1;
    someBeer();
    nbBeerAff();
    gestionBouton();
}

function augmenterMultiplicateur() {
    multiplicateur = multiplicateur + 1;
    return multiplicateur;
}

function augmenterMultiplicateurAff(){
    multiplicateurAff = multiplicateurAff + 1;
    return multiplicateurAff;
}


function calculPrix() {
    prix *= 1.2;
    return prix;
}
function prixAff() {
    document.getElementById('price').innerText = "Prix = " + Math.round(prix);
}

function calculScore() {
    score = score - prix;
}

function multiplicateurIGAff() {
    document.getElementById('multiplier').value = "X" + multiplicateurAff;
}

function multButton() {
    augmenterMultiplicateur();
    augmenterMultiplicateurAff();
    calculScore();
    calculPrix();
    prixAff();
    multiplicateurIGAff();
    nbBeerAff();
    gestionBouton();
}

function gestionBouton() {
    if(score >= prix) {
        document.getElementById('multiplier').disabled = false;
    }
    else
        document.getElementById('multiplier').disabled = true;
}