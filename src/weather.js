import React from 'react';
const Weather = (props) => {
  return(
    <div >
      {props.country && props.city && <p>Location: {props.city},    {props.country}</p>}
      {props.temperature_min && <p>Temperature Min: {props.temperature_min}</p>}
      {props.temperature_max && <p>Temperature Max: {props.temperature_max}</p>}
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      {props.description && <p>Conditions:  {props.description}</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  )
}
export default Weather;