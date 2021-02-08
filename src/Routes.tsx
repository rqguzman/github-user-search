import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './core/components/navbar';
import Home from './pages/home';
import Search from './pages/search';


const Routes = () => (
     
    <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;