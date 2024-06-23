
import cakeReducer from './cake/cakeReducer';
import IceCreamReducer from './iceCream/iceCreamReducer';
import { combineReducers} from 'redux';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream : IceCreamReducer
})

export default rootReducer