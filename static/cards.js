  var match = [];
  var matchcount = 0;
  
var createDeck = function() {
// based on code from http://www.brainjar.com/js/cards/default2.asp

  var ranks = ["A", "J", "Q", "K"];
  var suits = ["♥", "♠"];
  var j, k, index=0;
  var pack_size;

  // Set array of cards.
  // total number of cards
  pack_size = ranks.length * suits.length;
  var cards = [];
  //var turns = [];
  //var maxturns = [];
  //var audio = document.createElement('audio');
  //audio.src = 'coin-drop-1.mp3';
  //audio.id = 'audio';
  //var bod = document.getElementById('bod');
  //bod.appendChild(audio);
  
  //var audio1 = document.createElement('audio');
  //audio1.src
  
  //audio.play();
  

  // Fill the array with 'n' packs of cards.
  while (index < pack_size){
    for (j = 0; j < suits.length; j++){
       for (k = 0; k < ranks.length; k++){
          console.log("k:",k,"index:",index);
          cards[index] = {rank:ranks[k], suite:suits[j]};
          index++;
          }
       }
    }
  console.log(cards.length);
  return cards;
};
var showCards = function(cardJSON) {
txt = cardJSON.rank + cardJSON.suite;    

var cardback= document.createElement("div");
cardback.style.backgroundImage ="url('cat.jpg')";
//cardback.style.backgroundColor= "red";//
cardback.className = 'cardback';

var cardfront= document.createElement("div");
cardfront.textContent = txt;
cardfront.className = 'cardfront';
//cardfront.style.backgroundColor= "red";//

var card2= document.createElement("div");
card2.className = "flipper";

//var save= document.createElement("div");
//save.className = "save";

//var restart=document.createElement("div");
//restart.className = "restart";

card2.setAttribute("onclick", "flipper(this)");

console.log(cardfront);
console.log(cardback);
console.log(card2);
console.log (save);
console.log(restart);

card2.appendChild(cardfront);
card2.appendChild(cardback);


document.querySelector(".sideBox").appendChild(card2);
//document.querySelector(".sideBox").appendChild(save);
//document.querySelector(".sideBox").appendChild(restart);

};

//alert('Hey');
var showDeck = function(deck){
    var idx;
    for (idx = 0; idx < deck.length; ++idx) {
            console.log("so far, so good",deck[idx]);
            showCards(deck[idx]);
    }
};
window.onload=function()

{
var deck = createDeck();
var deck3 = createDeck();
var card= deck.sort( function(){ return 0.5 - Math.random()});
var card3 =deck3.sort( function(){ return 0.5 - Math.random()});
showDeck(card);
showDeck(card3);



};


//document.body.appendChild('audio');
function flipper(flipme){
    if(flipme.classList.contains('turned'))
    {
        return ;
    }
    else
    {
        flipme.classList.add('turned');
        flipme.querySelector(".cardback").setAttribute("class", "click cardback");
        flipme.querySelector(".cardfront").setAttribute("class", "click cardfront");
        
        var cardinfo = flipme.querySelector(".cardfront").textContent;
        if(matchcount ===0 || matchcount === 1)
        {
            match[matchcount] = flipme;
            matchcount++;
            
            if(match[0].querySelector(".cardfront").textContent==match[1].querySelector(".cardfront").textContent)
            {
                alert('They Matched');
                match=[];
            }
            else
            {
                
                alert('No Match');
                match[0].querySelector(".cardfront").classList.remove('click');
                match[0].querySelector(".cardback").classList.remove('click');
                match[1].querySelector(".cardfront").classList.remove('click');
                match[1].querySelector(".cardback").classList.remove('click');
                match[0].classList.remove('turned');
                match[1].classList.remove('turned');
                match = [];
            matchcount = 0;
            }
            match = [];
            matchcount = 0;
        }

    //flipme.querySelector()
    //flipme.querySelector(".cardfront").classList.add('click cardfront');
    //document.getElementById("audio").play();
    }
}
function user(){
    var y;
    //var supportStorage = 'false';
    
    var name= prompt("Enter your name please:");
    
    if (name!== null){
        y= "Hello" +" "+ name +"! Are you ready to win?!";
        document.getElementById("save").innerHTML=y;
        
        
    }
}

function resetGame()
{
    location.reload();
}
