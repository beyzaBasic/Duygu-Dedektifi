/* eslint-disable no-unused-vars */
var MAX_PLAYERS = 40;

var PLAYER_ANIMALS = [
  '🦊','🐸','🐯','🐧','🦄','🐙','🦁','🐺',
  '🐰','🐼','🐨','🐮','🐷','🐵','🐔','🦆',
  '🦅','🦉','🦇','🐝','🦋','🐬','🐳','🐠',
  '🐢','🐍','🦎','🦖','🦕','🦑','🦀','🐡',
  '🦓','🦒','🐘','🦏','🐪','🦘','🦔','🦦',
];

var PLAYER_GRADS = [
  'linear-gradient(135deg,#FF6B7A,#E63946)',
  'linear-gradient(135deg,#FF8C42,#FF6B00)',
  'linear-gradient(135deg,#FFC93C,#F4A400)',
  'linear-gradient(135deg,#2ED573,#1DB954)',
  'linear-gradient(135deg,#2E9CFF,#0072F5)',
  'linear-gradient(135deg,#B14AED,#7B2FBE)',
  'linear-gradient(135deg,#FF4757,#B14AED)',
  'linear-gradient(135deg,#3D5AFE,#2E9CFF)',
  'linear-gradient(135deg,#00C2A8,#0091AD)',
  'linear-gradient(135deg,#F857A6,#FF5858)',
  'linear-gradient(135deg,#7B4DFF,#B14AED)',
  'linear-gradient(135deg,#1DD3B0,#2ED573)',
  'linear-gradient(135deg,#FFA62E,#FF6B7A)',
  'linear-gradient(135deg,#5C6BC0,#3D5AFE)',
  'linear-gradient(135deg,#FF7AC3,#B14AED)',
  'linear-gradient(135deg,#23A6D5,#23D5AB)',
  'linear-gradient(135deg,#FF8C42,#FFC93C)',
  'linear-gradient(135deg,#6A82FB,#FC5C7D)',
  'linear-gradient(135deg,#11998E,#38EF7D)',
  'linear-gradient(135deg,#E84393,#6C5CE7)',
];

function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}
