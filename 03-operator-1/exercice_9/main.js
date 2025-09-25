// Exercice 9
// Écrivez votre code ici
let valMaison = 60000000;
let valTerrain = 40000000;
let liquidites = 20000000;
let totalHeritage = valMaison + valTerrain + liquidites;
let partCategorie1 = totalHeritage * 0.75;
let partCategorie2 = totalHeritage * 0.25;
let paul = partCategorie1 / 3;
let marie = paul;
let eric = paul / 2;
let clair = eric;
let madameMukuna = partCategorie2 / 3;
let joseph = madameMukuna;
let sarah = madameMukuna;

module.exports = { paul, marie, eric, clair, madameMukuna, joseph, sarah };
