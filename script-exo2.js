class Voiture {
    #marque;
    #modele;
    #annee;
    #couleur;
  
    constructor(marque, modele, annee, couleur) {
      this.#marque = marque;
      this.#modele = modele;
      this.#annee = annee;
      this.#couleur = couleur;
    }
  
    afficherDetails() {
      console.log(`Marque: ${this.#marque}`);
      console.log(`Modele: ${this.#modele}`);
      console.log(`Annee: ${this.#annee}`);
      console.log(`Couleur: ${this.#couleur}`);
    }
}

