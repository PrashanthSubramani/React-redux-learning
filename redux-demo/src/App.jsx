import CakeContainer from './Components/CakeContainer'
import {Provider} from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';
function App() {
  
 
  return (
    <Provider store={store}>
      <div className='App'>
          <CakeContainer/>
          <HooksCakeContainer/>
          <IceCreamContainer/>
      </div>
    </Provider>
  )
}

export default App
