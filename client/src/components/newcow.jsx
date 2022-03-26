import React from 'react';

class Newcow extends React.Component {
  constructor(props){
    super(props)
    this.state={
      cows:undefined
    }
    this.ups = props.ups
    this.post = props.post
  }
  render(){
    return(
      <div>
       <form>
         <label>Cow Name</label>
         <input type="text" onChange={()=>{this.ups('newcowname', event.target.value)}}></input>
         <label>Cow Description</label>
         <input type="text" onChange={()=>{this.ups('newcowdescription', event.target.value)}}></input>
         <button onClick={()=>{this.post(); event.preventdefault();}}>Add New Cow</button>
       </form>
      </div>
    )
  }
}

export default Newcow;