function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Pokedex')
    .addItem('Afficher Pokedex', 'showPokedex')
    .addToUi();
}

function showPokedex() {
  var ui = SpreadsheetApp.getUi();
  var result = ui.prompt('Pokedex', 'Entrez le numéro de génération (1-15) ou 0 pour quitter:', ui.ButtonSet.OK_CANCEL);

  if (result.getSelectedButton() == ui.Button.OK) {
    var selectedGeneration = parseInt(result.getResponseText());
    
    if (selectedGeneration >= 1 && selectedGeneration <= 15) {
      displayPokedex(selectedGeneration);
    } else if (selectedGeneration === 0) {
      ui.alert('Pokedex', 'Fermeture du Pokedex.', ui.ButtonSet.OK);
    } else {
      ui.alert('Erreur', 'Numéro de génération invalide.', ui.ButtonSet.OK);
    }
  }
}

function displayPokedex(selectedGeneration) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Récupérer le nom de la feuille de calcul correspondante à partir de la liste feuille
  var sheetNames = [
    "Première Génération", "Deuxième Génération", "Troisième Génération", "Quatrième Génération", "Cinquième Génération", "Sixième Génération",
    "Septième Génération", "Huitième Génération", "Neuvième Génération", "Formes Zarbi", "Formes Alola", "Formes de Galar", "Formes Hisui",
    "Formes de Paldea", "Formes Alternatives"
  ];

  var sheetName;
  if (selectedGeneration >= 1 && selectedGeneration <= sheetNames.length) {
    sheetName = sheetNames[selectedGeneration - 1];
  } else {
    SpreadsheetApp.getUi().alert('Erreur', 'Numéro de génération invalide.', SpreadsheetApp.getUi().ButtonSet.OK);
    return;
  }

  // Accéder à la feuille de calcul correspondante
  var dataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

  if (!dataSheet) {
    SpreadsheetApp.getUi().alert('Erreur', 'Feuille de génération introuvable.', SpreadsheetApp.getUi().ButtonSet.OK);
    return;
  }

  // Charger les données de la feuille de calcul
  var lastRow = dataSheet.getLastRow();
  var dataRange = dataSheet.getRange(2, 1, lastRow - 1, 4); // Supposer que les données commencent à la ligne 2
  var data = dataRange.getValues();

  // Compter le nombre de Pokémon Shiny
  var shinyCount = 0;

  // Créer une boîte de dialogue pour afficher les informations
  var htmlOutput = HtmlService.createHtmlOutput('<h1>Pokedex - ' + sheetName + '</h1>')
      .setWidth(950)
      .setHeight(550);

  // Ajouter le CSS pour le style
  htmlOutput.append('<style>img { width: 96px; height: 96px; object-fit: cover; }</style>');
  htmlOutput.append('<style>img.normal { filter: grayscale(100%); }</style>');
  htmlOutput.append('<style>#progressBar { width: 100%; height: 20px; background-color: #eee; position: relative; overflow: hidden; }</style>');
  htmlOutput.append('<style>#progressFill { height: 100%; position: absolute; transition: width 0.5s; }</style>');
  htmlOutput.append('<style>#greenFill { background-color: #4caf50; height: 100%; }</style>');
  htmlOutput.append('<style>#redFill { background-color: #ff0000; height: 100%; }</style>');
  htmlOutput.append('<style>#percentageText { font-size: 16px; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); color: #ffffff; }</style>');

  // Ajouter la barre de progression
  htmlOutput.append('<div id="progressBar"><div id="progressFill"><div id="greenFill"></div><div id="redFill"></div></div><div id="percentageText">0%</div></div>');

  // Ajouter les données au HTML
  for (var i = 0; i < data.length; i++) {
    var pokemonName = data[i][1];
    var isShiny = data[i][3] === "Oui";
    var imageUrl;

    // Utiliser le contenu de la colonne C pour construire l'URL de l'image
    var pokemonCode = data[i][2].toLowerCase();
    if (isShiny) {
      imageUrl = 'https://img.pokemondb.net/sprites/home/shiny/2x/' + pokemonCode + '.jpg';
      shinyCount++;
    } else {
      imageUrl = 'https://img.pokemondb.net/sprites/home/normal/2x/' + pokemonCode + '.jpg';
    }

    // Ajouter l'image avec la classe appropriée
    var imgClass = isShiny ? '' : 'class="normal"';
    htmlOutput.append('<img src="' + imageUrl + '" alt="' + pokemonName + '" ' + imgClass + '>');

    // Mettre à jour la barre de progression
    var progress = shinyCount / data.length * 100;
    htmlOutput.append('<script>document.getElementById("progressFill").style.width = "' + progress + '%";</script>');
    htmlOutput.append('<script>document.getElementById("percentageText").textContent = "' + Math.round(progress) + '%";</script>');
  }

  // Afficher la boîte de dialogue
  SpreadsheetApp.getUi().showModelessDialog(htmlOutput, 'Pokedex - ' + sheetName);
}
