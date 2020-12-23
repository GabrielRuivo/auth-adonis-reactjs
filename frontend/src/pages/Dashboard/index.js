import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

import api from '../../services/api';
// import { Container } from './styles';

function Dashboard() {
  const [data, setData] = useContext(AuthContext)
  
    const history = useHistory();

    async function handleLogout() {
        try {
          await api.get('logout').then(res => {
            const response = res.data;
            console.log(response)
            setData(...data, localStorage.removeItem('@token'))
            
            history.push('/')
          })
          console.log('deslologado com sucesso !')
        } catch (err) {
            console.log(err, 'Algo deu errado com seu logout')
          }
      }

    return (
        <div>
          <h2>Dashboard Bem-vindo </h2>
          <button onClick={handleLogout} >logout</button>
        </div>
    )
      
}

export default Dashboard;