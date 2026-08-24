# Shiny Living Dex – Google Sheets

A Google Apps Script toolkit that turns a Google Sheets spreadsheet into an interactive Pokédex tracker for building a **Shiny Living Dex** (a collection containing one shiny Pokémon of every species).

## Features

- **Pokédex viewer** — Browse Pokémon by generation (1 to 15) or view all generations at once, with normal/shiny image filtering and a progress bar showing shiny completion percentage.
- **Random Pokémon picker** — Automatically suggests a random Pokémon to farm next, based on completion criteria tracked in a dedicated sheet, and watches that sheet for changes to trigger a new pick.
- **Sheet utilities** — Helper functions to list and retrieve spreadsheet tab names, used internally by the other scripts.

## Scripts

| File | Purpose |
|---|---|
| `affichage_pokedex.js` | Displays the Pokédex for a chosen generation (or all of them), with shiny/normal image filtering and a shiny-completion progress bar. |
| `choix_pokemon_aleatoire.js` | Randomly selects a Pokémon to farm based on tracked criteria, and maps French ↔ English Pokémon names across sheets. |
| `nom_onglets.js` | Utility functions to retrieve sheet/tab names and indexes within the active spreadsheet. |

## Demo

_Add a screenshot or short GIF here showing the Pokédex view and the shiny-completion progress bar._

## Getting started

1. **Get the template spreadsheet**
   Duplicate the [example spreadsheet](https://docs.google.com/spreadsheets/d/14zgiVrEq1io3lgKCHc0gOt9k-d3sb7qxHgN2Ae9BwQc/edit?usp=sharing) into your own Google Drive, or use `Shiny Living Dex.xlsx` from this repo as a starting template with an equivalent structure.

2. **Add the scripts**
   In your spreadsheet, go to `Extensions > Apps Script`, then create a script file for each `.js` file in this repo and paste its content in.

3. **(Optional) Automate updates**
   Set up a time-based trigger to refresh the Pokédex automatically, e.g.:
   ```javascript
   ScriptApp.newTrigger('functionName')
     .timeBased()
     .everyDays(1)
     .create();
   ```

4. **Customize**
   Adjust tab names and selection criteria in the scripts to match your own spreadsheet layout.

## Tech stack

- Google Apps Script (JavaScript)
- Google Sheets

## Author

Developed by [Clément Vongsanga](https://github.com/Synergy-XVortex). Questions, suggestions, and pull requests are welcome.
