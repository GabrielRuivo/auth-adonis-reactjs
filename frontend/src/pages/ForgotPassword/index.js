import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { NavLink } from 'react-router-dom';
import FormForgotPassword from '../../components/Form/formForgotPassword';
// import { Container } from './styles';
import api from '../../services/api';


function ForgotPassword() {
  const [data, setData] = useContext(AuthContext)

  const handleSubmit = values => {
    console.log(values.email)
    try {
      api.post('/passwords', {
        email: values.email
      }).then((res) => {

        const response = res.data;
        
        /* localStorage.setItem('@token', JSON.stringify(response))
        setData(localStorage.getItem('@token'))
        console.log('RESPONSE:', response) */

        localStorage.setItem('@tokenResetPassword', JSON.stringify(response))
        setData(localStorage.getItem('@tokenResetPassword'))
        console.log('RESPONSE:', response)
      })
      
    } catch {
      return console.log('Email inválido')
    }
  }

  

  return (
    <div className="container" >
        <FormForgotPassword handleSubmit={handleSubmit}  />
        <NavLink to="/" >Already have account ? Log In</NavLink>
    </div>
  );
}

export default ForgotPassword;