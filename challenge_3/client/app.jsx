
// class App extends React.Component {
//   constructor(props) {
//     super(props) ;
//   }

//   render() {
//     console.log('I ran');
//     return (
//       <div>
//         I AM RENDERING!!!!
//       </div>
//     )
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props) ;
    this.state = {
      step: 1,
      name: '',
      email: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
      card: '',
      exp: '',
      cvv: '',
      bzip: ''
    }
  }

  clickHandler() {
    console.log('iran');
    if (this.state.step < 3) {
      this.setState({step: this.state.step +1})
    }
    console.log(this.state.step);
  }

  changeHandler(e) {
    console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state);
  }

  submitHandler() {
    console.log('i ran');
    $.ajax({
      url:'/userdata',
      type: 'POST',
      data: this.state,
      success: function(data){ $("#response").html(data);
        console.log('success')
      },
      error: function(data) {
        console.log('ERROR DATA: ', data.responseText);
        alert(`ERROR status code: ${data.status}`);
      }
    });
  }

  render() {
    if (this.state.step === 1) {
      return (
        <F1 clickHandler={this.clickHandler.bind(this)} changeHandler={this.changeHandler.bind(this)}/>
      )
    } else if (this.state.step === 2) {
      return (
        <F2 clickHandler={this.clickHandler.bind(this)} changeHandler={this.changeHandler.bind(this)}/>
      )
    } else if (this.state.step === 3) {
      return (
        <F3 clickHandler={this.clickHandler.bind(this)} changeHandler={this.changeHandler.bind(this)} submitHandler={this.submitHandler.bind(this)}/>
      )
    } else if (this.state.step === 4) {
      <Summary />
    }

  }
}

var F1 = ({clickHandler, changeHandler}) => (
  <div>
    <h2>Account Creation</h2>
    <form>
      <label >Full name:</label><br></br>
      <input onChange ={changeHandler} type="text" id="name" name="name"></input><br></br>
      <label >Email:</label><br></br>
      <input onChange ={changeHandler} type="text" id="email" name="email"></input><br></br>
      <label >Password:</label><br></br>
      <input onChange ={changeHandler} type="password" id="password" name="password"></input><br></br>
      {/* <input type="submit" id="submit" value="next"></input> */}
    </form><br></br>
    <button onClick={clickHandler}>Next??</button>
  </div>
);

var F2 = ({clickHandler, changeHandler}) => (
  <div>
    <form>
      <label >Address:</label><br></br>
      <input onChange ={changeHandler} type="text" id="line1" name="line1"></input><br></br>
      <input onChange ={changeHandler} type="text" id="line2" name="line2"></input><br></br>
      <label >City:</label><br></br>
      <input onChange ={changeHandler} type="text" id="city" name="city"></input><br></br>
      <label >State:</label><br></br>
      <input onChange ={changeHandler} type="text" id="state" name="state"></input><br></br>
      <label >Zip code:</label><br></br>
      <input onChange ={changeHandler} type="text" id="zip" name="zip"></input><br></br>
      {/* <input type="submit" id="submit" value="next"></input> */}
    </form>
    <button onClick={clickHandler}>Next??</button>
  </div>
);

var F3 = ({clickHandler, changeHandler, submitHandler}) => (
  <div>
    <form>
      <label >Credit card #:</label><br></br>
      <input onChange ={changeHandler} type="text" id="card" name="card"></input><br></br>
      <label >Exparation date:</label><br></br>
      <input onChange ={changeHandler} type="text" id="exp" name="exp"></input><br></br>
      <label >CVV:</label><br></br>
      <input onChange ={changeHandler} type="number" id="cvv" name="cvv"></input><br></br>
      <label >Billing zip code:</label><br></br>
      <input onChange ={changeHandler} type="text" id="bzip" name="bzip"></input><br></br>
      <input onChange ={changeHandler} type="button" onClick={() => alert('click')} value="button"></input><br></br>
      {/* <input type="submit" id="submit" value="next"></input> */}
    </form>
    <button onClick={submitHandler}>SUBMIT</button>
  </div>
);

var Summary = ({clickHandler, changeHandler}) => (
  <div>
    <h2>Account Creation</h2>
    <p>TO BE DETERMINED</p>
    {/* <button onClick={clickHandler}>Next??</button> */}
  </div>
);

console.log(document.getElementById('app'));

ReactDOM.render(<App />, document.getElementById("app"));