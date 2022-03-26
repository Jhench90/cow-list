import React from 'react';

class Cowlist extends React.Component {
  constructor(props){
    super(props)
    this.state={
      cows:undefined
    }
    this.activecow = props.activecow
    this.activateCow = props.activateCow
  }
  render(){
    var cows = this.props.cows
    return(
      <div>
        <div>
          {cows.map((cowobj)=>
          <li id={cowobj.name} onClick={()=>{this.activateCow(event.target.id)}}>{cowobj.name}</li>)}
        </div>
      </div>
    )
  }
}

export default Cowlist;