import React, { useState } from 'react';
import { Button, Form,Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ATypes from '../../store/types';
export default function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({  email: '', password: '' });

  function hendleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function formSubmitHandler() {
   try {
     const response = await fetch('http://localhost:3001/signin', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       credentials: 'include',
       body: JSON.stringify(formData),
     })
     const result = await response.json();
     const user = result.name
     if (user) {
      localStorage.setItem('user', result);
      dispatch({ type: ATypes.SET_USER, payload: result });
      setFormData({ email: '',password: '' });
      navigate('/');
     }
     else {navigate('/signup'); }
   } catch (error) {
    console.log(error);
   }
  }
  return (
    <Container>
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Your email </Form.Label>
        <Form.Control  onChange={hendleChange} name='email' type="email" placeholder="Enter email" value={formData.email} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
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
        Sing In!
      </Button>
   
    </Form>
    </Container>
  )
}
