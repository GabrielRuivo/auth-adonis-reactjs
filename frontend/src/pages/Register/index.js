import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import FormRegister from '../../components/Form/formRegister';
import api from '../../services/api';
// import { Container } from './styles';

function Register() {
  const history = useHistory();

  async function handleSubmit(value) {
    try {
      await api.post('/users', {
        username: value.username,
        email: value.email,
        password: value.password
      })
      console.log('registro efetuado com sucesso')
      history.push('/')
    } catch(err) {
      alert('email already exist')
    }
  }

  return (
    <div className="container" >
        <FormRegister handleSubmit={handleSubmit}  />
        <NavLink to="/" >Already have account ? Log In</NavLink> <br/>
    </div>
  );
}

export default Register;