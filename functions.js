let score = 0;
let prix = 50;
let multiplicateur = 1;
let multiplicateurSuivant = 2;
let autoClick = false;



/********************** Logique **********************/ 

// Gestion des bières
function clickBiere(){
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
function achatAutoClick() {
    autoClick = true;
    setInterval(clickBiereAff, 1000);
    score = score - 500;

    // calcul nouveau prix
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

/********************** Affichage du Prix Multiplicateur **********************/

function actualisationAffichageMultiplicateur() {
    document.getElementById('prix').innerText = "Prix = " + Math.round(prix);
    document.getElementById('multiplier').value = "X" + multiplicateurSuivant;
    affichageNbBieres();
}

/********************** Interface Utilisateur **********************/ 
// Click sur le bouton d'achat multiplicateur
function clickMulticplicateur() {
    achatMultiplicateur();
    gestionBouton();
    actualisationAffichageMultiplicateur();

}

function clickBiereAff(){
    clickBiere();
    affichageNbBieres();
    gestionBouton();
}
function clickAutoClick() {
    gestionBouton();
    achatAutoClick();

}
function gestionBouton() {
    if(score >= prix) {
        document.getElementById('multiplier').disabled = false;
        document.getElementById('multiplier').style.background='#7CFC00';
    }
    else {
        document.getElementById('multiplier').disabled = true;
        document.getElementById('multiplier').style.background = '#F5F5F5';
    }

    if(score >= 500 && autoClick === false) {
        document.getElementById('autoclick').disabled = false;
    }
    else if(autoClick === false)
    {
        document.getElementById('autoclick').disabled = true;
    }
    else
    {
        document.getElementById('autoclick').disabled = true;
        document.getElementById('autoclick').style.visibility = "hidden";


    }
}

  /********************** Entrée dans le bar ****************************************/


function entrerBar() {
    document.getElementById('loader').style.visibility= "hidden";
    document.getElementById('loader').style.display= "none";
    document.getElementById('clic').style.display= "block";
    document.getElementById('clic').style.visibility= "visible";
    document.getElementById('affichage').style.visibility= "visible";
    document.getElementById('prix').style.display= "block";
    document.getElementById('prix').style.visibility= "visible";
    document.getElementById('multiplier').style.display= "flex";
    document.getElementById('multiplier').style.visibility= "visible";
    document.getElementById('html').style.background = "url(images/man-beer-bar-sit-high-stool-wooden-desk/2545.jpg) no-repeat center ";
    document.getElementById('html').style.margin =0;
    document.getElementById('html').style.padding=0;
    document.getElementById('html').style.webkitBackgroundSize =  "cover";
    document.getElementById('html').style.backgroundSize = "cover";
    document.getElementById('autoclick').style.display = "block";
    document.getElementById('autoclick').style.visibility = "visible";
  }


