import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// Component
import router from './router';

export default function ValveWizard(){
  return (
    <div>
      <Link to="/productinquiry/select-type">
        <h2>Type: Valve</h2>
      </Link>
      {router}
    </div>
  );
};
