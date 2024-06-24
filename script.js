class Voiture {
    constructor(marque, modele, annee, couleur){
        this.marque;
        this.modele;
        this.annee;
        this.couleur;
    }
    
    afficherDetails(){
        console.log(`marque':${this.marque}`);
        console.log(`modele: ${this.modele}`);
        console.log(`annee: ${this.annee}`);
        console.log(`couleur: ${this.couleur}`);
    }
    
}

console.log(afficherDetails(modele)){};