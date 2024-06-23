import { BUY_ICECREAM } from "./iceCreamTypes"

const initialIceCreamState = {
    numofIceCream : 20,
}


const IceCreamReducer = (state= initialIceCreamState, action) =>{
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                numofIceCream : state.numofIceCream -1
            }
        default : return state;
    }
}

export default IceCreamReducer;