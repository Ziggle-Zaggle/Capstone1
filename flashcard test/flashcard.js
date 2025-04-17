function Card(term, definition, category) {
    this.term = term;
    this.definition = definition;
    //this.category = category;
  }
  var newDeck = [];
  var newCard;
  var front = document.getElementById("front");
  var back = document.getElementById("back");
  var flip = document.getElementById("flip");
  var submit = document.getElementById("submit");
  var clearDeck = document.getElementById("clearDeck");
  var formFront, formBack;
  
  function slideIn(){
    $('#importExport').animate({'left':'10px'},500);
          
      };
  function slideOut(){
          $('#importExport').animate({'left':'-610px'},500);
      };
  var card1 = new Card(
    "Lexical Environment",
    "Where code sits in relation to any surrounding code",
    "General"
  );
  var card2 = new Card(
    "Execution Context",
    "How, Why, When, and Where code is executed",
    "General"
  );
  var card3 = new Card(
    "JSON",
    "JavaScript Object Notation, for storing objects and their enclosed data. Often referred to as Key Value Pairs",
    "Objects"
  );
  
  var myCards = [card1, card2, card3];
  var cardIndex = 0;
  
  front.innerHTML = card1.term;
  back.innerHTML = card1.definition;
  back.style.visibility = "hidden";
  function showHideLightText() {
      let d =document.getElementsByClassName('lightText')[0];
      let el = document.getElementsByClassName('showHideHotkeysButton')[0];
      if (d.classList.contains('hide')) {
           d.classList.remove('hide')
           } else {
                   d.classList.add('hide')
  
      }
      if (el.classList.contains('hide')) {
          el.classList.remove('hide')
  
      } else {
  
          el.classList.add('hide')
      }
  }
  function flash() {
    if (front.style.visibility != "hidden") {
      front.style.visibility = "hidden";
      back.style.visibility = "visible";
    } else {
      front.style.visibility = "visible";
      back.style.visibility = "hidden";
    }
  }

  
  function nextCard() {
    cardIndex = (cardIndex + 1) % myCards.length;
    front.innerHTML = myCards[cardIndex].term;
    back.innerHTML = myCards[cardIndex].definition;
  }
  function prevCard() {
    if (cardIndex > 0)
      cardIndex = (cardIndex - 1);
    else if (cardIndex == 0) cardIndex = myCards.length-1;
    front.innerHTML = myCards[cardIndex].term;
    back.innerHTML = myCards[cardIndex].definition;
  
  }
  
      document.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode == 37 ) {
          prevCard();
      }
      if (event.keyCode == 39 ) {
          nextCard();
      }
      if (event.keyCode == 38 || event.keyCode == 40) {
        flash();
      }
      if (event.keyCode == 46) {
        emptyDeck();
      }
      // if (event.keyCode == 9 && !(document.activeElement == document.getElementById("newTerm")) {
      //     document.getElementById("newTerm");
      //     }
  });
  function cardSelect(myCards, cardIndex) {
    var selectCards = document.getElementById("selectCards");
    var options = selectCards.appendElement("")
    options.map(myCards.keys);
  }
 