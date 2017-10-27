import React from 'react';
import './InquiryItem.css';

const InquiryItem = props =>{
  const {item} = props;
  switch (item.itemtype) {
    case 'Valve':
      return (
        <div className="valve">
          <h3 className="item-header">Valve</h3>
          <img className="item-img" src="" alt="valve"/>
          <p className="media">Media: {item.media}</p>
          <p className="pressure">Pressure: {item.pressure} psi ({item.pressure} bar)</p>
          <p className="temperature">Temperature: {item.temperature} &#x2109; ({((item.temperature-32)/1.8).toFixed(3)} &#x2103;)</p>
          <p className="pipesize">Pipe Size: NPS {item.pipesize} inch (DN {item.pipesize*.254} mm)</p>
          <p className="pipesize-info">Pipe Additional Information:<br/>{item.pipesizeadditionalinfo}</p>
          <p className="additional-info">Additional Item Information:<br/>{item.additionaliteminfo}</p>
        </div>
      );
    case 'Actuator':
      return(
        <div className='actuator'>
          <h3 className="item-header">Actuator</h3>
          <img className="item-img" src="" alt="actuator"/>
          <p className="valvesize">Valve Size: NPS {item.valvesize} inch (DN {item.valvesize*.254} mm)</p>
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
          <img className="item-img" src="" alt="dust collector"/>
          <p className="temperature">Temperature: {item.temperature} &#x2109; ({((item.temperature-32)/1.8).toFixed(3)} &#x2103;)</p>
          <p className="particulatetype">Particulate Type(s):<br/>{item.particulatetype.map(particulate=>` ${particulate}`)}</p>{/*<---- This is not a final solution, just a hacky way for spacing to work in html since html will ignore space at the beginning and end of a string.*/}
          <p className="particulatesize">Particulate Size: {item.particulatesize} &micro;m</p>
          <p className="additional-info">Additional Item Information:<br/>{item.additionaliteminfo}</p>
        </div>
      );
    case 'Instrumentation':
      return(
        <div className='instrumentation'>
          <h3 className="item-header">Instrumentation</h3>
          <img className="item-img" src="" alt="instrumentation"/>
          <p className="media">Media: {item.media}</p>
          <p className="pressure">Pressure: {item.pressure} psi ({item.pressure} bar)</p>
          <p className="temperature">Temperature: {item.temperature} &#x2109; ({((item.temperature-32)/1.8).toFixed(3)} &#x2103;)</p>
          <p className="pipesize">Pipe Size: NPS {item.pipesize} inch (DN {item.pipesize*.254} mm)</p>
          <p className="pipesize-info">Pipe Additional Information:<br/>{item.pipesizeadditionalinfo}</p>
          <p className="additional-info">Additional Item Information:<br/>{item.additionaliteminfo}</p>
        </div>
      );
    default:
      return null;
  }
}

export default InquiryItem;
