import React, { useState } from 'react';
import { Button, Form,Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ATypes from '../../store/types';

export default function Registration() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  function hendleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function formSubmitHandler() {
   try {
     const response = await fetch('http://localhost:3001/signup', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       credentials: 'include',
       body: JSON.stringify(formData),
     })
     const result = await response.json();
     console.log(result);
     const user = result.name
     if (user) {
      localStorage.setItem('user', JSON.stringify(result));
      dispatch({ type: ATypes.SET_USER, payload: result });
      setFormData({ name: '', email: '',password: '' });
      navigate('/');
     }
   } catch (error) {
    console.log(error);
   }
  }

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={hendleChange} name='email' type="email" placeholder="Enter email" value={formData.email} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your user name </Form.Label>
          <Form.Control onChange={hendleChange} name='name' type="text" placeholder="Enter Your user name"  value={formData.name}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
      placeholder="Enter password"
      value={formData.password}
      onChange={hendleChange}
      name='password'
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
        </Form.Group>
        <Button onClick={formSubmitHandler} variant="primary" type="button">
          Sign in!
        </Button>
      </Form>
    </Container>
  )
}
