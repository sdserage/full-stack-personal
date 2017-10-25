import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// Component
import router from './router';

export default (
  <div>
    <Link to="/productinquiry/select-type">
      <h2>Type: Actuator</h2>
    </Link>
    {router}
  </div>
);