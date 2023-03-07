import './App.css';
import React, { useEffect } from 'react';
import { Routes, Link, Route, Outlet, useNavigate, useLocation } from 'react-router-dom'

import { GameBoard, Login, Registration, Question, Profile } from './components'
import { Button } from "react-bootstrap";

import { useSelector, useDispatch } from 'react-redux'
import ATypes from './store/types';


function App() {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = localStorage.getItem('user')
  let location = useLocation()
  useEffect(() => {
    if (auth) {
      dispatch({ type: ATypes.SET_USER, payload: JSON.parse(auth) })
    }
  }, [])


  async function logout() {
    const response = await fetch('/logout', { credentials: 'include' })
    const result = await response.json()
    if (result) {
      localStorage.clear()
      dispatch({ type: ATypes.SET_USER, payload: '' })
      navigate('/')
    }
  }

  return (
    <div className="App mx-auto">
      <nav className='bg-neutral-100 flex px-6 py-2.5 justify-end'>
        {user ? <> {location.pathname==='/profile' ? <Link to='/'>
            <button className="text-white bg-blue-600 px-5 py-2.5 rounded mr-4" type="button">Вернуться</button>
          </Link> : <Link to='/profile'>
            <button className="text-white bg-blue-600 px-5 py-2.5 rounded mr-4" type="button">Профиль</button>
          </Link> }
          <button onClick={logout} type="button">Выход</button> </>
          : <> <Link to='/signin'>
            <button className="text-white bg-blue-600 px-5 py-2.5 rounded mr-2" type="button">Вход</button>
          </Link>
            <Link to='/signup'>
              <button className="text-white bg-blue-600 px-5 py-2.5 rounded" type="button">Регистрация</button>
            </Link></>}

      </nav>
      <Routes>
        <Route path="/" element={user ? <GameBoard /> : <Login />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Outlet />
    </div>

  );
}

export default App;
