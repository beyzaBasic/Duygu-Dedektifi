/* eslint-disable no-unused-vars */
var PLAYER_ANIMALS = ['🦊','🐸','🐯','🐧','🦄','🐙','🦁','🐺'];

var PLAYER_GRADS = [
  'linear-gradient(135deg,#FF6B7A,#E63946)',
  'linear-gradient(135deg,#FF8C42,#FF6B00)',
  'linear-gradient(135deg,#FFC93C,#F4A400)',
  'linear-gradient(135deg,#2ED573,#1DB954)',
  'linear-gradient(135deg,#2E9CFF,#0072F5)',
  'linear-gradient(135deg,#B14AED,#7B2FBE)',
  'linear-gradient(135deg,#FF4757,#B14AED)',
  'linear-gradient(135deg,#3D5AFE,#2E9CFF)',
];

function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}
