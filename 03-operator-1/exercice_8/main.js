// Exercice 8

// Écrivez votre code ici
let salaireMensuel = 500;
let loyer = salaireMensuel * 0.3;
let nourriture = salaireMensuel * 0.2;
let transport = salaireMensuel * 0.1;
let autresDepenses = 50;
autresDepenses += 25;
let totalDepenses = loyer + transport + autresDepenses + nourriture;
console.log("Votre total dépense est de : " + totalDepenses);
console.log("Le loyer mensuel est de : " + loyer);
console.log("Le transport mensuel est de : " + transport);
let reste = salaireMensuel - totalDepenses;
console.log(reste);
if (reste >= 100) {
  console.log("Budget bien géré");
} else {
  console.log("Attention, budget serré");
}

let loisir = salaireMensuel * 0.15;
totalDepenses += loisir;
reste = salaireMensuel - totalDepenses;
console.log("Après ajout des loisirs, il vous reste : " + reste);

let pourcentageLoyer = (loyer / salaireMensuel) * 100;
let pourcentageNourriture = (nourriture / salaireMensuel) * 100;
let pourcentageTransport = (transport / salaireMensuel) * 100;
let pourcentageAutresDepenses = (autresDepenses / salaireMensuel) * 100;
let pourcentageLoisir = (loisir / salaireMensuel) * 100;
console.log("Pourcentage du loyer : " + pourcentageLoyer + "%");
console.log("Pourcentage de la nourriture : " + pourcentageNourriture + "%");
console.log("Pourcentage du transport : " + pourcentageTransport + "%");
console.log(
  "Pourcentage des autres dépenses : " + pourcentageAutresDepenses + "%"
);
console.log("Pourcentage des loisirs : " + pourcentageLoisir + "%");

salaireMensuel *= 1.1;
loyer = salaireMensuel * 0.3;
nourriture = salaireMensuel * 0.2;
transport = salaireMensuel * 0.1;
autresDepenses = 75;
totalDepenses = loyer + transport + autresDepenses + nourriture;
loisir = salaireMensuel * 0.15;
totalDepenses += loisir;
reste = salaireMensuel - totalDepenses;
console.log(
  "Après une augmentation de 10% du salaire mensuel, il vous reste : " + reste
);
