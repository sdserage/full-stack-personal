import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
// Components
import Step1 from './Steps/Step1';

export default (
  <Switch>
    <Route path="/productinquiry/valve-wizard/1" component={Step1}/>
  </Switch>
)
