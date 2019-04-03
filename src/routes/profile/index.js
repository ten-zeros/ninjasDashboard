import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

//Attempt at profile page
export default ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/profile`} />
        <Route path={`${match.url}/profile`}/>
        <Redirect to="/error" />
    </Switch>
);
