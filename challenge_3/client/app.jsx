
class App extends React.Component {
  constructor(props) {
    super(props) ;
  }

  render() {
    console.log('I ran');
    return (
      <div>
        I AM RENDERING!!!!
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));