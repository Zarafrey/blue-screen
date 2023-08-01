function onOpen() {
  var ui = DocumentApp.getUi();
  ui.createMenu("Zara's Scripts")
    .addItem('Blue Screen!', 'insertBlueScreen')
    .addToUi();
}

function insertBlueScreen() {
  // Getting the document / location for the insert
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var cursor = doc.getCursor();  
  var cursorPos = body.getChildIndex(cursor.getElement());

  // Setting our insert's value: A table with blue background, Comfortaa text, a bold Title, and a plain Text.
  var text ="Title" + "\n" + "Text";

  if (cursor) {
    // Initial Table Setup + add text.
    var myTable = body.insertTable(cursorPos);
    var myTableRow = myTable.appendTableRow();
    var myTableCell = myTableRow.appendTableCell(text);

    // Background color. Blue screen, duh
    var lightCornflowerBlue2 = "#a4c2f4";
    myTableCell.setBackgroundColor(lightCornflowerBlue2);

    // Center align both lines
    myTableCell.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    myTableCell.getChild(1).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER);

    // Text Bold for title, and font for both
    myTableCell.getChild(0).asText().setBold(true);
    myTableCell.getChild(0).asText().setFontFamily("Comfortaa");
    myTableCell.getChild(1).asText().setFontFamily("Comfortaa");
  }
}
