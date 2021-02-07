import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './core/components/navbar';
import Home from './pages/home';


const Routes = () => (
     
    <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;