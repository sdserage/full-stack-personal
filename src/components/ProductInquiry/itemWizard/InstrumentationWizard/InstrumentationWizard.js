import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// Component
import router from './router';

export default function InstrumentationWizard(){
  return (
    <div>
      <h2 className="add-item">+ Add Item</h2>
      <h2 className="submit-inquiry">Submit</h2>
      <Link to="/productinquiry/select-type">
        <h2>Type: Instrumentation</h2>
      </Link>
      {router}
    </div>
  )
};
