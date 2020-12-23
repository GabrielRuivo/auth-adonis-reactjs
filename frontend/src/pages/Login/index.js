import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { NavLink, useHistory } from 'react-router-dom';
import FormLogin from '../../components/Form/formLogin';
import api from '../../services/api';
// import { Container } from './styles';

function Login() {

  const [data, setData] = useContext(AuthContext)
  /* const [ token, setToken ] = useState(''); */
  const history = useHistory();

  async function handleSubmit(value) {
  
    try {
      await api.post('/session', {
        email: value.email,
        password: value.password
      }).then(res => {
        const response = res.data;
        const token = response.token;
        localStorage.setItem('@token', JSON.stringify(token))
        setData(localStorage.getItem('@token'))
        console.log(response)
      })
      console.log('logado com sucesso !')
      history.push('/dashboard')
    } catch (err) {
      alert('Email or Password invalid')
    }
    
  }

  console.log('se tiver vazio deslogado:', data)

  return (
    <div className="container" >
        <FormLogin handleSubmit={handleSubmit}  />
        <div>
          <NavLink to="/register" >Don't have account ? create account</NavLink> <br/>
          <NavLink to="/forgot-password" >Forgot password ?</NavLink>
        </div>
    </div>
  );
}

export default Login;