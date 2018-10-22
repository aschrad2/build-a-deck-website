$(document).ready(function() {
  var cards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
  var suits = ["clubs", "hearts", "aces", "spades"];
  
  // For each element of the suits array suit, then for each card, make the element then push it to cardList
  suits.forEach(function(suit) {
    // For each element of the cards array, add the suit to the card and " of ". Then, add that to the cardList array
    // Then create an element <li></li>, create a textnode of each element of the cardList array, and append the 
    // textnode into the <li></li> element. Finally, append that into myList.
    cards.forEach(function(card) {
      var cardList = [];
      cardList.push(card + " of " + suit);
      var node = document.createElement("LI");
      var textnode = document.createTextNode(cardList[0]);
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
    });
  });
});
