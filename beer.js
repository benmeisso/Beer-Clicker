let click = 0;
let score = 0;
let prix = 50;
let multiplicateur = 1;
let multiplicateurSuivant = 2;


/********************** Logique **********************/ 

// Gestion des bières
function clickBiere(){
    click += 1;
    score += multiplicateur;
}

function achatMultiplicateur() {
    // augmenterMultiplicateur
    multiplicateur = multiplicateur + 1;
    multiplicateurSuivant = multiplicateurSuivant + 1; 

    // calcul du nouveau score
    score = score - prix;

    // calcul nouveau prix
    prix *= 1.2;
}

/********************** Affichage **********************/ 
// Affichage du nombre de bières
function affichageNbBieres() {
    var text = Math.round(score) + " Bière"; 
    if( score > 1 ) {
        text += "s";
    }
    document.getElementById('affichage').innerText = text;
    document.title = text;
}
function actualisationAffichage() {
    document.getElementById('prix').innerText = "Prix = " + Math.round(prix);
    document.getElementById('multiplier').value = "X" + multiplicateurSuivant;
    affichageNbBieres();
}

/********************** Interface Utilisateur **********************/ 
// Click sur le bouton d'achat multiplicateur
function clickMulticplicateur() {
    achatMultiplicateur();
    actualisationAffichage();
    gestionBouton();
}

function clickBiereAff(){
    clickBiere();
    affichageNbBieres();
    gestionBouton();
}

function gestionBouton() {
    if(score >= prix) {
        document.getElementById('multiplier').disabled = false;
    }
    else
        document.getElementById('multiplier').disabled = true;
}