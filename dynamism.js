
'use strict';

var cards      = [],
    cardCursor = 0;  // does not decrease as deleted

function byId(X)     { return document.getElementById(X); }
function genCardId() { return 'card_' + ((++cardCursor).toString()); }





function addcard() {

  var newIdx  = cards.length,
      cardId  = genCardId(),

      cardBox = document.createElement('div'),
      card    = document.createElement('div'),

      front   = document.createElement('div'),
      fronttx = document.createElement('p'),     // card front text
      frontbt = document.createElement('input'), // card front button 

      back    = document.createElement('div'),
      backtx  = document.createElement('p'),
      backbt  = document.createElement('input'),

      flipper = () => card.classList.toggle('flipped');

  cards.push(cardId);

  cardBox.className = 'cardbox';
  front.className   = 'cardfront';
  back.className    = 'cardback';
  card.className    = 'card'

  fronttx.innerHTML = 'I am the front\'s text, rahr';
  backtx.innerHTML  = 'I am the back\'s text, rahr';

  frontbt.value     = 'flip';
  frontbt.type      = 'button';
  frontbt.onclick   = flipper;

  backbt.value      = 'flip';
  backbt.type       = 'button';
  backbt.onclick    = flipper;

  card.id           = cardId;

  front.appendChild(fronttx);
  front.appendChild(frontbt);

  back.appendChild(backtx);
  back.appendChild(backbt);

  card.appendChild(front);
  card.appendChild(back);
  cardBox.appendChild(card);

  byId('board').appendChild(cardBox); 

}





function hookInputs() {
  byId('addcard').onclick = function() { addcard(); }
}

function startup() {
  hookInputs();
}

window.onload = startup;
