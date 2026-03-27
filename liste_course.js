const entreeUser = require("readline");

const articles = [
  "T-shirt",
  "Pantalon",
  "Chaussures",
  "Casquette",
  "Sweat à capuche",
];
const prix = [19.99, 39.99, 59.99, 14.99, 49.99];

function afficherArticles() {
  console.log("\n--- Liste des articles ---");
  for (let i = 0; i < articles.length; i++) {
    console.log("le nom: " + articles[i] + " | le prix: " + prix[i] + "€");
  }
  console.log("-------------------------\n");
}

function calculerTotal() {
  let total = 0;
  for (let i = 0; i < prix.length; i++) {
    total = total + prix[i];
  }
  return total;
}

function ajouterArticle(rl, callback) {
  rl.question("Entrez un article: ", (reponse1) => {
    articles.push(reponse1);
    rl.question("Entrez un prix: ", (reponse2) => {
      prix.push(parseFloat(reponse2));
      console.log("\nArticle ajouté !\n");
      callback();
    });
  });
}

function chercheArticle(rl, callback) {
  rl.question("Entrez un article à chercher: ", (reponse) => {
    let trouve = false;
    for (let i = 0; i < articles.length; i++) {
      if (reponse === articles[i]) {
        trouve = true;
      }
    }
    if (trouve) {
      console.log("\n" + reponse + " existe dans la liste !\n");
    } else {
      console.log("\n" + reponse + " n'existe pas dans la liste.\n");
    }
    callback();
  });
}

function afficherMenu(rl) {
  console.log("=== MENU ===");
  console.log("1. Afficher les articles");
  console.log("2. Ajouter un article");
  console.log("3. Chercher un article");
  console.log("4. Calculer le total");
  console.log("5. Quitter");
  console.log("============");

  rl.question("Choisissez une option: ", (choix) => {
    if (choix === "1") {
      afficherArticles();
      afficherMenu(rl);
    } else if (choix === "2") {
      ajouterArticle(rl, () => afficherMenu(rl));
    } else if (choix === "3") {
      chercheArticle(rl, () => afficherMenu(rl));
    } else if (choix === "4") {
      console.log("\nTotal: " + calculerTotal() + "€\n");
      afficherMenu(rl);
    } else if (choix === "5") {
      console.log("Au revoir !");
      rl.close();
    } else {
      console.log("\nOption invalide, réessayez.\n");
      afficherMenu(rl);
    }
  });
}

const rl = entreeUser.createInterface({
  input: process.stdin,
  output: process.stdout,
});

afficherMenu(rl);