function getSheetNames() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheetNames = spreadsheet.getSheets().map(function(sheet) {
    return sheet.getName();
  });
  return sheetNames;
}

function getSheetNameByIndex(index) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = spreadsheet.getSheets();
  
  if (index >= 0 && index < sheets.length) {
    return sheets[index].getName();
  } else {
    return "Index hors limite";
  }
}
