console.log("Laboratoire prêt !");

const nom = "Votre Nom";
let age = 17;

const motDePasseAttendu = "secret123";
let motDePasseUtilisateur = "secret123"; // Changez cette valeur pour tester

let longueur = motDePasseUtilisateur.length

if (motDePasseUtilisateur === motDePasseAttendu) {
    console.log("Accès autorisé. Bienvenue !");
} else if (longueur < 8) {
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}

const moi = {
    prenom: "Donovan",
    nom: "Jeannot",
    age: 18,
    ville: "Paris",
    competences: ["HTML", "CSS"]
};

console.log(`Je m'appelle ${moi.prenom} ${moi.nom}`);

const notes = [12, 15, 9, 18];

for (let i = 0; i < notes.length; i++) {
    console.log("La note à l'indice " + i + " est " + notes[i]);
}

const classe = [
    { prenom: 'Alice', age: 18 },
    { prenom: 'Bob', age: 17 }
];

for (let i = 0; i < classe.length; i++) {
    console.log("La note à l'indice " + i + " est " + classe[i]);
}