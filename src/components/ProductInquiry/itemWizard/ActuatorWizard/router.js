import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
// Components
import Step1 from './Steps/Step1';

export default (
  <Switch>
    <Route exact path="/productinquiry/actuator-wizard" render={()=> <Redirect to="/productinquiry/actuator-wizard/1"/>}/>
    <Route path="/productinquiry/actuator-wizard/1" component={Step1}/>
  </Switch>
)
