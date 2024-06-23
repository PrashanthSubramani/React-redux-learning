import React from 'react'
import { buyIceCream } from '../redux';
import {connect} from 'react-redux'


function IceCreamContainer(props) {

  return (
    <div>
        <h2>Number of Ice Creams - {props.numofIceCream}</h2>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  )
}


const mapStatetoProps = state =>{
  return {
    numofIceCream : state.iceCream.numofIceCream
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    buyIceCream: ()=> dispatch(buyIceCream())
  }
}

export default  connect(mapStatetoProps, mapDispatchToProps)(IceCreamContainer);

