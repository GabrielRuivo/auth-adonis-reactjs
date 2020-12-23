import React, { useContext } from 'react';
import { AuthContext } from './context/authContext';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from './pages/Login/index';
import Register from './pages/Register/index';
import ForgotPassword from './pages/ForgotPassword/index';
import Dashboard from './pages/Dashboard/index';

const NotFoundBase = ({ type }) => <Redirect to={type === 'public' ? "/dashboard" : "/"} />
const NotFoundPublic = () => <NotFoundBase type='public' />
const NotFoundPrivate = () => <NotFoundBase type='private' />

export default function Routes() {
    const [data, setData] = useContext(AuthContext)
    const localData = localStorage.getItem('@token');
    console.log(localData, 'ROUTES')
    return (
        <BrowserRouter>
            <Switch>
                {
                    !localData &&
                    <>
                        <Route exact path="/" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/forgot-password" component={ForgotPassword} />
                        <Route component={NotFoundPrivate} />
                    </> 
                }
                
                {
                    localData && 
                    <>
                        <Route path="/dashboard" component={Dashboard} /> 
                        <Route component={NotFoundPublic} />
                    </>
                }
                
            </Switch>
        </BrowserRouter>
    )
}