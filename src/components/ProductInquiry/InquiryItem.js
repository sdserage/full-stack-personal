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
          <h3 className="item-header">Valve</h3>
          <p className="media">Media: {item.media}</p>
          <p className="pressure">Pressure: {item.pressure} psi ({item.pressure} lb/in&#178;)</p>
          <p className="temperature">Temperature: {item.temperature} &#x2109; ({((item.temperature-32)/1.8).toFixed(3)} &#x2103;)</p>
          <p className="pipesize">Pipe Size: {item.pipesize} inch(es) ({item.pipesize*2.54} cm)</p>
          <p className="pipesize-info">Pipe Size Additional Information:<br/>{item.pipesizeadditionalinfo}</p>
          <p className="additional-info">Additional Item Information:<br/>{item.additionaliteminfo}</p>
        </div>
      );
    case 'Actuator':
      return(
        <div className='actuator'>
          <h3 className="item-header">Actuator</h3>
          <p className="valvesize">Valve Size: {item.valvesize} inch(es) ({item.valvesize*2.54} cm)</p>
          <p className="torque">Torque: {item.torque} units ({item.torque} other units)</p>
          <p className="valve-desc">Valve Description:<br/>{item.valvedescription}</p>
          <p className="stemdimensions">Stem Dimensions: {item.stemdimensions}</p>
          <p className="returntype">Return Type: {item.returntype}</p>
          <p className="additional-info">Additional Item Information:<br/>{item.additionaliteminfo}</p>
        </div>
      );
    case 'Dust Collector':
      return(
        <div className='dust-collector'>
          <h3 className="item-header">Dust Collector</h3>
          <p className="temperature">Temperature: {item.temperature} &#x2109; ({((item.temperature-32)/1.8).toFixed(3)} &#x2103;)</p>
          <p className="particulatetype">Particulate Type:<br/>{item.particulatetype.map(particulate=>` ${particulate}`)}</p>{/*<---- This is not a final solution, just a hacky way for spacing to work in html since html will ignore space at the beginning and end of a string.*/}
          <p className="particulatesize">Particulate Size: {item.particulatesize} units</p>
          <p className="additional-info">Additional Item Information:<br/>{item.additionaliteminfo}</p>
        </div>
      );
    case 'Instrumentation':
      return(
        <div className='instrumentation'>
          <h3 className="item-header">Instrumentation</h3>
          <p className="media">Media: {item.media}</p>
          <p className="pressure">Pressure: {item.pressure} psi ({item.pressure} lb/in&#178;)</p>
          <p className="temperature">Temperature: {item.temperature} &#x2109; ({((item.temperature-32)/1.8).toFixed(3)} &#x2103;)</p>
          <p className="pipesize">Pipe Size: {item.pipesize} inch(es) ({item.pipesize*2.54} cm)</p>
          <p className="pipesize-info">Pipe Size Additional Information:<br/>{item.pipesizeadditionalinfo}</p>
          <p className="additional-info">Additional Item Information:<br/>{item.additionaliteminfo}</p>
        </div>
      );
    default:
      return null;
  }
}

export default InquiryItem;
