import React from 'react';

class Cowlist extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      Temp:'temp'
    }
    // this.state.cows=props.statecopy.cows
  }

  render(){
    return(
      <div>
        {this.state.cows.map((cowobj)=>
        <li>{cowobj.name}</li>)}
      </div>
    )
  }
}

export default Cowlist;