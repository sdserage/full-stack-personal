import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// Component
import router from './router';

export default function ActuatorWizard(){
  return (
    <div>
      <h2 className="add-item">+ Add Item</h2>
      <h2 className="submit-inquiry">Submit</h2>
      <Link to="/productinquiry/select-type">
        <h2 className="main-return">Type: Actuator</h2>
      </Link>
      {router}
    </div>
  );
}
