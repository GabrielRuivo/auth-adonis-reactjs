import React, { useEffect } from 'react';
import { AuthContext } from '../../context/authContext';
import { NavLink, useParams } from 'react-router-dom';
import FormChangePassword from '../../components/Form/formChangePassword';
// import { Container } from './styles';
import api from '../../services/api';

function ChangePassword() {
  /* const [data, setData] = useContext(AuthContext) */
  let { token } = useParams();

  console.log('query token', token)

  const TokenResetPasswordLocalStorage = localStorage.getItem('@tokenResetPassword')
  console.log('TLS', TokenResetPasswordLocalStorage.data)
  console.log(token);

  const handleSubmit = async values => { 
    console.log(values.password) 
    try {
      await api.put('/passwords', {
        token: token,
        password: values.password,
      })
      console.log('senha trocado com sucesso !')
    } catch (err) {
      console.log('senhas divergentes !')
    }
  }

  return (
    <div className="container" >
      <h1>Reset Password</h1>
        <FormChangePassword handleSubmit={handleSubmit}  />
        <NavLink to="/" >Already have account ? Log In</NavLink>
    </div>
  );
}

export default ChangePassword;