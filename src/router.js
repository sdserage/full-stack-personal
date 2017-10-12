import React from 'react';
import {Route, Switch} from 'react-router-dom';
// Components
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import FactoidsAndTools from './components/FactoidsAndTools/FactoidsAndTools';
import ProductInquiry from './components/ProductInquiry/ProductInquiry';
import ViewInquiries from './components/ViewInquiries/ViewInquiries';

export default (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/factoidsandtools' component={FactoidsAndTools}/>
    <Route path='/productinquiry' component={ProductInquiry}/>
    <Route path='/viewinquiries' component={ViewInquiries}/>
  </Switch>
);
