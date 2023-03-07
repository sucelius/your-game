import React, {useState} from 'react';
import {Button, Form, Container} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import ATypes from '../../store/types';

export default function Registration() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({name: '', email: '', password: ''});

  function hendleChange(event) {
    setFormData({...formData, [event.target.name]: event.target.value});
  }

  async function formSubmitHandler() {
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(formData),
      })
      const result = await response.json();
      console.log(result);
      const user = result.name
      if (user) {
        localStorage.setItem('user', JSON.stringify(result));
        dispatch({type: ATypes.SET_USER, payload: result});
        setFormData({name: '', email: '', password: ''});
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <div
        className="w-full bg-white rounded-lg shadow dark:border md:mt-8 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Создать аккаунт
          </h1>
        <form className="space-y-4 md:space-y-6">
          <div className="mb-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">Электронная почта</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={hendleChange} name='email' type="email"
                   placeholder="Enter email" value={formData.email}/>
          </div>

          <div className="mb-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Введите ваше имя </label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={hendleChange} name='name' type="text"
                   placeholder="Enter Your user name" value={formData.name}/>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="inputPassword5">Пассворд</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Enter password"
                   value={formData.password}
                   onChange={hendleChange}
                   name='password'
                   type="password"
                   id="inputPassword5"
                   aria-describedby="passwordHelpBlock"
            />
          </div>
          <button className="w-full text-white bg-blue-600 disabled:bg-gray-400 disabled:opacity-75 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={formSubmitHandler}
                  variant="primary" type="button">
            Выход
          </button>
        </form>
        </div>
      </div>
    </div>
  )
}
