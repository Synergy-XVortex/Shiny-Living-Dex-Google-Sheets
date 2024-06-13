function onEdit(e) {
  var feuille = e.source.getActiveSheet();
  var celluleModifiee = e.range;

  if (feuille.getName() == "Avancement Pokedex" && celluleModifiee.getA1Notation() == "N8" && celluleModifiee.getValue() == "Relancer") {
    relancerChoix();
    celluleModifiee.clearContent(); // Efface le contenu de la cellule
    celluleModifiee.setValue("Nouveau"); // Remplace par "Nouveau"
  }
}

function relancerChoix() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var cell = sheet.getRange('N3');

  var formule = cell.getFormula();
  cell.setFormula('');
  SpreadsheetApp.flush();

  cell.setFormula(formule);
}

function choisirNomAleatoire() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = spreadsheet.getSheets();
  var noms = [];

  for (var s = 1; s < sheets.length; s++) { // Commence à la deuxième feuille
    var data = sheets[s].getDataRange().getValues();
    
    for (var i = 0; i < data.length; i++) {
      if (data[i][3] === "A farm") { // Vérifie la quatrième colonne (indice 3)
        noms.push(data[i][1]); // Deuxième colonne (indice 1) pour le nom
      }
    }
  }

  if (noms.length === 0) {
    return "Aucune mention 'A farm' trouvée dans les feuilles.";
  }

  var randomName = noms[Math.floor(Math.random() * noms.length)];
  
  Logger.log("Nom aléatoire choisi : " + randomName);
  return randomName;
}

function trouverNomAnglais(nomFrancais) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = spreadsheet.getSheets();
  var nomAnglais = "";

  for (var s = 1; s < sheets.length; s++) { // Commence à la deuxième feuille
    var range = sheets[s].getRange('B:C');
    var data = range.getValues();

    for (var i = 0; i < data.length; i++) {
      var nomFr = data[i][0] ? data[i][0].toString().toLowerCase().trim() : ""; // Vérifie si la valeur dans la colonne B est définie

      if (nomFr && nomFr === nomFrancais.toLowerCase().trim()) { // Vérifie si la valeur dans la colonne B correspond au nom français
        var nomEn = data[i][1] ? data[i][1].toString().trim() : ""; // Récupère le nom anglais correspondant
        return nomEn;
      }
    }
  }

  if (nomAnglais === "") {
    return "Nom anglais non trouvé pour '" + nomFrancais + "'.";
  }
}

