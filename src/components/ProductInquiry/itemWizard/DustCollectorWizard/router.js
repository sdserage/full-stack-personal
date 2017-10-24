import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
// Components
import Step1 from './Steps/Step1';

export default (
  <Switch>
    <Route exact path="/productinquiry/dust-collector-wizard" render={()=> <Redirect to="/productinquiry/dust-collector-wizard/1"/>}/>
    <Route path="/productinquiry/dust-collector-wizard/1" component={Step1}/>
  </Switch>
)
