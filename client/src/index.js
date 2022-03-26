import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios').default;
import Cowlist from './components/cowlist.jsx';
import Newcow from './components/newcow.jsx';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activecow: undefined,
      cows: [],
      names: 'on',
      descriptions: 'off'
    }
    this.activateCow = this.activateCow.bind(this)
    this.get = this.get.bind(this)
    this.post = this.post.bind(this)
    this.ups = this.ups.bind(this)
  }
  activateCow(name){
    this.ups('activecow', name)
    var description = undefined;
    this.state.cows.forEach(function(cowobj){
      if (cowobj.name === name) {
        description = cowobj.description
      }
    })
    this.ups('activecowdescription', description)
  }
  get(){
    var upscontext = this.ups
    axios.get('/api/cows')
      .then(function(response){ //[{name: 'Daisy', description: 'a cow'}, {}, {}]
        console.log(response)
        upscontext(response.data, null)
      })
      .catch(function(error){
        console.log(error)
      })
  }
  post(){
    var name = this.state.newcowname
    var description = this.state.newcowdescription
    axios.post('/api/cows', {
      name: name,
      description: description
    })
      .then(function(response){ //[{name: 'Daisy', description: 'a cow'}, {}, {}]
        console.log(response)
        upscontext(response.data, null)
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
        [p1]:p2
      })
    }
  }
  componentDidMount(){
    this.get()
  }

  render(){
    var cows = this.state.cows
    var activecow = this.state.activecow
    var activecowdescription = this.state.activecowdescription
    if (activecow === undefined) {
      return (
        <div>
          <div>Cow List!</div>
           <Newcow post = {this.post} ups={this.ups}/>
           <Cowlist activecow={activecow} activateCow={this.activateCow} cows={cows}/>
        </div>
      )
    }
    if (activecow !== undefined) {
      return (
        <div>
          <div>Cow List!</div>
           <Newcow post = {this.post} ups={this.ups}/>
           <div id="large">{activecow} is {activecowdescription}</div>
           <Cowlist activecow={activecow} activateCow={this.activateCow} cows={cows}/>
        </div>
      )
    }
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));