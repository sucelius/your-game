
import './App.css';
import { Provider } from "react-redux";
import {store} from './store'
import {Router, Routes, Link, Route, Outlet} from 'react-router-dom'
import {GameBoard , NavBar} from './components'
import {Button} from "react-bootstrap";

function App() {
  return (

    <div className="App">
      <nav className='mt-2 flex justify-content-end'>
        <Link to='/signin'>
          <Button className="me-2" type="button">Sign In</Button>
        </Link>
        <Link to='/signup'>
          <Button type="button">Sign Up</Button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>MainPage</h1>} />
        <Route path="/signin" element={<h1>SignIn</h1>} />
        <Route path="/signup" element={<h1>SignUp</h1>} />
      </Routes>
      <Outlet />
    </div>

  );
}

export default App;
