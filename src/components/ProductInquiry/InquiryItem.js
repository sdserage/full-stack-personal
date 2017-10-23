/*
{
  itemtype: 'Valve',
  media: 'Air',
  pressure: 230, // meassured in psi
  temperature: 330.6, // measured in F (unknown if decimal value or not)
  pipesize: 10.5, // measured in inches, almost certainly will need to be decimal. Measurement is diameter
  pipesizeadditionalinfo: 'description',
  additionaliteminfo: 'description'
}

{
  itemtype: 'Actuator',
  valvesize: 33.25, // measured in inches
  torque: 24, // Not sure of current measurement type
  valvedescription: 'description',
  stemdimensions: 'Square', // other options are 'Double D' or 'Other', may need additional info on size
  returntype: 'Spring', // other option is double acting, may need additional space to include what it uses to return (air, water) and the psi
  additionaliteminfo: 'description'
}

{
  itemtype: 'Dust Collector',
  temperature: 110, // measured in F
  particulatetype: ['Metal', Wood], // An array of string values, stored as string with spaces in the database. Space allocated in the database may need to be adjusted
  particulatesize: 200, // Unknown measuremnt type currently, will likely use decimals
  additionaliteminfo: 'description'
}

{
  itemtype: 'Instrumentation',
  media: 'Water',
  pressure: 180, // meassured in psi
  temperature: 200, // measured in F
  pipesize: 11.75, // measured in inches
  pipesizeadditionalinfo: 'description',
  additionaliteminfo: 'description'
}
*/
import React from 'react';

const InquiryItem = props =>{
  const {item} = props;
  switch (item.itemtype) {
    case 'Valve':
      return (
        <div className="valve">
          <h3>Valve</h3>
          <p>Media: {item.media}</p>
          <p>Pressure: {item.pressure} psi ({item.pressure} lb/in&#178;)</p>
          <p>Temperature: {item.temperature}&#x2109; ({((item.temperature-32)/1.8).toFixed(3)}&#x2103;)</p>
          <p>Pipe Size: {item.pipesize} inch(es) ({item.pipesize} cm)</p>
          <p>Pipe Size Additional Information:<br/>{item.pipesizeadditionalinfo}</p>
          <p>Additional Item Information:<br/>{item.additionaliteminfo}</p>
        </div>
      );
    case 'Actuator':
      return(
        <div className='actuator'>
          <h3>Actuator</h3>
          <p>Valve Size: {item.valvesize} inch(es) ({item.valvesize} cm)</p>
          <p>Torque: {item.torque} units ({item.torque} other units)</p>
          <p>Valve Description:<br/>{item.valvedescription}</p>
          <p>Stem Dimensions: {item.stemdimensions}</p>
          <p>Return Type: {item.returntype}</p>
          <p>Additional Item Information:<br/>{item.additionaliteminfo}</p>
        </div>
      );
    case 'Dust Collector':
      return(
        <div className='dust-collector'>
          <h3>Dust Collector</h3>
          <p>Temperature: {item.temperature}&#x2109; ({((item.temperature-32)/1.8).toFixed(3)}&#x2103;)</p>
          <p>Particulate Type:<br/>{item.particulatetype.map(particulate=>` ${particulate}`)}</p>
          <p>Particulate Size: {item.particulatesize} units</p>
          <p>Additional Item Information:<br/>{item.additionaliteminfo}</p>
        </div>
      );
    case 'Instrumentation':
      return(
        <div className='instrumentation'>
          <h3>Instrumentation</h3>
          <p>Media: {item.media}</p>
          <p>Pressure: {item.pressure} psi ({item.pressure} lb/in&#178;)</p>
          <p>Temperature: {item.temperature}&#x2109; ({((item.temperature-32)/1.8).toFixed(3)}&#x2103;)</p>
          <p>Pipe Size: {item.pipesize} inch(es) ({item.pipesize} cm)</p>
          <p>Pipe Size Additional Information:<br/>{item.pipesizeadditionalinfo}</p>
          <p>Additional Item Information:<br/>{item.additionaliteminfo}</p>
        </div>
      );
    default:
      return null;
  }
}

export default InquiryItem;
