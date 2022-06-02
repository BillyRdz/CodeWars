const instuctions = `You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'`;

let answer = `function defineSuit(card) {
  if (card.includes('♣')) {
    return "clubs";
  }
  else if (card.includes('♦')) {
    return "diamonds";
  }
  else if (card.includes('♥')) {
    return "hearts";
  }
  else if (card.includes('♠')) {
    return "spades";
  }
}`;

let arrowAnswer = `const defineSuit = card => {
  if (card.includes('♣')) {
    return "clubs";
  }
  else if (card.includes('♦')) {
    return "diamonds";
  }
  else if (card.includes('♥')) {
    return "hearts";
  }
  else if (card.includes('♠')) {
    return "spades";
  }
}`;

console.log(instuctions);
console.log(answer);
console.log(arrowAnswer);
