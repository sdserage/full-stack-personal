import React from 'react';
import {Route, Switch} from 'react-router-dom';
// Components
import Step1 from '../ValveWizard/Steps/Step1';
import Step2 from '../ValveWizard/Steps/Step2';
import Step3 from '../ValveWizard/Steps/Step3';
import Step4 from '../ValveWizard/Steps/Step4';
import Step5 from '../ValveWizard/Steps/Step5';

export default (
  <Switch>
    <Route path="/productinquiry/instrumentation-wizard/1" render={()=><Step1 nextPath="/productinquiry/instrumentation-wizard/2"/>}/>
    <Route path="/productinquiry/instrumentation-wizard/2" render={()=><Step2 previousPath="/productinquiry/instrumentation-wizard/1" nextPath="/productinquiry/instrumentation-wizard/3"/>}/>
    <Route path="/productinquiry/instrumentation-wizard/3" render={()=><Step3 pathBeforePrevious="/productinquiry/instrumentation-wizard/1" previousPath="/productinquiry/instrumentation-wizard/2" nextPath="/productinquiry/instrumentation-wizard/4"/>}/>
    <Route path="/productinquiry/instrumentation-wizard/4" render={()=><Step4 step1="/productinquiry/instrumentation-wizard/1" pathBeforePrevious="/productinquiry/instrumentation-wizard/2" previousPath="/productinquiry/instrumentation-wizard/3" nextPath="/productinquiry/instrumentation-wizard/5"/>}/>
    <Route path="/productinquiry/instrumentation-wizard/5" render={()=><Step5 step1="/productinquiry/instrumentation-wizard/1" step2="/productinquiry/instrumentation-wizard/2" step3="/productinquiry/instrumentation-wizard/3" step4="/productinquiry/instrumentation-wizard/4"/>}/>
  </Switch>
)
