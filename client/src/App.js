import './App.css';
import React, { useEffect } from 'react';
import { Routes, Link, Route, Outlet, useNavigate} from 'react-router-dom'
import {GameBoard , Login, Registration,Question} from './components'
import {Button} from "react-bootstrap";
import {useSelector,useDispatch} from 'react-redux'
import ATypes from './store/types';


function App() {
  const user =useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth =localStorage.getItem('user') 

  useEffect( ()=>{
  if (auth) {
    dispatch({type: ATypes.SET_USER, payload: localStorage.getItem('user') })
  }
})


  async function logout(){
    const response = await fetch('http://localhost:3001/logout', {credentials: 'include'})
    const result = await response.json()
    if (result) {
      localStorage.clear()
      dispatch({type: ATypes.SET_USER, payload: ''})
      navigate('/')
    }
  }

  return (
    <div className="App">
      <nav className='mt-2 flex justify-content-end'>
        {user ? <Link to='/logout'>
          <Button onClick={logout} type="button">Logout</Button>
        </Link> : <> <Link to='/signin'>
          <Button className="me-2" type="button">Sign In</Button>
        </Link>
        <Link to='/signup'>
          <Button type="button">Sign Up</Button>
        </Link></>}
      </nav>
      <Routes>
        <Route path="/" element={<GameBoard/>} />
        <Route path="/signin" element={<Login/>} />
        <Route path="/signup" element={<Registration/>} />
      </Routes>
      <Outlet />
    </div>

  );
}

export default App;
