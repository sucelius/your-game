
import './App.css';
import { Provider } from "react-redux";
import {store} from './store'

import {GameBoard} from './components'

function App() {
  return (
    <Provider store={store}>
    <div className="App">

     <h1>Main Page</h1>
     <>
     <GameBoard></GameBoard>
     </>
    </div>
    </Provider>
  );
}

export default App;
