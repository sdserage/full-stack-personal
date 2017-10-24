import React from 'react';
import {Route, Switch} from 'react-router-dom';
// Components
import WizardSelectItem from './itemWizard/WizardSelectItem/WizardSelectItem';

export default (
  <Switch>
    <Route exact path='/productinquiry/select-type' component={WizardSelectItem}/>
  </Switch>
)
