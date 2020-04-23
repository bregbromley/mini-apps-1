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
      ]
    }
  }


  render(){
    return(
    <table>
      <tbody>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </tbody>
    </table>
    )
  }
}

var Row = () => (
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
      </tr>
);

ReactDOM.render(<App />, document.getElementById('app'));