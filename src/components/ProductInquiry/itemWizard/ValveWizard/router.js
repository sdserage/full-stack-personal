import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
// Components
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';

export default (
  <Switch>
    <Route path="/productinquiry/valve-wizard/1" render={()=><Step1 nextPath="/productinquiry/valve-wizard/2"/>}/>
    <Route path="/productinquiry/valve-wizard/2" render={()=><Step2 previousPath="/productinquiry/valve-wizard/1" nextPath="/productinquiry/valve-wizard/3"/>}/>
  </Switch>
)
