import React from 'react';
import {Route, Switch} from 'react-router-dom';
// Components
import WizardOff from './itemWizard/WizardOff/WizardOff';
import WizardSelectItem from './itemWizard/WizardSelectItem/WizardSelectItem';
import ValveWizard from './itemWizard/ValveWizard/ValveWizard';
import ActuatorWizard from './itemWizard/ActuatorWizard/ActuatorWizard';
import DustCollectorWizard from './itemWizard/DustCollectorWizard/DustCollectorWizard';
import InstrumentationWizard from './itemWizard/InstrumentationWizard/InstrumentationWizard';

export default (
  <Switch>
    <Route exact path='/productinquiry' component={WizardOff}/>
    <Route path='/productinquiry/select-type' component={WizardSelectItem}/>
    <Route path='/productinquiry/valve-wizard' component={ValveWizard}/>
    <Route path='/productinquiry/actuator-wizard' component={ActuatorWizard}/>
    <Route path='/productinquiry/dust-collector-wizard' component={DustCollectorWizard}/>
    <Route path='/productinquiry/instrumentation-wizard' component={InstrumentationWizard}/>
  </Switch>
)
