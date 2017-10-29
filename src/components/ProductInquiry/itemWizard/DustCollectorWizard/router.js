import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
// Components
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';

export default (
  <Switch>
    <Route path="/productinquiry/dust-collector-wizard/1" render={()=><Step1 nextPath="/productinquiry/dust-collector-wizard/2"/>}/>
    <Route path="/productinquiry/dust-collector-wizard/2" render={()=><Step2 step1="/productinquiry/dust-collector-wizard/1" nextPath="/productinquiry/dust-collector-wizard/3"/>}/>
    <Route path="/productinquiry/dust-collector-wizard/3" render={()=><Step3 step1="/productinquiry/dust-collector-wizard/1" step2="/productinquiry/dust-collector-wizard/2"/>}/>
  </Switch>
)
