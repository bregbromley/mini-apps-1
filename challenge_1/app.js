console.log('IM WORKING');

var consoleLog = function(e) {
  console.log('e: ', e.innerHTML);
}

var previousWinner;

var win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
var calculateWin = function(player) {
  for (var i = 0; i < win.length; i++) {
    var count = 0;
    for (var j = 0; j < win[i].length; j++) {
      var box = document.getElementById(`${win[i][j]}`)
      if (box.innerHTML === player) {
        count++
      }
      if (count === 3) {
        return true;
      }
    }
  }
  return false;
}

var handleWin = function(player) {
  var wins = document.getElementById(player).innerHTML;
  document.getElementById(player).innerHTML = parseInt(wins) + 1;
  setTimeout(function(){alert(`${player} WINS!!!!`)}, 0);
}



var counter = 0;
var myFunc = function(box) {
  console.log('click ran')
  if (calculateWin('X') || calculateWin('O') || box.innerHTML.length) {
    return;
  }
  if (box.innerHTML.length){
    return;
  }
  if (counter % 2 === 0 || counter === 0) {
    box.innerHTML = "X";
    if (calculateWin('X')) {
      console.log('X wins!');
      counter = 1;
      handleWin('X')
    }
  } else if (counter % 2 !== 0) {
    box.innerHTML = "O";
    if (calculateWin('O')) {
      console.log('O wins!')
      counter = 0;
      handleWin('O');
    }
  }
  counter++;
}

var resetGame = function() {
  for (var i = 1; i < 10; i++) {
    var current = document.getElementById(i);
    if (current.innerHTML) {
      current.innerHTML = "";
    }
  }
}
