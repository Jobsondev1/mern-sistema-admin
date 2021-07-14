import { BrowserRouter, Switch, Route,} from "react-router-dom";
import React from 'react'

import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Customers from './pages/Customers';
import Dashboard from "./pages/Dashboard";
import Reports from './pages/Reports';
import Requests from './pages/Requests';
import UsersAcess from "./pages/UsersAcess.js/index.js";

function Routes() {
    return (
     <BrowserRouter>
        <Switch>
            <Route path ='/' exact component= {Home} />
            <Route path = '/Login' exact component= {Login} />
            <Route path ='/produtos' exact component= {Products} />
            <Route path ='/clientes' exact component= {Customers} />
            <Route path ='/dashboard' exact component= {Dashboard} />
            <Route path ='/relatorios' exact component= {Reports} />
            <Route path ='/pedidos' exact component= {Requests} />   
            <Route path = '/usuarios' exact component= {UsersAcess} />         
        </Switch>
     </BrowserRouter>
    )
}
export default Routes
