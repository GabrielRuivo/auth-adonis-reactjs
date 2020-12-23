import React from 'react';
import { NavLink } from 'react-router-dom';
import FormForgotPassword from '../../components/Form/formForgotPassword';
// import { Container } from './styles';

const handleSubmit = values => console.log(values)

function ForgotPassword() {
  return (
    <div className="container" >
        <FormForgotPassword handleSubmit={handleSubmit}  />
        <NavLink to="/" >Already have account ? Log In</NavLink>
    </div>
  );
}

export default ForgotPassword;