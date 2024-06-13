# Shiny Living Dex Google Sheets
Ce projet contient des scripts Google Apps Script destinés à enrichir une feuille de calcul Google Sheets avec des fonctionnalités liées à un Pokedex virtuel. Voici un aperçu détaillé des fonctionnalités disponibles :

# Scripts inclus :
1. affichage_pokedex.gs
    - Description : Ce script permet d'afficher le Pokedex pour une génération spécifique de Pokémon.
    - Fonctionnalités :
        - Affiche une boîte de dialogue permettant à l'utilisateur de sélectionner une génération de Pokémon (de 1 à 15).
        - Charge les données spécifiques de la feuille de calcul correspondante à la génération choisie.
        - Affiche les images des Pokémon avec des options de filtre pour les versions normales et shiny.
        - Utilise une barre de progression pour indiquer le pourcentage de Pokémon shiny dans la liste.

2. choix_pokemon_aleatoire.gs
    - Description : Ce script facilite le choix aléatoire d'un nom de Pokémon en fonction de critères définis dans différentes feuilles de calcul.
    - Fonctionnalités :
        - Surveille les modifications dans une feuille spécifique (Avancement Pokedex) pour détecter le besoin de relancer le choix d'un Pokémon.
        - Permet de choisir aléatoirement un nom de Pokémon parmi ceux qui répondent à des critères spécifiques (par exemple, marqués comme "A farm").
        - Fournit une fonction pour trouver le nom anglais correspondant à un nom français donné, en explorant les différentes feuilles de calcul pour la correspondance.

3. nom_onglets.gs
    - Description : Ce script fournit des fonctions utilitaires pour obtenir des informations sur les onglets (feuilles) présents dans la feuille de calcul active.
    - Fonctionnalités :
        - Permet d'obtenir la liste des noms de tous les onglets présents dans la feuille de calcul active.
        - Fournit une fonction pour récupérer le nom d'un onglet spécifique en fonction de son index.

# Utilisation
Pour utiliser ces scripts avec votre propre feuille de calcul Google Sheets :
1. Configuration initiale :
    - Créez une nouvelle feuille de calcul Google Sheets ou utilisez une existante.
    - Copiez le contenu de chaque script (affichage_pokedex.gs, choix_pokemon_aleatoire.gs, nom_onglets.gs) dans l'éditeur de script associé à votre feuille de calcul :
    - Ouvrez votre feuille de calcul.
    - Allez dans le menu "Extensions" -> "Apps Script".
    - Collez le script correspondant dans l'éditeur de script et sauvegardez-le.

2. Déclencheurs (Triggers) :
    - Configurez des déclencheurs pour automatiser l'exécution des scripts selon vos besoins :
    - Par exemple, utilisez ScriptApp.newTrigger('nom_de_la_fonction').timeBased().everyDays(1).create() pour mettre à jour automatiquement le Pokedex chaque jour.

3. Personnalisation et ajustement :
    - Personnalisez les scripts en fonction de vos préférences et des données spécifiques à votre feuille de calcul.
    - Modifiez les noms d'onglets et les critères de sélection de Pokémon selon vos besoins particuliers.

# Exemple de configuration
Un exemple de configuration type de feuille de calcul est fourni dans ce dépôt GitHub pour vous aider à démarrer rapidement avec les scripts et leur utilisation. Assurez-vous d'avoir les autorisations nécessaires pour accéder et modifier la feuille de calcul associée à ces scripts.

Lien vers la feuille type:
    - https://docs.google.com/spreadsheets/d/14zgiVrEq1io3lgKCHc0gOt9k-d3sb7qxHgN2Ae9BwQc/edit?usp=sharing

# Auteur
Ce projet a été développé par Clément Vongsanga. Pour toute question, suggestion ou contribution, n'hésitez pas à ouvrir une issue ou à proposer une pull request sur GitHub.
