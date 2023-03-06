
import './App.css';
import { Provider } from "react-redux";
import {store} from './store'
// import {NavBar} from "./widgets";

import {GameBoard , NavBar} from './components'

function App() {
  return (
    <Provider store={store}>
    <div className="App">

      <NavBar />
      <GameBoard/>
    </div>
    </Provider>
  );
}

export default App;
