import React from 'react';
import {Route, Switch} from 'react-router-dom';
// Components
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Step5 from './Steps/Step5';

export default (
  <Switch>
    <Route path="/productinquiry/valve-wizard/1" render={()=><Step1 nextPath="/productinquiry/valve-wizard/2"/>}/>
    <Route path="/productinquiry/valve-wizard/2" render={()=><Step2 previousPath="/productinquiry/valve-wizard/1" nextPath="/productinquiry/valve-wizard/3"/>}/>
    <Route path="/productinquiry/valve-wizard/3" render={()=><Step3 pathBeforePrevious="/productinquiry/valve-wizard/1" previousPath="/productinquiry/valve-wizard/2" nextPath="/productinquiry/valve-wizard/4"/>}/>
    <Route path="/productinquiry/valve-wizard/4" render={()=><Step4 step1="/productinquiry/valve-wizard/1" pathBeforePrevious="/productinquiry/valve-wizard/2" previousPath="/productinquiry/valve-wizard/3" nextPath="/productinquiry/valve-wizard/5"/>}/>
    <Route path="/productinquiry/valve-wizard/5" render={()=><Step5 step1="/productinquiry/valve-wizard/1" step2="/productinquiry/valve-wizard/2" step3="/productinquiry/valve-wizard/3" step4="/productinquiry/valve-wizard/4"/>}/>
  </Switch>
)
