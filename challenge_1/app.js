console.log('IM WORKING');

var playerX = 'X';
var playerO = 'O';
var turn = 'X'

var calculateWin = function(player) {
  var win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
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

var calculateTie = function() {
  var count = 0;
  for (var i = 1; i < 10; i++) {
    if (document.getElementById(i).innerHTML.length) {
      count++
    }
  }
  if (count === 9) {
    return true;
  }
  return false;
}

var handleWin = function(player) {
  var wins = document.getElementById(player).innerHTML;
  document.getElementById(player).innerHTML = parseInt(wins) + 1;
  if (player === 'X') {
    setTimeout(function(){alert(`${playerX} WINS!!!!`)}, 0);
    document.getElementById('turn').innerHTML = playerX;
  } else {
    setTimeout(function(){alert(`${playerO} WINS!!!!`)}, 0);
    document.getElementById('turn').innerHTML = playerO;
  }
}



var counter = 0;
var myFunc = function(box) {
  if (calculateWin('X') || calculateWin('O') || box.innerHTML.length) {
    return;
  }
  if (counter % 2 === 0 || counter === 0) {
    box.innerHTML = "X";
    document.getElementById('turn').innerHTML = playerO;
    if (calculateWin('X')) {
      console.log('X wins!');
      console.log(`${playerX} WINS!!!!`);
      counter = 1;
      handleWin('X')
    } else if (calculateTie()) {
      setTimeout(function(){alert('ITS A TIE!!')})
    }
  } else if (counter % 2 !== 0) {
    box.innerHTML = "O";
    document.getElementById('turn').innerHTML = playerX;
    if (calculateWin('O')) {
      console.log('O wins!')
      console.log(`${playerO} WINS!!!!`);
      counter = 0;
      handleWin('O');
    } else if (calculateTie()){
      setTimeout(function(){alert('ITS A TIE!!')})
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

var submitName = function(input) {
  var name = document.getElementById(`${input}input`).value;
  var newText = `${input}: ${name} = `
  document.getElementById(`${input}name`).innerHTML = newText;
  if (input === 'X') {
    playerX = name;
  } else {
    playerO = name;
  }
}