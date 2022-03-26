import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios').default;
import Cowlist from './components/cowlist.jsx';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      names: 'on',
      descriptions: 'off'
    }
    this.get = this.get.bind(this)
    this.ups = this.ups.bind(this)
  }
  get(){
    axios.get('/api/cows')
      .then(function(response){ //[{name: 'Daisy', description: 'a cow'}, {}, {}]
        console.log(response)
        ups(response, null)
      })
      .catch(function(error){
        console.log(error)
      })
  }
  ups(p1, p2){
    if (Array.isArray(p1)) {
      this.setState({
        cows: p1
      })
    } else {
      this.setState({
        p1:p2
      })
    }
  }
  componentDidMount(){
    this.get()
  }

  render(){
    var statecopy = this.state
    return (
      <div>
        <div>Cow List!</div>
         {/* <Newcow/> */}
        <Cowlist statecopy={statecopy}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));