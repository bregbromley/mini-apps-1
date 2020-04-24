console.log('i ran');



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
      ],
      currentPlayer: 'R',
      win: false
    }
  }

  myFunc(e) {
    if (this.state.win) {
      return
    }
    var x = e.dataset.x;
    var y = e.dataset.y;
    var board = this.state.board;
    var max = 5;
    for (var i = 0; i < board.length; i++) {
      if (board[i][y] !== 0) {
        max--;
      }
      console.log(max);
    }
    board[max][y] = this.state.currentPlayer;
    this.setState({board: board})
    var target = document.querySelector(`[data-x='${max}'][data-y='${y}']`)
    target.innerHTML = `${this.state.currentPlayer}`;
    var b = this.state.board;
    var c = this.state.currentPlayer;
    if (checkWinHor(b,c) || checkWinVir(b,c) || checkWinDi(b,c) || checkWinDiRe(b,c)) {
      console.log(`${c} WINS!!`);
      this.setState({win: true})
    }
    if (this.state.currentPlayer === 'R') {
      this.setState({currentPlayer: 'Y'})
    } else {
      this.setState({currentPlayer: 'R'})
    }
  }


  render(){
    var copyBoard = this.state.board;
    // console.log(copyBoard)
    return(
    <table bgcolor="FF5733" onClick={()=>{this.myFunc(event.target)}}>
      <tbody>
        <Row x={0} board={copyBoard}/>
        <Row x={1}/>
        <Row x={2}/>
        <Row x={3}/>
        <Row x={4}/>
        <Row x={5}/>
      </tbody>
    </table>
    )
  }
}

var checkWinHor = function(board, player) {
  var count = 0;
  var win = false;
  for (var i = 0; i < board.length; i++){
    for (var j = 0; j < board[i].length; j++){
      if (count === 4) {
        win = true;
      }
      if (board[i][j] === player) {
        count++
      } else {
        count = 0;
      }
    }
  }
  return win;
}

var checkWinVir = function(board, player) {
  var count = 0;
  var win = false;
  for (var i = 0; i < 7; i++){
    for (var j = 0; j < board.length; j++) {
      if (count === 4) {
        var win = true;
      }
      if (board[j][i] === player) {
        count++
      } else {
        count = 0;
      }
    }
  }
  return win;
}

var checkWinDi = function(board, player) {
  var win = false;
  for (var i = 0; i < 6; i++) {
    var row = i;
    var count = 0;
    for (var j = 0; j < 7; j++){
      var col = j;
      while (col < 7 && row < 6) {
        if (count === 4) {
          var win = true;
        }
        if (board[row][col] === player){
          count++
        } else {
          count = 0;
        }
        row++;
        col++;
      }
    }
    if (win){
      return true;
    }
  }
  return false
}

var checkWinDiRe = function(board, player) {
  var win = false;
  for (var i = 5; i >= 0; i--) {
    var row = i;
    var count = 0;
    for (var j = 0; j < 7; j++) {
      var col = j;
      while (col < 7 && row >= 0) {
        if (count === 4) {
          win = true;
        }
        if (board[row][col] === player) {
          count++
        } else {
          count = 0;
        }
        row--;
        col++;
      }
    }
    if (win) {
      return true;
    }
  }
  return false;
}

// 30,21,12,03
// 40,31,22,13,04
// 50,41,32,23,14,05
// 51,42,33,24,15,06
// 52,43,34,25,16
// 53,44,35,26

var Row = ({x, board}) => (
    <tr height='50'>
        <td width="50" bgcolor="FDFEFE" data-x={x} data-y={0}></td>
        <td width="50" bgcolor="FDFEFE" data-x={x} data-y={1}></td>
        <td width="50" bgcolor="FDFEFE" data-x={x} data-y={2}></td>
        <td width="50" bgcolor="FDFEFE" data-x={x} data-y={3}></td>
        <td width="50" bgcolor="FDFEFE" data-x={x} data-y={4}></td>
        <td width="50" bgcolor="FDFEFE" data-x={x} data-y={5}></td>
        <td width="50" bgcolor="FDFEFE" data-x={x} data-y={6}></td>
      </tr>
);


ReactDOM.render(<App />, document.getElementById('app'));