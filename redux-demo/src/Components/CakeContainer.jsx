import React from 'react'
import { buyCake } from '../redux';
import {connect} from 'react-redux'


function CakeContainer(props) {

  return (
    <div>
        <h2>Number of cakes - {props.numofCakes}</h2>
        <button onClick={props.buyCake}>Buy cake</button>
    </div>
  )
}


const mapStatetoProps = state =>{
  return {
    numofCakes : state.cake.numofCakes
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    buyCake: ()=> dispatch(buyCake())
  }
}

export default  connect(mapStatetoProps, mapDispatchToProps)(CakeContainer);
