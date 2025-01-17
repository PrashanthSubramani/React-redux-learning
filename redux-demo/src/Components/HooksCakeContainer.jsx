import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';
 
function HooksCakeContainer() {
  const numofCakes = useSelector(state=> state.cake.numofCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes - {numofCakes}</h2>
      <button onClick={()=> dispatch(buyCake())}>Buy cake</button>
    </div>
  )
}

export default HooksCakeContainer
