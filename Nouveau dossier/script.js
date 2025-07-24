 // Prix des produits (en dinars)
const prixProduits = {
  tomates: 2,   // 2 dt par kilo
  lait: 1.5,    // 1.5 dt par litre
  oeufs: 0.3    // 0.3 dt par œuf
};

function calculerPrix() {
  const produit = document.getElementById('produit').value;
  const quantite = Number(document.getElementById('quantite').value);
  const nom = document.getElementById('nom').value.trim();

  if (quantite <= 0 || isNaN(quantite)) {
    alert("Veuillez saisir une quantité valide !");
    return;
  }

  const prixUnitaire = prixProduits[produit];
  const prixTotal = prixUnitaire * quantite;

  const resultat = document.getElementById('resultat');
  resultat.textContent = `${nom}, le prix total pour votre commande de ${quantite} ${produit} est de ${prixTotal.toFixed(2)} DT. Merci !`;
}
