// LIBRARY
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import {Route, IndexRoute} from 'react-router';

//Rotas para as página
import LogIn_form from './pages/LogIn/LogIn';
import Page from './pages/LogIn/page';

export default (
    <Route component={LogIn_form} path='/'>
        <IndexRoute component={LogIn_form}></IndexRoute>
        <Route component={Page} path='page'></Route>
    </Route>
);